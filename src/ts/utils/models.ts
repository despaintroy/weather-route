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

export interface CurrentWeather {
	clouds: number
	dew_point: number
	dt: number
	feels_like: number
	humidity: number
	pressure: number
	sunrise: number
	sunset: number
	temp: number
	uvi: number
	visibility: number
	wind_deg: number
	wind_speed: number
}

export interface Weather {
	current: CurrentWeather
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
}

export interface TimePointWeather extends TimePoint {
	weather: CurrentWeather
}
