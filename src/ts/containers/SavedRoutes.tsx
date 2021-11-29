import React, { useEffect } from 'react'

import { getSavedRoutes } from 'ts/services/savedRoutes'
import { SavedRoute } from 'ts/utils/models'

import {
	Alert,
	CircularProgress,
	Container,
	Divider,
	Icon,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material'

export default function SavedRoutes(): React.ReactElement {
	const [savedRoutes, setSavedRoutes] = React.useState<SavedRoute[]>()
	const [errorText, setErrorText] = React.useState<string>()
	useEffect(() => updateSavedRoutes(), [])

	const updateSavedRoutes = (): void => {
		getSavedRoutes()
			.then(r => setSavedRoutes(r))
			.catch(() => setErrorText('Error loading saved routes'))
	}

	const renderSavedRoutes = (): React.ReactElement => {
		if (!savedRoutes)
			return <CircularProgress sx={{ display: 'block', mx: 'auto', mt: 3 }} />

		if (savedRoutes.length === 0)
			return <Typography>No saved routes</Typography>

		return (
			<List>
				{savedRoutes.map(route => (
					<div key={route.id}>
						<ListItem disablePadding>
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
		</Container>
	)
}
