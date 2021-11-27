import get from 'axios'
import { Weather } from 'ts/utils/models'

const openWeatherMapApi = 'https://api.openweathermap.org/data/2.5'

export const getWeather = (lat: number, lon: number): Promise<Weather> =>
	get(`${openWeatherMapApi}/onecall`, {
		params: {
			lat: lat,
			lon: lon,
			appid: process.env.REACT_APP_OPEN_WEATHER_MAP,
			units: 'imperial',
		},
	}).then(r => r.data)
