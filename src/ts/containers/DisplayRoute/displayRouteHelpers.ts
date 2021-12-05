import { getWeather } from 'ts/services/weather'
import { TimePoint, TimePointWeather } from 'ts/utils/models'

/**
 *
 * @param leg Google maps leg
 * @returns A list of objects containing the time and location at each location along the route
 */
export function getTimePoints(leg: google.maps.DirectionsLeg): TimePoint[] {
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

/**
 *
 * @param timePoints a list of coordinates with respective times
 * @param interval the target time between points
 * @returns a shorter list of TimePoints where the time between them is approx 'interval'
 */
export function reduceTimePoints(
	timePoints: TimePoint[],
	interval: number
): TimePoint[] {
	const reducedTimePoints: TimePoint[] = []
	for (
		let targetTime = 0;
		targetTime < timePoints[timePoints.length - 1].time;
		targetTime += interval
	) {
		// Find the index of the point after the target time
		const index = timePoints.findIndex(
			timePoint => timePoint.time >= targetTime
		)
		if (index === 0) {
			reducedTimePoints.push(timePoints[0])
		} else {
			// Get the points before (t1) and after (t2) the target time
			const t1 = timePoints[index]
			const t2 = timePoints[index - 1]

			// Determine if t1 or t2 is closer to the target time
			const selectedTimePoint =
				Math.abs(t1.time - targetTime) < Math.abs(t2.time - targetTime)
					? t1
					: t2

			// Add the selected time point to the reduced list if it is not already there
			if (
				reducedTimePoints.length == 0 ||
				reducedTimePoints[reducedTimePoints.length - 1].time !==
					selectedTimePoint.time
			) {
				reducedTimePoints.push(selectedTimePoint)
			}
		}
	}
	return reducedTimePoints
}

// Given an array of TimePoints, return an array of TimePointWeathr objects, getting the weather for each TimePoint
export async function getTimePointWeather(
	timePoints: TimePoint[],
	updateLoading?: (percentage: number | ((previous: number) => number)) => void
): Promise<TimePointWeather[]> {
	const timePointWeather: TimePointWeather[] = []

	for (const timePoint of timePoints) {
		updateLoading && updateLoading(p => p + 100 / timePoints.length)
		const weather = await getWeather(timePoint.point.lat, timePoint.point.lon)
		const hour = Math.round(timePoint.time / 3600)
		if (hour > 47) break

		console.log(weather)
		timePointWeather.push({
			...timePoint,
			weather: weather.hourly[hour],
		})
	}
	updateLoading && updateLoading(100)
	return timePointWeather
}
