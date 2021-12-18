import * as React from 'react'

import { Link } from 'react-router-dom'
import { signOut } from 'ts/services/auth'
import { drawerWidth } from 'ts/utils/constants'
import Paths from 'ts/utils/paths'

import MenuIcon from '@mui/icons-material/Menu'
import { Icon } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

export default function Navigation(): React.ReactElement {
	const [mobileOpen, setMobileOpen] = React.useState(false)

	const handleDrawerToggle = (): void => {
		setMobileOpen(!mobileOpen)
	}

	type menuOptions = Array<{
		title: string
		url: string
		icon: string
	}>

	const mainMenuOptions: menuOptions = [
		// { title: 'Home', url: Paths.home, icon: 'home' },
		{ title: 'Saved Routes', url: Paths.savedRoutes, icon: 'star' },
		{ title: 'Weather', url: Paths.weather, icon: 'wb_sunny' },
	]

	const profileMenuOptions: menuOptions = [
		{ title: 'Profile', url: Paths.profile, icon: 'account_circle' },
		{ title: 'Security', url: Paths.security, icon: 'lock' },
	]

	const drawer = (
		<div>
			<Toolbar />
			<Divider />
			<List onClick={handleDrawerToggle}>
				{mainMenuOptions.map(option => (
					<ListItem button component={Link} to={option.url} key={option.title}>
						<ListItemIcon>
							<Icon>{option.icon}</Icon>
						</ListItemIcon>
						<ListItemText primary={option.title} />
					</ListItem>
				))}
			</List>
			<Divider />
			<List onClick={handleDrawerToggle}>
				{profileMenuOptions.map(option => (
					<ListItem button component={Link} to={option.url} key={option.title}>
						<ListItemIcon>
							<Icon>{option.icon}</Icon>
						</ListItemIcon>
						<ListItemText primary={option.title} />
					</ListItem>
				))}
				<ListItem button onClick={(): void => location.reload()}>
					<ListItemIcon>
						<Icon>refresh</Icon>
					</ListItemIcon>
					<ListItemText primary='Refresh' />
				</ListItem>
				<ListItem button onClick={signOut}>
					<ListItemIcon>
						<Icon>logout</Icon>
					</ListItemIcon>
					<ListItemText primary='Sign Out' />
				</ListItem>
			</List>
		</div>
	)

	return (
		<>
			<AppBar
				position='fixed'
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
				}}
			>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' noWrap component='div'>
						Weather Route
					</Typography>
					<IconButton
						color='inherit'
						onClick={(): void => location.reload()}
						sx={{ marginLeft: 'auto' }}
					>
						<Icon>map</Icon>
					</IconButton>
				</Toolbar>
			</AppBar>
			<Box
				component='nav'
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label='mailbox folders'
			>
				<Drawer
					container={undefined}
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					variant='permanent'
					sx={{
						display: { xs: 'none', sm: 'block' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>
		</>
	)
}
