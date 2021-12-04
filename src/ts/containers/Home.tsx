import React, { useContext } from 'react'

import { MapContext } from 'App'
import Map from 'ts/components/Map'

function Home(): React.ReactElement {
	const mapRef = useContext(MapContext);

	return <Map 
		ref={mapRef}
	// directionsQuery={{ start: 'logan, ut', end: 'ogden, ut' }}
	/>
}

export default React.memo(Home)
