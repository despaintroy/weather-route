import * as React from 'react'

import SignUpForm from 'ts/forms/SignUp'

import PersonIcon from '@mui/icons-material/Person'
import { Container } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function SignUp(): React.ReactElement {
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
					<PersonIcon />
				</Avatar>
				<Typography component='h1' variant='h5'>
					Sign Up
				</Typography>
				<SignUpForm />
			</Box>
		</Container>
	)
}
