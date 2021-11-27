import React from 'react'

import ChangePasswordForm from 'ts/forms/ChangePassword'

import { Container } from '@mui/material'

export default function Security(): React.ReactElement {
	return (
		<Container>
			<h1>Change Password</h1>
			<ChangePasswordForm />
		</Container>
	)
}
