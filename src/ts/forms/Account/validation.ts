import { FormState } from 'ts/services/models'
import { EMAIL_REGEX } from 'ts/utils/constants'
import { newFormState } from 'ts/utils/helpers'

const fieldsArray = ['name', 'email'] as const
type Fields = typeof fieldsArray[number]

export const emailValidator = (state: FormState<Fields>): FormState<Fields> => {
	state.isValid.email = !!state.values.email.match(EMAIL_REGEX)
	state.messages.email = state.isValid.email ? '' : 'Invalid email address'
	return { ...state }
}

export const nameValidator = (state: FormState<Fields>): FormState<Fields> => {
	state.isValid.name = state.values.name.length > 0
	state.messages.name = state.isValid.name ? '' : 'Required'
	return { ...state }
}

export const initialFormState: FormState<Fields> = {
	...newFormState(fieldsArray),
	validators: {
		email: emailValidator,
		name: nameValidator,
	},
}
