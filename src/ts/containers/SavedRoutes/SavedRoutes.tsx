import React, { useEffect } from 'react'

import { getSavedRoutes } from 'ts/services/savedRoutes'
import { SavedRoute } from 'ts/utils/models'

import {
	Alert,
	CircularProgress,
	Container,
	Divider,
	Icon,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material'

import NewRouteDialog from './NewRouteDialog'

export default function SavedRoutes(): React.ReactElement {
	const [savedRoutes, setSavedRoutes] = React.useState<SavedRoute[]>()
	const [errorText, setErrorText] = React.useState<string>()
	const [showDialog, setShowDialog] = React.useState(false)
	useEffect(() => updateSavedRoutes(), [])

	const addNewRoute = (): void => {
		setShowDialog(true)
	}

	const updateSavedRoutes = (): void => {
		getSavedRoutes()
			.then(r => setSavedRoutes(r))
			.catch(() => setErrorText('Error loading saved routes'))
	}

	const renderSavedRoutes = (): React.ReactElement => {
		if (!savedRoutes)
			return <CircularProgress sx={{ display: 'block', mx: 'auto', mt: 3 }} />

		return (
			<List>
				<ListItem disablePadding>
					<ListItemButton onClick={addNewRoute}>
						<ListItemIcon>
							<Icon>add</Icon>
						</ListItemIcon>
						<ListItemText primary={'Save new route'} />
					</ListItemButton>
				</ListItem>
				<Divider />
				{savedRoutes.map(route => (
					<div key={route.id}>
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
											{route.begin.lat}º, {route.begin.lon}º &rarr;{' '}
											{route.end.lat}º, {route.end.lon}º
										</span>
									}
								/>
							</ListItemButton>
						</ListItem>
						<Divider />
					</div>
				))}
			</List>
		)
	}

	return (
		<Container>
			<Typography variant='h1'>Saved Routes</Typography>
			{errorText ? (
				<Alert severity='error'>This is an error alert — check it out!</Alert>
			) : (
				renderSavedRoutes()
			)}
			<NewRouteDialog
				open={showDialog}
				onClose={(): void => {
					setShowDialog(false), updateSavedRoutes()
				}}
			/>
		</Container>
	)
}
