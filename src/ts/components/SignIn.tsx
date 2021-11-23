import * as React from 'react'

import { signIn } from 'ts/services/auth'
import { getMessage } from 'ts/services/errors'

import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Alert, CircularProgress } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

export default function SignIn(): React.ReactElement {
	const [errorText, setErrorText] = React.useState('')
	const [isLoading, setIsLoading] = React.useState(false)

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault()
		setErrorText('')

		const data = new FormData(event.currentTarget)
		const email = data.get('email')?.toString()
		const password = data.get('password')?.toString()

		if (!email || !password) {
			setErrorText('Please enter an email and password.')
			return
		}

		setIsLoading(true)
		signIn(email, password)
			.catch(e => setErrorText(getMessage(e)))
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
					Sign in
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
					/>
					{errorText && (
						<Alert sx={{ mt: 2 }} severity='error'>
							{errorText}
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
							{/* <Link href='#' variant='body2'>
								{"Don't have an account? Sign Up"}
							</Link> */}
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
