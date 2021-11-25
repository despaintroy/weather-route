import * as React from 'react'

import { signIn } from 'ts/services/auth'
import { getMessage } from 'ts/services/errors'
import { FormState } from 'ts/services/models'
import { EMAIL_REGEX } from 'ts/utils/constants'
import {
	beforeSubmit,
	handleValueChange,
	newFormState,
	validateForm,
} from 'ts/utils/helpers'
import Paths from 'ts/utils/paths'

import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import {
	Alert,
	Avatar,
	Box,
	Button,
	CircularProgress,
	Container,
	Link,
	TextField,
	Typography,
} from '@mui/material'

const fieldsArray = ['email', 'password'] as const
type Fields = typeof fieldsArray[number]

const emailValidator = (state: FormState<Fields>): FormState<Fields> => {
	state.isValid.email = !!state.values.email.match(EMAIL_REGEX)
	state.messages.email = state.isValid.email ? '' : 'Invalid email address'
	return { ...state }
}

const passwordValidator = (state: FormState<Fields>): FormState<Fields> => {
	state.isValid.password = state.values.password.length > 0
	state.messages.password = state.isValid.password ? '' : 'Required'
	return { ...state }
}

export default function SignIn(): React.ReactElement {
	const [submitting, setSubmitting] = React.useState(false)

	const [formState, setFormState] = React.useState<FormState<Fields>>({
		...newFormState(fieldsArray),
		validators: {
			email: emailValidator,
			password: passwordValidator,
		},
	})

	function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
		event.preventDefault()

		setFormState(state => beforeSubmit(state))

		if (!formState.formValid) return

		setSubmitting(true)

		signIn(formState.values.email, formState.values.password)
			.catch(e =>
				setFormState(state => {
					return { ...state, formMessage: getMessage(e) }
				})
			)
			.finally(() => setSubmitting(false))
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
					<LockOutlinedIcon />
				</Avatar>
				<Typography component='h1' variant='h5'>
					Sign In
				</Typography>
				<Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
					<TextField
						margin='normal'
						required
						fullWidth
						type='email'
						id='email'
						label='Email'
						name='email'
						autoComplete='email'
						autoFocus
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
						name='password'
						label='Password'
						type='password'
						id='password'
						autoComplete='current-password'
						onChange={(e): void =>
							setFormState(state => handleValueChange(e, state))
						}
						onBlur={(): void => {
							formState.touched.password = true
							setFormState(state => validateForm(state))
						}}
						error={formState.touched.password && !formState.isValid.password}
						helperText={
							formState.touched.password && formState.messages.password
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
						{submitting ? (
							<CircularProgress size={24} color='inherit' />
						) : (
							'Sign In'
						)}
					</Button>
					<Link href={Paths.signUp} variant='body2'>
						{"Don't have an account? Sign Up"}
					</Link>
				</Box>
			</Box>
		</Container>
	)
}
