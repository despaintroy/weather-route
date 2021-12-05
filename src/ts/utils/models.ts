export interface User {
	readonly id: string
	readonly lastSignIn?: Date
	name: string | null | undefined
	email: string | null | undefined
	phone: string | null | undefined
}

export interface FormState<FieldNames extends string> {
	values: Record<FieldNames, string>
	isValid: Record<FieldNames, boolean>
	messages: Record<FieldNames, string>
	touched: Record<FieldNames, boolean>
	validators: Record<
		FieldNames,
		(state: FormState<FieldNames>) => FormState<FieldNames>
	>
	formValid: boolean
	formMessage: string
	attemptedSubmit: boolean
}

export interface CurrentWeather extends HourlyWeather {
	sunrise: number
	sunset: number
}

export interface HourlyWeather {
	clouds: number
	dew_point: number
	dt: number
	feels_like: number
	humidity: number
	pressure: number
	temp: number
	uvi: number
	visibility: number
	wind_deg: number
	wind_gust: number
	wind_speed: number
	pop: number
}

export interface Weather {
	current: CurrentWeather
	hourly: HourlyWeather[]
}

export interface LatLon {
	lat: number
	lon: number
}

export interface DirectionsQuery {
	start: string
	end: string
}

export interface BeginEnd {
	beginLocation: LatLon
	endLocation: LatLon
	beginAddress?: string
	endAddress?: string
}

export interface SavedRoute extends BeginEnd {
	id: string
	name: string
}

export interface TimePoint {
	time: number
	point: LatLon
	address?: string
}

export interface TimePointWeather extends TimePoint {
	weather: HourlyWeather
}
