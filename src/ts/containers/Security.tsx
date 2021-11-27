import React from 'react'

import ChangePasswordForm from 'ts/forms/ChangePassword'

import { Container, Typography } from '@mui/material'

export default function Security(): React.ReactElement {
	return (
		<Container>
			<Typography variant='h1'>Change Password</Typography>
			<ChangePasswordForm />
		</Container>
	)
}
