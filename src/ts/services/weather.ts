import get from 'axios'
import { Weather } from 'ts/utils/models'

const openWeatherMapApi = 'https://api.openweathermap.org/data/2.5'

export const getWeather = (): Promise<Weather> =>
	get(`${openWeatherMapApi}/onecall`, {
		params: {
			lat: '-33.8688',
			lon: '151.2093',
			appid: process.env.REACT_APP_OPEN_WEATHER_MAP,
			units: 'imperial',
		},
	}).then(r => r.data)
