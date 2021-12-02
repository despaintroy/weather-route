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

export interface LatLong {
	lat: number
	lon: number
}

export interface BeginEnd {
	beginLocation: LatLong
	endLocation: LatLong
	beginAddress?: string
	endAddress?: string
}

export interface SavedRoute extends BeginEnd {
	id: string
	name: string
}
