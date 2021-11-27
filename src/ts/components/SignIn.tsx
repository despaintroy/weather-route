import * as React from 'react'

import SignInForm from 'ts/forms/SignIn'

import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Avatar, Box, Container, Typography } from '@mui/material'

export default function SignIn(): React.ReactElement {
	return (
		<Container>
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
				<SignInForm />
			</Box>
		</Container>
	)
}
