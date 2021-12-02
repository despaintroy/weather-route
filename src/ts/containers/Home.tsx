import React from 'react'

import Map from 'ts/components/Map'

function Home(): React.ReactElement {
	return <Map directionsQuery={{ start: 'logan, ut', end: 'ogden, ut' }} />
}

export default React.memo(Home)
