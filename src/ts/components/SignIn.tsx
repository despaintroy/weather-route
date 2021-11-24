import * as React from 'react'

import { signIn } from 'ts/services/auth'
import { getMessage } from 'ts/services/errors'
import { FormState } from 'ts/services/models'
import { EMAIL_REGEX } from 'ts/utils/constants'
import { prepSubmit, validateForm } from 'ts/utils/helpers'
import Paths from 'ts/utils/paths'

import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import {
	Alert,
	Avatar,
	Box,
	Button,
	CircularProgress,
	Container,
	Grid,
	Link,
	TextField,
	Typography,
} from '@mui/material'

type Fields = 'email' | 'password'

export default function SignIn(): React.ReactElement {
	const [isLoading, setIsLoading] = React.useState(false)

	const [formState, setFormState] = React.useState<FormState<Fields>>({
		values: {
			email: '',
			password: '',
		},
		messages: {
			email: '',
			password: '',
		},
		isValid: {
			email: false,
			password: false,
		},
		touched: {
			email: false,
			password: false,
		},
		validators: {
			email: (state: FormState<Fields>): FormState<Fields> => {
				state.isValid.email = !!state.values.email.match(EMAIL_REGEX)
				state.messages.email = state.isValid.email
					? ''
					: 'Invalid email address'
				return { ...state }
			},
			password: (state: FormState<Fields>): FormState<Fields> => {
				state.isValid.password = state.values.password.length > 0
				state.messages.password = state.isValid.password ? '' : 'Required'
				return { ...state }
			},
		},
		formValid: false,
		formMessage: '',
		attemptedSubmit: false,
	})

	function handleUserInput(e: React.ChangeEvent<HTMLInputElement>): void {
		const name = e.target.name as Fields
		const value = e.target.value.toString()

		setFormState(state => {
			if (!state.isValid[name]) state = state.validators[name](state)
			const fieldValues = formState.values
			fieldValues[name] = value
			return { ...state, values: fieldValues }
		})
	}

	function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
		event.preventDefault()

		setFormState(state => validateForm(state))
		setFormState(state => prepSubmit(state))

		if (!formState.formValid) {
			setFormState(state => {
				return { ...state, formMessage: 'Please fix the errors in the form' }
			})
			return
		}

		setIsLoading(true)

		signIn(formState.values.email, formState.values.password)
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
						id='email'
						label='Email Address'
						name='email'
						autoComplete='email'
						autoFocus
						onChange={handleUserInput}
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
						onChange={handleUserInput}
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
						{isLoading ? (
							<CircularProgress size={24} color='inherit' />
						) : (
							'Sign In'
						)}
					</Button>
					<Grid container>
						<Grid item xs>
							<Link href={Paths.signUp} variant='body2'>
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
						<Grid item>
							{/* <Link href='#' variant='body2'>
								Forgot password?
							</Link> */}
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	)
}
