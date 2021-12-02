import React, { LegacyRef, useCallback, useEffect, useState } from 'react'

import { BeginEnd } from 'ts/utils/models'

import { Box, SxProps } from '@mui/system'
import {
	GoogleMapProvider,
	useDirections,
	useGoogleMap,
} from '@ubilabs/google-maps-react-hooks'

const MapCanvas = React.forwardRef((props, ref: LegacyRef<HTMLDivElement>) => (
	<div ref={ref} style={{ height: '100%' }} />
))
MapCanvas.displayName = 'MapCanvas'

export type MapProps = {
	start: string
	end: string
	beginEndCallback?: (beginEnd: BeginEnd) => void
	sx?: SxProps
}

function Map(props: MapProps): React.ReactElement {
	const { start, end, beginEndCallback, sx } = props
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
				{start && end && (
					<PlotRoute
						start={start}
						end={end}
						beginEndCallback={beginEndCallback}
					/>
				)}
			</GoogleMapProvider>
		</Box>
	)
}

function PlotRoute(props: {
	start: string
	end: string
	beginEndCallback?: (beginEnd: BeginEnd) => void
}): React.ReactElement {
	const { start, end, beginEndCallback } = props
	const { map } = useGoogleMap()
	const {
		directionsService,
		findRoute,
		findAndRenderRoute,
		renderRouteOfIndex,
	} = useDirections({
		renderOnMap: true,
		renderOptions: {},
	})

	useEffect(() => {
		if (findAndRenderRoute)
			findAndRenderRoute({
				origin: start,
				destination: end,
				travelMode: google.maps.TravelMode.DRIVING,
			}).then(r => {
				const route = r.routes[0]
				console.log(route)
				if (beginEndCallback)
					beginEndCallback({
						beginLocation: {
							lat: route.legs[0].start_location.lat(),
							lon: route.legs[0].start_location.lng(),
						},
						endLocation: {
							lat: route.legs[0].end_location.lat(),
							lon: route.legs[0].end_location.lng(),
						},
						beginAddress: route.legs[0].start_address,
						endAddress: route.legs[0].end_address,
					})
			})
	}, [start, end])

	return <></>
}

Map.displayName = 'Map'
export default React.memo(Map)
