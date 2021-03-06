import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom'
import AdSense from 'ts/components/AdSense'
import InfoPiece from 'ts/components/InfoPiece'
import Map from 'ts/components/Map'
import { getSavedRoute } from 'ts/services/savedRoutes'
import { stripUSA } from 'ts/utils/helpers'
import { SavedRoute } from 'ts/utils/models'

import { CircularProgress, Container, Typography } from '@mui/material'

import RouteWeather from './RouteWeather'

export default function DisplayRoute(): React.ReactElement {
	const urlParams = useParams<{ id: string }>()
	const [route, setRoute] = React.useState<SavedRoute>()
	const [leg, setLeg] = React.useState<google.maps.DirectionsLeg | null>(null)

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
		<Container sx={{ maxWidth: '100vw' }}>
			<Typography variant='h1'>{route.name}</Typography>
			<InfoPiece label='Begin'>{stripUSA(route.beginAddress ?? '')}</InfoPiece>
			<InfoPiece label='End'>{stripUSA(route.endAddress ?? '')}</InfoPiece>
			{leg && (
				<>
					<InfoPiece label='Duration'>{leg.duration?.text}</InfoPiece>
					<InfoPiece label='Distance'>{leg.distance?.text}</InfoPiece>
				</>
			)}

			<Typography variant='h2' sx={{ mb: 3 }}>
				Weather
			</Typography>
			<RouteWeather leg={leg} />

			<AdSense />

			<Typography variant='h2' sx={{ mb: 3 }}>
				Map
			</Typography>
			<Map
				directionsQuery={{
					start: `${route.beginLocation.lat}, ${route.beginLocation.lon}`,
					end: `${route.endLocation.lat}, ${route.endLocation.lon}`,
				}}
				legCallback={setLeg}
				sx={{ mt: 3, pb: 3, height: '400px' }}
			/>
		</Container>
	)
}
