import * as React from 'react'

import { signIn, signUp } from 'ts/services/auth'
import { getMessage } from 'ts/services/errors'
import Paths from 'ts/utils/paths'

import PersonIcon from '@mui/icons-material/Person'
import { Alert, CircularProgress, Link } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

export default function SignUp(): React.ReactElement {
	const [errorText, setErrorText] = React.useState('')
	const [isLoading, setIsLoading] = React.useState(false)

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault()
		setErrorText('')

		const data = new FormData(event.currentTarget)
		const email = data.get('email')?.toString()
		const password1 = data.get('password1')?.toString()
		const password2 = data.get('password2')?.toString()

		if (!email || !password1 || !password2) {
			setErrorText('Please enter an email and password.')
			return
		}

		if (password1 !== password2) {
			setErrorText('Passwords do not match.')
			return
		}

		setIsLoading(true)
		signUp(email, password1)
			.then(() => signIn(email, password1))
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
						name='password1'
						label='Password'
						type='password'
						id='password1'
						autoComplete='new-password'
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
							'Sign Up'
						)}
					</Button>
					<Grid container>
						<Grid item xs>
							<Link href={Paths.signIn} variant='body2'>
								{'Already have an account? Sign In'}
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
