import React, { useEffect } from 'react'

import InfoPiece from 'ts/components/InfoPiece'
import { getWeather } from 'ts/services/weather'
import { CurrentWeather } from 'ts/utils/models'

import { Alert, Container, LinearProgress, Typography } from '@mui/material'

export default function Presets(): React.ReactElement {
	const [currentPosition, setCurrentPosition] = React.useState<
		GeolocationPosition | null | undefined
	>(undefined)
	const [currentWeather, setCurrentWeather] = React.useState<CurrentWeather>()
	const [locationError, setLocationError] = React.useState<string>()

	const handleGetWeather = (): void => {
		currentPosition &&
			getWeather(
				currentPosition.coords.latitude,
				currentPosition.coords.longitude
			).then(r => setCurrentWeather(r.current))
	}

	useEffect(() => {
		if (navigator.geolocation)
			navigator.geolocation.getCurrentPosition(
				location => setCurrentPosition(location),
				error => {
					switch (error.code) {
						case error.PERMISSION_DENIED:
							setCurrentPosition(null)
							setLocationError('Location request denied')
							break
						case error.POSITION_UNAVAILABLE:
							setCurrentPosition(null)
							setLocationError('Location information is unavailable')
							break
						case error.TIMEOUT:
							setCurrentPosition(null)
							setLocationError('Location request timed out')
							break
						default:
							setCurrentPosition(null)
							setLocationError(
								'An unknown error occurred while getting the location'
							)
					}
				}
			)
		else alert('Geolocation is not supported by this browser.')
	}, [])

	useEffect(() => {
		if (currentPosition) handleGetWeather()
	}, [currentPosition])

	return (
		<Container>
			<Typography variant='h1'>Presets</Typography>
			<Alert severity='warning' sx={{ mt: 2 }}>
				This page will be used for saving favorite routes to quickly reuse.
			</Alert>
			<Typography variant='h2'>Weather Service</Typography>
			<p>For now, this is a demonstration of the weather API service.</p>

			{!locationError && (!currentWeather || !currentPosition) && (
				<>
					<Typography variant='overline'>
						{!currentPosition
							? 'Getting current location...'
							: 'Getting weather...'}
					</Typography>
					<LinearProgress />
				</>
			)}

			{locationError && <Alert severity='error'>{locationError}</Alert>}

			{currentWeather && (
				<div>
					<InfoPiece label='Temperature'>{currentWeather?.temp}ºF</InfoPiece>
					<InfoPiece label='Humidity'>{currentWeather?.humidity}%</InfoPiece>
					<InfoPiece label='Cloud Cover'>{currentWeather?.clouds}%</InfoPiece>
				</div>
			)}
		</Container>
	)
}
