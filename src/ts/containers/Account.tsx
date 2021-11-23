import React, { useContext } from 'react'

import { UserContext } from 'App'
import { signOut } from 'ts/services/auth'

import Button from '@mui/material/Button'
import Container from '@mui/material/Container'

export default function Account(): React.ReactElement {
	const { user } = useContext(UserContext)

	return (
		<Container>
			<h1>Account</h1>
			<p>
				<b>Name:</b> {user.name} <br />
				<b>Email:</b> {user.email} <br />
				<b>Last Sign-in:</b> {user.lastSignIn?.toLocaleString()} <br />
			</p>
			<Button fullWidth variant='contained' onClick={signOut}>
				Sign Out
			</Button>
		</Container>
	)
}
