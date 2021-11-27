import React, { useContext } from 'react'

import { UserContext } from 'App'
import ChangePasswordForm from 'ts/forms/ChangePassword'
import ProfileForm from 'ts/forms/Profile'
import { signOut } from 'ts/services/auth'

import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Button, Tab } from '@mui/material'
import Container from '@mui/material/Container'

export default function Account(): React.ReactElement {
	const [activeTab, setActiveTab] = React.useState('1')
	const { user } = useContext(UserContext)

	const handleChangeTab = (
		event: React.SyntheticEvent,
		newValue: string
	): void => {
		setActiveTab(newValue)
	}

	return (
		<Container>
			<Box sx={{ width: '100%', mt: 1 }}>
				<TabContext value={activeTab}>
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
						<TabList onChange={handleChangeTab}>
							<Tab label='Profile' value='1' />
							<Tab label='Security' value='2' />
							<Tab label='Settings' value='3' />
							<Tab label='Sign Out' value='4' />
						</TabList>
					</Box>
					<TabPanel value='1'>
						<h2 style={{ margin: 0 }}>Edit Profile</h2>
						<ProfileForm />
					</TabPanel>
					<TabPanel value='2'>
						<h2 style={{ margin: 0 }}>Change Password</h2>
						<ChangePasswordForm />
					</TabPanel>
					<TabPanel value='3'>
						<h2 style={{ margin: 0 }}>App Settings</h2>
					</TabPanel>
					<TabPanel value='4'>
						<p>
							<b>Signed in as:</b> {user.email}
						</p>
						<p>
							<b>Last sign in:</b> {user.lastSignIn?.toLocaleString()}
						</p>
						<Button
							fullWidth
							variant='contained'
							onClick={signOut}
							sx={{ mt: 2 }}
						>
							Sign Out
						</Button>
					</TabPanel>
				</TabContext>
			</Box>
		</Container>
	)
}
