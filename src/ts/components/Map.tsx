import React from 'react'

import { Box } from '@mui/system'
import {
	DirectionsRenderer,
	DirectionsService,
	GoogleMap,
	useJsApiLoader,
} from '@react-google-maps/api'

export type MapProps = {
	start: string
	end: string
}

function Map(props: MapProps): React.ReactElement {
	const { start, end } = props

	// Due to bug in react google maps api, this is needed to prevent infinite re-renders
	const responseCount = React.useRef(0)
	const [directions, setDirections] =
		React.useState<google.maps.DirectionsResult | null>(null)

	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY ?? '',
	})

	const directionsCallback = (
		response: google.maps.DirectionsResult | null
	): void => {
		console.log(response)
		if (response !== null && responseCount.current < 2) {
			responseCount.current += 1
			setDirections(response)
		}
	}

	return (
		<Box height='100%'>
			{isLoaded && (
				<GoogleMap
					mapContainerStyle={{
						width: '100%',
						height: '100%',
					}}
				>
					<DirectionsService
						options={{
							origin: start,
							destination: end,
							travelMode: google.maps.TravelMode.DRIVING,
						}}
						callback={directionsCallback}
					/>
					{directions && (
						<DirectionsRenderer
							options={{
								directions: directions,
							}}
						/>
					)}
				</GoogleMap>
			)}
		</Box>
	)
}

export default React.memo(Map)
