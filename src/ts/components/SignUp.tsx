import * as React from 'react'

import { getMessage } from 'ts/services/errors'
import { FormState } from 'ts/services/models'
import { signUp } from 'ts/services/user'
import { EMAIL_REGEX } from 'ts/utils/constants'
import {
	beforeSubmit,
	handleValueChange,
	newFormState,
	validateForm,
} from 'ts/utils/helpers'
import Paths from 'ts/utils/paths'

import PersonIcon from '@mui/icons-material/Person'
import { Alert, CircularProgress, Link } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

const fieldsArray = ['name', 'email', 'password1', 'password2'] as const
type Fields = typeof fieldsArray[number]

const nameValidator = (state: FormState<Fields>): FormState<Fields> => {
	state.isValid.name = state.values.name.length > 0
	state.messages.name = state.isValid.name ? '' : 'Required'
	return { ...state }
}

const emailValidator = (state: FormState<Fields>): FormState<Fields> => {
	state.isValid.email = !!state.values.email.match(EMAIL_REGEX)
	state.messages.email = state.isValid.email ? '' : 'Invalid email address'
	return { ...state }
}

const password1Validator = (state: FormState<Fields>): FormState<Fields> => {
	state.isValid.password1 = state.values.password1.length > 4
	state.messages.password1 = state.isValid.password1
		? ''
		: 'Must be at least 5 characters long'
	return { ...state }
}

const password2Validator = (state: FormState<Fields>): FormState<Fields> => {
	state.isValid.password2 = state.values.password2 === state.values.password1
	state.messages.password2 = state.isValid.password2
		? ''
		: 'Passwords do not match'
	return { ...state }
}

export default function SignUp(): React.ReactElement {
	const [isLoading, setIsLoading] = React.useState(false)

	const [formState, setFormState] = React.useState<FormState<Fields>>({
		...newFormState(fieldsArray),
		validators: {
			name: nameValidator,
			email: emailValidator,
			password1: password1Validator,
			password2: password2Validator,
		},
	})

	function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
		event.preventDefault()

		setFormState(state => beforeSubmit(state))

		if (!formState.formValid) return

		setIsLoading(true)

		signUp(
			formState.values.email,
			formState.values.password1,
			formState.values.name
		)
			.catch(e =>
				setFormState(state => {
					return { ...state, formMessage: getMessage(e) }
				})
			)
			.finally(() => setIsLoading(false))
	}

	return (
		<Container component='main' maxWidth='xs'>
			<Box
				sx={{
					mt: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<PersonIcon />
				</Avatar>
				<Typography component='h1' variant='h5'>
					Sign Up
				</Typography>
				<Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
					<TextField
						margin='normal'
						required
						fullWidth
						id='name'
						label='Name'
						name='name'
						autoComplete='name'
						autoFocus
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
						margin='normal'
						required
						fullWidth
						id='email'
						label='Email Address'
						name='email'
						autoComplete='email'
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
					<TextField
						margin='normal'
						required
						fullWidth
						name='password1'
						label='Password'
						type='password'
						id='password1'
						autoComplete='new-password'
						onChange={(e): void =>
							setFormState(state => handleValueChange(e, state))
						}
						onBlur={(): void => {
							formState.touched.password1 = true
							setFormState(state => validateForm(state))
						}}
						error={formState.touched.password1 && !formState.isValid.password1}
						helperText={
							formState.touched.password1 && formState.messages.password1
						}
					/>
					<TextField
						margin='normal'
						required
						fullWidth
						name='password2'
						label='Confirm Password'
						type='password'
						id='password2'
						autoComplete='new-password'
						onChange={(e): void =>
							setFormState(state => handleValueChange(e, state))
						}
						onBlur={(): void => {
							formState.touched.password2 = true
							setFormState(state => validateForm(state))
						}}
						error={formState.touched.password2 && !formState.isValid.password2}
						helperText={
							formState.touched.password2 && formState.messages.password2
						}
					/>
					{formState.attemptedSubmit && formState.formMessage && (
						<Alert sx={{ mt: 2 }} severity='error'>
							{formState.formMessage || 'Form error'}
						</Alert>
					)}
					<Button
						type='submit'
						fullWidth
						variant='contained'
						sx={{ mt: 2, mb: 2 }}
					>
						{isLoading ? (
							<CircularProgress size={24} color='inherit' />
						) : (
							'Sign Up'
						)}
					</Button>
					<Link href={Paths.signIn} variant='body2'>
						{'Already have an account? Sign In'}
					</Link>
				</Box>
			</Box>
		</Container>
	)
}
