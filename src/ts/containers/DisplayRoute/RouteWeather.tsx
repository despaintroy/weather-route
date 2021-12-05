import React, { useEffect } from 'react'

import { getWeather } from 'ts/services/weather'
import { TimePoint, TimePointWeather } from 'ts/utils/models'

import { LinearProgress } from '@mui/material'

import { getTimePoints, reduceTimePoints } from './displayRouteHelpers'

export default function RouteWeather(props: {
	leg: google.maps.DirectionsLeg | null
}): React.ReactElement {
	const { leg } = props
	const [weatherLoadProgress, setWeatherLoadProgress] = React.useState(0)
	const [weatherArr, setWeatherArr] = React.useState<TimePointWeather[]>([])

	useEffect(() => {
		if (leg) {
			const timePoints = reduceTimePoints(getTimePoints(leg), 900)
			getTimePointWeather(timePoints).then(arr => {
				setWeatherArr(arr)
			})
		}
	}, [leg])

	// Given an array of TimePoints, return an array of TimePointWeathr objects, getting the weather for each TimePoint
	async function getTimePointWeather(
		timePoints: TimePoint[]
	): Promise<TimePointWeather[]> {
		const timePointWeather: TimePointWeather[] = []
		for (const timePoint of timePoints) {
			const weather = await getWeather(timePoint.point.lat, timePoint.point.lon)
			timePointWeather.push({
				...timePoint,
				weather: weather.current,
			})
			setWeatherLoadProgress(p => p + 100 / timePoints.length)
		}
		setWeatherLoadProgress(100)
		return timePointWeather
	}

	if (weatherLoadProgress !== 100) {
		return <LinearProgress variant='determinate' value={weatherLoadProgress} />
	}

	return (
		<>
			{weatherArr.map((weather, i) => (
				<p key={i}>
					Time: {weather.time}, Temp: {weather.weather.temp}
				</p>
			))}
		</>
	)
}
