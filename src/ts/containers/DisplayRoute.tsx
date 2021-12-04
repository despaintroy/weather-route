import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom'
import InfoPiece from 'ts/components/InfoPiece'
import Map from 'ts/components/Map'
import { getSavedRoute } from 'ts/services/savedRoutes'
import { getWeather } from 'ts/services/weather'
import { SavedRoute, TimePoint, TimePointWeather } from 'ts/utils/models'

import {
	CircularProgress,
	Container,
	LinearProgress,
	Typography,
} from '@mui/material'

function getTimePoints(leg: google.maps.DirectionsLeg): TimePoint[] {
	const timePoints: TimePoint[] = []
	let timeAccumulator = 0
	for (const step of leg.steps) {
		timePoints.push({
			time: timeAccumulator,
			point: {
				lat: step.start_location.lat(),
				lon: step.start_location.lng(),
			},
		})
		timeAccumulator += step.duration?.value ?? 0
	}
	timePoints.push({
		time: timeAccumulator,
		point: {
			lat: leg.end_location.lat(),
			lon: leg.end_location.lng(),
		},
	})
	return timePoints
}

// Given an array of TimePoints and an interval, reduce the array to a new array of TimePoints
// where the interval is the minimum time between two consecutive TimePoints
function reduceTimePoints(
	timePoints: TimePoint[],
	interval: number
): TimePoint[] {
	const reducedTimePoints: TimePoint[] = []
	for (
		let time = 0;
		time < timePoints[timePoints.length - 1].time;
		time += interval
	) {
		// Find the index of the first time point that is greater than or equal to time
		const index = timePoints.findIndex(timePoint => timePoint.time >= time)
		if (index === 0) {
			reducedTimePoints.push(timePoints[0])
		} else {
			const t1 = timePoints[index]
			const t2 = timePoints[index + -1]
			// Determine if t1 or t2 is closer to time
			const selectedTimePoint =
				Math.abs(t1.time - time) < Math.abs(t2.time - time) ? t1 : t2
			if (
				reducedTimePoints.length == 0 ||
				reducedTimePoints[reducedTimePoints.length - 1].time !==
					selectedTimePoint.time
			) {
				reducedTimePoints.push(selectedTimePoint)
			}
		}
	}

	// let lastTime = 0
	// for (const timePoint of timePoints) {
	// 	if (timePoint.time - lastTime >= interval) {
	// 		reducedTimePoints.push(timePoint)
	// 		lastTime = timePoint.time
	// 	}
	// }
	return reducedTimePoints
}

export default function DisplayRoute(): React.ReactElement {
	const urlParams = useParams<{ id: string }>()
	const [route, setRoute] = React.useState<SavedRoute>()
	const [leg, setLeg] = React.useState<google.maps.DirectionsLeg | null>()
	const [weatherLoadProgress, setWeatherLoadProgress] = React.useState(0)
	const [weatherArr, setWeatherArr] = React.useState<TimePointWeather[]>([])

	useEffect(() => {
		getSavedRoute(urlParams.id).then(r => setRoute(r))
	}, [])

	// Given an array of TimePoints, return an array of TimePointWeathr objects, getting the weather for each TimePoint
	async function getTimePointWeather(
		timePoints: TimePoint[]
	): Promise<TimePointWeather[]> {
		const timePointWeather: TimePointWeather[] = []
		for (const timePoint of timePoints) {
			const weather = await getWeather(timePoint.point.lat, timePoint.point.lon)
			timePointWeather.push({
				time: timePoint.time,
				point: timePoint.point,
				weather: weather.current,
			})
			setWeatherLoadProgress(p => p + 100 / timePoints.length)
		}
		setWeatherLoadProgress(100)
		return timePointWeather
	}

	useEffect(() => {
		if (leg) {
			const timePoints = getTimePoints(leg)
			const reducedTimePoints = reduceTimePoints(timePoints, 900)
			console.log(reducedTimePoints)
			getTimePointWeather(reducedTimePoints).then(weatherArr => {
				setWeatherArr(weatherArr)
			})
		}
	}, [leg])

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
			<Typography variant='h2' sx={{ mb: 3 }}>
				Weather
			</Typography>
			{weatherLoadProgress !== 100 ? (
				<LinearProgress variant='determinate' value={weatherLoadProgress} />
			) : (
				weatherArr.map((weather, i) => (
					<p key={i}>
						Time: {weather.time}, Temp: {weather.weather.temp}
					</p>
				))
			)}

			<Typography variant='h2' sx={{ mb: 3 }}>
				Map
			</Typography>
			<Map
				directionsQuery={{
					start: `${route.beginLocation.lat}, ${route.beginLocation.lon}`,
					end: `${route.endLocation.lat}, ${route.endLocation.lon}`,
				}}
				legCallback={l => {
					setLeg(l)
				}}
				sx={{ mt: 3, pb: 3 }}
			/>
		</Container>
	)
}
