import * as React from 'react'

import { Link, useLocation } from 'react-router-dom'
import Paths from 'ts/utils/paths'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import HomeIcon from '@mui/icons-material/Home'
import StarIcon from '@mui/icons-material/Star'
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'

export default function Navigation(): React.ReactElement {
	const [value, setValue] = React.useState(useLocation().pathname)

	return (
		<Paper elevation={3}>
			<BottomNavigation
				showLabels
				value={value}
				onChange={(_event, newValue): void => {
					setValue(newValue)
				}}
			>
				<BottomNavigationAction
					component={Link}
					to={Paths.home}
					value={Paths.home}
					label='Home'
					icon={<HomeIcon />}
				/>
				<BottomNavigationAction
					component={Link}
					to={Paths.map}
					value={Paths.map}
					label='Favorites'
					icon={<StarIcon />}
				/>
				<BottomNavigationAction
					component={Link}
					to={Paths.account}
					value={Paths.account}
					label='Account'
					icon={<AccountCircleIcon />}
				/>
			</BottomNavigation>
		</Paper>
	)
}
