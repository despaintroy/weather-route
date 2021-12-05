import React, { useEffect } from 'react'

import { formatTime } from 'ts/utils/helpers'
import { TimePointWeather } from 'ts/utils/models'

import {
	LinearProgress,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material'

import {
	getTimePoints,
	getTimePointWeather,
	reduceTimePoints,
} from './displayRouteHelpers'

export default function RouteWeather(props: {
	leg: google.maps.DirectionsLeg | null
}): React.ReactElement {
	const { leg } = props
	const [weatherLoadProgress, setWeatherLoadProgress] = React.useState(0)
	const [timePointWeather, setTimePointWeather] =
		React.useState<TimePointWeather[]>()

	useEffect(() => {
		if (leg) {
			const timePoints = reduceTimePoints(getTimePoints(leg), 8)
			getTimePointWeather(timePoints, setWeatherLoadProgress).then(arr => {
				setTimePointWeather(arr)
			})
		}
	}, [leg])

	function createJsDate(secondsOffset: number): Date {
		return new Date(new Date().getTime() + secondsOffset * 1000)
	}

	if (!timePointWeather) {
		return <LinearProgress variant='determinate' value={weatherLoadProgress} />
	}

	return (
		<TableContainer
			component={Paper}
			sx={{ maxWidth: '100%', overflow: 'scroll' }}
		>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Time</TableCell>
						<TableCell>Temp.</TableCell>
						<TableCell>Precip.</TableCell>
						<TableCell>Clouds</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{timePointWeather.map((weather, i) => (
						<TableRow
							key={i}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell>{formatTime(createJsDate(weather.time))}</TableCell>
							<TableCell>{Math.round(weather.weather.temp)}º</TableCell>
							<TableCell>{Math.round(weather.weather.pop * 100)}%</TableCell>
							<TableCell>{weather.weather.clouds}%</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}
