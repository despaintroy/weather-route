import React, { useContext } from 'react'

import { UserContext } from 'App'
import { beforeSubmit, handleValueChange, validateForm } from 'ts/utils/helpers'

import { TextField } from '@mui/material'
import { Box } from '@mui/system'

import { initialFormState } from './validation'

export default function AccountForm(): React.ReactElement {
	const { user } = useContext(UserContext)
	const [submitting, setSubmitting] = React.useState(false)

	const [formState, setFormState] = React.useState(initialFormState)

	function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
		event.preventDefault()

		setFormState(state => beforeSubmit(state))

		if (!formState.formValid) return

		setSubmitting(true)
		console.log('handleSubmit')
		setSubmitting(false)
	}

	return (
		<Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
			<TextField
				variant='standard'
				fullWidth
				label='Name'
				name='name'
				defaultValue={user.name}
				margin='normal'
				onChange={(e): void =>
					setFormState(state => handleValueChange(e, state))
				}
				onBlur={(): void => {
					formState.touched.name = true
					setFormState(state => validateForm(state))
				}}
				error={formState.touched.name && !formState.isValid.name}
				helperText={formState.touched.name && formState.messages.name}
			/>
			<TextField
				variant='standard'
				fullWidth
				label='Email'
				type='email'
				name='email'
				defaultValue={user.email}
				margin='normal'
				onChange={(e): void =>
					setFormState(state => handleValueChange(e, state))
				}
				onBlur={(): void => {
					formState.touched.email = true
					setFormState(state => validateForm(state))
				}}
				error={formState.touched.email && !formState.isValid.email}
				helperText={formState.touched.email && formState.messages.email}
			/>
			{submitting && <p>Submitting...</p>}
		</Box>
	)
}
