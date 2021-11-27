import * as React from 'react'

import { Link } from 'react-router-dom'
import { signOut } from 'ts/services/auth'
import { drawerWidth } from 'ts/utils/constants'
import Paths from 'ts/utils/paths'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import MenuIcon from '@mui/icons-material/Menu'
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

	const drawer = (
		<div>
			<Toolbar />
			<Divider />
			<List>
				<ListItem button component={Link} to={Paths.home}>
					<ListItemIcon>
						<AccountCircleIcon />
					</ListItemIcon>
					<ListItemText primary='Home' />
				</ListItem>
				<ListItem button component={Link} to={Paths.presets}>
					<ListItemIcon>
						<AccountCircleIcon />
					</ListItemIcon>
					<ListItemText primary='Presets' />
				</ListItem>
			</List>
			<Divider />
			<List>
				<ListItem button component={Link} to={Paths.profile}>
					<ListItemIcon>
						<AccountCircleIcon />
					</ListItemIcon>
					<ListItemText primary='Profile' />
				</ListItem>
				<ListItem button component={Link} to={Paths.security}>
					<ListItemIcon>
						<AccountCircleIcon />
					</ListItemIcon>
					<ListItemText primary='Security' />
				</ListItem>
				<ListItem button onClick={signOut}>
					<ListItemIcon>
						<AccountCircleIcon />
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
				</Toolbar>
			</AppBar>
			<Box
				component='nav'
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label='mailbox folders'
			>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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

	// <Paper elevation={3} sx={{ pb: 2 }}>
	// 	<BottomNavigation
	// 		showLabels
	// 		value={value}
	// 		onChange={(_event, newValue): void => {
	// 			setValue(newValue)
	// 		}}
	// 	>
	// 		<BottomNavigationAction
	// 			component={Link}
	// 			to={Paths.home}
	// 			value={Paths.home}
	// 			label='Home'
	// 			icon={<HomeIcon />}
	// 		/>
	// 		<BottomNavigationAction
	// 			component={Link}
	// 			to={Paths.map}
	// 			value={Paths.map}
	// 			label='Presets'
	// 			icon={<StarIcon />}
	// 		/>
	// 		<BottomNavigationAction
	// 			component={Link}
	// 			to={Paths.account}
	// 			value={Paths.account}
	// 			label='Account'
	// 			icon={<AccountCircleIcon />}
	// 		/>
	// 	</BottomNavigation>
	// </Paper>
	// )
}
