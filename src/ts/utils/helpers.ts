import { FormState } from 'ts/services/models'

export function prepSubmit<FieldNames extends string>(
	state: FormState<FieldNames>
): FormState<FieldNames> {
	for (const key in state.touched) state.touched[key] = true
	state.attemptedSubmit = true
	return state
}

export function validateForm<FieldNames extends string>(
	state: FormState<FieldNames>
): FormState<FieldNames> {
	let isValid = true
	for (const key in state.validators) {
		state = state.validators[key](state)
		if (!state.isValid[key]) isValid = false
	}
	state.formValid = isValid
	return state
}
