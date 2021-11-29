import React, { useEffect } from 'react'

import InfoPiece from 'ts/components/InfoPiece'
import { getWeather } from 'ts/services/weather'
import { CurrentWeather } from 'ts/utils/models'

import { Alert, Container, LinearProgress, Typography } from '@mui/material'

export default function Weather(): React.ReactElement {
	const [currentPosition, setCurrentPosition] = React.useState<
		GeolocationPosition | null | undefined
	>(undefined)
	const [currentWeather, setCurrentWeather] = React.useState<CurrentWeather>()
	const [errorText, setErrorText] = React.useState<string>()

	const handleGetWeather = (): void => {
		currentPosition &&
			getWeather(
				currentPosition.coords.latitude,
				currentPosition.coords.longitude
			)
				.then(r => setCurrentWeather(r.current))
				.catch(e => setErrorText(e.response.data.message))
	}

	useEffect(() => {
		if (navigator.geolocation)
			navigator.geolocation.getCurrentPosition(
				location => setCurrentPosition(location),
				error => {
					switch (error.code) {
						case error.PERMISSION_DENIED:
							setCurrentPosition(null)
							setErrorText('Location request denied')
							break
						case error.POSITION_UNAVAILABLE:
							setCurrentPosition(null)
							setErrorText('Location information is unavailable')
							break
						case error.TIMEOUT:
							setCurrentPosition(null)
							setErrorText('Location request timed out')
							break
						default:
							setCurrentPosition(null)
							setErrorText(
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
			<Typography variant='h1'>Weather</Typography>

			<p>Weather for current location</p>

			{!errorText && (!currentWeather || !currentPosition) && (
				<>
					<Typography variant='overline'>
						{!currentPosition
							? 'Getting current location...'
							: 'Getting weather...'}
					</Typography>
					<LinearProgress />
				</>
			)}

			{errorText && <Alert severity='error'>{errorText}</Alert>}

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
