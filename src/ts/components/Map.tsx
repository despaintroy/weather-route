import React, {
	LegacyRef,
	useEffect,
} from 'react'

import {
	BeginEnd,
	DirectionsQuery,
} from 'ts/utils/models'

import { SxProps } from '@mui/system'
import { useDirections } from '@ubilabs/google-maps-react-hooks'

export type MapProps = {
	directionsQuery: DirectionsQuery
	beginEndCallback?: (beginEnd: BeginEnd | null) => void
	sx?: SxProps
}

const Map = React.forwardRef((
	props, 
	ref: LegacyRef<HTMLDivElement>
	) => {
	return <div ref={ref} style={{ height: '100%' }} />
})
// Map.displayName = 'Map'

// function Map(props: MapProps): React.ReactElement {
// 	const { directionsQuery, beginEndCallback, sx } = props
// 	const { map } = useGoogleMap()

// 	return (
// 		<Box height='100%' sx={sx}>
// 			<MapCanvas ref={mapRef} />
// 			{/* <PlotRoute
// 				directionsQuery={directionsQuery}
// 				beginEndCallback={beginEndCallback}
// 			/> */}
// 		</Box>
// 	)
// }

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
