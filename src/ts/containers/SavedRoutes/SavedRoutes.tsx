import React, { useEffect } from 'react'

import { getSavedRoutes } from 'ts/services/savedRoutes'
import { SavedRoute } from 'ts/utils/models'

import {
	Alert,
	CircularProgress,
	Container,
	Divider,
	Fab,
	Icon,
	List,
	Typography,
} from '@mui/material'

import NewRouteDialog from './NewRouteDialog'
import SavedRouteListItem from './SavedRouteListItem'

export default function SavedRoutes(): React.ReactElement {
	const [savedRoutes, setSavedRoutes] = React.useState<SavedRoute[]>()
	const [errorText, setErrorText] = React.useState<string>()
	const [showDialog, setShowDialog] = React.useState(false)
	useEffect(() => updateSavedRoutes(), [])

	const updateSavedRoutes = (): void => {
		getSavedRoutes()
			.then(r => setSavedRoutes(r))
			.catch(() => setErrorText('Error loading saved routes'))
	}

	const renderRouteList = (): React.ReactElement => {
		if (!savedRoutes)
			return <CircularProgress sx={{ display: 'block', mx: 'auto', mt: 3 }} />

		return (
			<>
				<Divider />
				<List>
					{savedRoutes.map(route => (
						<div key={route.id}>
							<SavedRouteListItem route={route} />
							<Divider />
						</div>
					))}
				</List>
			</>
		)
	}

	return (
		<Container>
			<Typography variant='h1' sx={{ mb: 2 }}>
				Saved Routes
			</Typography>
			<Fab
				color='primary'
				onClick={(): void => setShowDialog(true)}
				sx={{ position: 'fixed', bottom: '2rem', right: '1.5rem' }}
			>
				<Icon>add</Icon>
			</Fab>
			{errorText ? (
				<Alert severity='error'>{errorText}</Alert>
			) : (
				renderRouteList()
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
