import React, { useState } from 'react'

import { deleteSavedRoute } from 'ts/services/savedRoutes'
import { SavedRoute } from 'ts/utils/models'

import {
	Icon,
	IconButton,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem,
} from '@mui/material'

export interface SavedRouteListItemProps {
	route: SavedRoute
	changeCallback: () => void
}

export default function SavedRouteListItem(
	props: SavedRouteListItemProps
): React.ReactElement {
	const { route, changeCallback } = props

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = (): void => {
		setAnchorEl(null)
	}

	function handleDelete(): void {
		deleteSavedRoute(route.id)
			.then(() => changeCallback())
			.catch(() => alert('Error deleting saved route'))
	}

	return (
		<>
			<ListItem
				disablePadding
				secondaryAction={
					<IconButton onClick={handleClick}>
						<Icon>more_vert</Icon>
					</IconButton>
				}
			>
				<ListItemButton>
					<ListItemIcon>
						<Icon>directions</Icon>
					</ListItemIcon>
					<ListItemText
						primary={route.name}
						secondary={
							<span>
								{route.begin.lat}º, {route.begin.lon}º &rarr; {route.end.lat}º,{' '}
								{route.end.lon}º
							</span>
						}
					/>
				</ListItemButton>
				<Menu
					id='basic-menu'
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					MenuListProps={{
						'aria-labelledby': 'basic-button',
					}}
				>
					<MenuItem onClick={handleDelete}>Delete route</MenuItem>
				</Menu>
			</ListItem>
		</>
	)
}
