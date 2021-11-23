import React, { useContext } from 'react'

import { UserContext } from 'App'
import { signOut } from 'ts/services/auth'

import Button from '@mui/material/Button'
import Container from '@mui/material/Container'

function Home(): React.ReactElement {
	const { user } = useContext(UserContext)

	return (
		<div>
			<Container>
				<h1>Home</h1>
				<p>
					Signed in as user {user.name ?? 'none'} with email {user.email}.
				</p>
				<Button variant='contained' onClick={signOut}>
					Sign Out
				</Button>
			</Container>
		</div>
	)
}

export default Home
