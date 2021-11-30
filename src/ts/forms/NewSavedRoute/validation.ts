import { newFormState } from 'ts/utils/helpers'
import { FormState } from 'ts/utils/models'

const fieldsArray = ['name', 'start', 'end'] as const
type Fields = typeof fieldsArray[number]

export const nameValidator = (state: FormState<Fields>): FormState<Fields> => {
	state.isValid.name = state.values.name.length > 0
	state.messages.name = state.isValid.name ? '' : 'Required'
	return { ...state }
}

export const startValidator = (state: FormState<Fields>): FormState<Fields> => {
	state.isValid.start = state.values.start.length > 0
	state.messages.start = state.isValid.start ? '' : 'Required'
	return { ...state }
}

export const endValidator = (state: FormState<Fields>): FormState<Fields> => {
	state.isValid.end = state.values.end.length > 0
	state.messages.end = state.isValid.end ? '' : 'Required'
	return { ...state }
}

export const getInitialFormState = (): FormState<Fields> => {
	return {
		...newFormState(fieldsArray),
		validators: {
			name: nameValidator,
			start: startValidator,
			end: endValidator,
		},
	}
}
