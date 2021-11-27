import React from 'react'

import ProfileForm from 'ts/forms/Profile'

import { Container, Typography } from '@mui/material'

export default function Profile(): React.ReactElement {
	return (
		<Container>
			<Typography variant='h1'>Edit Profile</Typography>
			<ProfileForm />
		</Container>
	)
}
