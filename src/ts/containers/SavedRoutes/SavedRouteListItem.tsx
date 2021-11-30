import React from 'react'

import { SavedRoute } from 'ts/utils/models'

import {
	Icon,
	IconButton,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material'

export interface SavedRouteListItemProps {
	route: SavedRoute
}

export default function SavedRouteListItem(
	props: SavedRouteListItemProps
): React.ReactElement {
	const { route } = props

	return (
		<ListItem
			disablePadding
			secondaryAction={
				<IconButton>
					<Icon>more_vert</Icon>
				</IconButton>
			}
		>
			<ListItemButton>
				<ListItemIcon>
					<Icon>route</Icon>
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
		</ListItem>
	)
}
