import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom'
import InfoPiece from 'ts/components/InfoPiece'
import Map from 'ts/components/Map'
import { getSavedRoute } from 'ts/services/savedRoutes'
import { SavedRoute } from 'ts/utils/models'

import { CircularProgress, Container, Typography } from '@mui/material'

export default function DisplayRoute(): React.ReactElement {
	const urlParams = useParams<{ id: string }>()
	const [route, setRoute] = React.useState<SavedRoute>()
	const [leg, setLeg] = React.useState<google.maps.DirectionsLeg | null>()

	useEffect(() => {
		getSavedRoute(urlParams.id).then(r => setRoute(r))
	}, [])

	if (!route) {
		return (
			<Container sx={{ textAlign: 'center', mt: 5 }}>
				<CircularProgress />
			</Container>
		)
	}

	return (
		<Container>
			<Typography variant='h1'>Route</Typography>
			<Typography variant='h2' sx={{ mb: 3 }}>
				{route.name}
			</Typography>
			<InfoPiece label='Begin'>{route.beginAddress}</InfoPiece>
			<InfoPiece label='End'>{route.endAddress}</InfoPiece>
			{leg && (
				<>
					<InfoPiece label='Duration'>{leg.duration?.text}</InfoPiece>
					<InfoPiece label='Distance'>{leg.distance?.text}</InfoPiece>
				</>
			)}
			<Map
				directionsQuery={{
					start: `${route.beginLocation.lat}, ${route.beginLocation.lon}`,
					end: `${route.endLocation.lat}, ${route.endLocation.lon}`,
				}}
				legCallback={l => {
					console.log(l)
					setLeg(l)
				}}
				sx={{ mt: 3 }}
			/>
		</Container>
	)
}
