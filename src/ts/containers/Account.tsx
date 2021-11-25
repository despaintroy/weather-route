import React from 'react'

import AccountForm from 'ts/forms/Account/AccountForm'
import { signOut } from 'ts/services/auth'

import Button from '@mui/material/Button'
import Container from '@mui/material/Container'

export default function Account(): React.ReactElement {
	return (
		<Container>
			<h1>Account</h1>
			<AccountForm />
			<Button fullWidth variant='contained' onClick={signOut} sx={{ mt: 3 }}>
				Sign Out
			</Button>
		</Container>
	)
}
