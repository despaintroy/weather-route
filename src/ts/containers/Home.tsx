import React from 'react'

import { Box } from '@mui/system'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'

function Home(): React.ReactElement {
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY ?? '',
	})

	return (
		<Box height='100%'>
			{isLoaded && (
				<GoogleMap
					mapContainerStyle={{
						width: '100%',
						height: '100%',
					}}
					center={{
						lat: -3.745,
						lng: -38.523,
					}}
					zoom={10}
				>
					{/* Child components, such as markers, info windows, etc. */}
					<></>
				</GoogleMap>
			)}
		</Box>
	)
}

export default React.memo(Home)
