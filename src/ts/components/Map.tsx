import React, { LegacyRef, useCallback, useEffect, useState } from 'react'

import { BeginEnd, DirectionsQuery } from 'ts/utils/models'

import { Box, SxProps } from '@mui/system'
import {
	GoogleMapProvider,
	useDirections,
} from '@ubilabs/google-maps-react-hooks'

const MapCanvas = React.forwardRef((props, ref: LegacyRef<HTMLDivElement>) => (
	<div ref={ref} style={{ height: '100%' }} />
))
MapCanvas.displayName = 'MapCanvas'

export type MapProps = {
	directionsQuery: DirectionsQuery
	beginEndCallback?: (beginEnd: BeginEnd | null) => void
	sx?: SxProps
}

function Map(props: MapProps): React.ReactElement {
	const { directionsQuery, beginEndCallback, sx } = props
	const [mapContainer, setMapContainer] = useState(null)
	const mapRef = useCallback(node => {
		node && setMapContainer(node)
	}, [])

	return (
		<Box height='100%' sx={sx}>
			<GoogleMapProvider
				googleMapsAPIKey={process.env.REACT_APP_GOOGLE_MAPS_KEY ?? ''}
				mapContainer={mapContainer}
				options={{
					// center: {lat: -34.397, lng: 150.644},
					zoom: 8,
					fullscreenControl: false,
					streetViewControl: false,
					zoomControl: false,
					mapTypeControl: false,
				}}
				onLoad={(map): void => map.setZoom(4)}
			>
				<MapCanvas ref={mapRef} />
				<PlotRoute
					directionsQuery={directionsQuery}
					beginEndCallback={beginEndCallback}
				/>
			</GoogleMapProvider>
		</Box>
	)
}

function PlotRoute(props: {
	directionsQuery: DirectionsQuery
	beginEndCallback?: (beginEnd: BeginEnd | null) => void
}): React.ReactElement {
	const { directionsQuery, beginEndCallback } = props
	// const { map } = useGoogleMap()
	const {
		// directionsService,
		// findRoute,
		findAndRenderRoute,
		// renderRouteOfIndex,
	} = useDirections({
		renderOnMap: true,
		renderOptions: {},
	})

	console.log(directionsQuery, findAndRenderRoute)

	useEffect(() => {
		if (findAndRenderRoute && directionsQuery.start && directionsQuery.end) {
			findAndRenderRoute({
				origin: directionsQuery.start,
				destination: directionsQuery.end,
				travelMode: google.maps.TravelMode.DRIVING,
			})
				.then(r => {
					console.log(r.routes[0])
					const leg = r.routes[0].legs[0]
					if (beginEndCallback)
						beginEndCallback({
							beginLocation: {
								lat: leg.start_location.lat(),
								lon: leg.start_location.lng(),
							},
							endLocation: {
								lat: leg.end_location.lat(),
								lon: leg.end_location.lng(),
							},
							beginAddress: leg.start_address,
							endAddress: leg.end_address,
						})
				})
				.catch(e => {
					beginEndCallback && beginEndCallback(null)
					console.error('Error finding route:', e)
				})
		}
	}, [directionsQuery, findAndRenderRoute])

	return <></>
}

Map.displayName = 'Map'
export default React.memo(Map)
