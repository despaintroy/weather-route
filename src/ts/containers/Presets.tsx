import React from 'react'

import InfoPiece from 'ts/components/InfoPiece'
import { getWeather } from 'ts/services/weather'
import { CurrentWeather } from 'ts/utils/models'

import {
	Alert,
	Button,
	CircularProgress,
	Container,
	Typography,
} from '@mui/material'

export default function Presets(): React.ReactElement {
	const [loading, setLoading] = React.useState(false)
	const [currentWeather, setCurrentWeather] = React.useState<CurrentWeather>()

	const handleGetWeather = (): void => {
		setLoading(true)
		getWeather()
			.then(r => setCurrentWeather(r.current))
			.finally(() => setLoading(false))
	}

	return (
		<Container>
			<Typography variant='h1'>Presets</Typography>
			<Alert severity='warning' sx={{ mt: 2 }}>
				This page will be used for saving favorite routes to quickly reuse.
			</Alert>
			<Typography variant='h2'>Weather Service</Typography>
			<p>For now, this is a demonstration of the weather API service.</p>
			<Button
				fullWidth
				variant='contained'
				onClick={handleGetWeather}
				sx={{ mb: 3 }}
			>
				{loading ? (
					<CircularProgress size={24} color='inherit' />
				) : (
					'Get Current Weather'
				)}
			</Button>
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
