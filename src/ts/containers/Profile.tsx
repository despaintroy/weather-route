import React from 'react'

import ProfileForm from 'ts/forms/Profile'

import { Container } from '@mui/material'

export default function Profile(): React.ReactElement {
	return (
		<Container>
			<h1>Edit Profile</h1>
			<ProfileForm />
		</Container>
	)
}
