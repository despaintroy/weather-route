import React, { LegacyRef, useCallback, useState } from 'react'

import { Box, SxProps } from '@mui/system'
import {
	GoogleMapProvider,
	useDirections,
	useGoogleMap,
} from '@ubilabs/google-maps-react-hooks'

const MapCanvas = React.forwardRef((props, ref: LegacyRef<HTMLDivElement>) => (
	<div ref={ref} style={{ height: '100%' }} />
))

export type MapProps = {
	start: string
	end: string
	sx?: SxProps
}

function Map(props: MapProps): React.ReactElement {
	const { start, end, sx } = props
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
				}}
				onLoad={map => map.setZoom(4)}
			>
				<MapCanvas ref={mapRef} />
				{start && end && <PlotRoute start={start} end={end} />}
			</GoogleMapProvider>
		</Box>
	)
}

function PlotRoute(props: { start: string; end: string }): React.ReactElement {
	const { start, end } = props
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

	if (findAndRenderRoute)
		findAndRenderRoute({
			origin: start,
			destination: end,
			travelMode: google.maps.TravelMode.DRIVING,
		}).then(r => {
			console.log(r)
		})

	return <></>
}

export default Map
// export default React.memo(Map)
