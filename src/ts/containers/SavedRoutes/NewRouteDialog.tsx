import React from 'react'

import theme from 'theme'
import NewSavedRouteForm from 'ts/forms/NewSavedRoute'
import { NewSavedRouteFormId } from 'ts/forms/NewSavedRoute/NewSavedRouteForm'

import {
	Button,
	CircularProgress,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	useMediaQuery,
} from '@mui/material'

export interface NewRouteDialogProps {
	open: boolean
	onClose: () => void
}

export default function NewRouteDialog(
	props: NewRouteDialogProps
): React.ReactElement {
	const { open, onClose } = props
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
	const [submitting, setSubmitting] = React.useState(false)

	return (
		<Dialog fullScreen={fullScreen} open={open} fullWidth maxWidth='sm'>
			<DialogTitle>New Saved Route</DialogTitle>
			<DialogContent dividers>
				<NewSavedRouteForm
					setSubmitting={setSubmitting}
					submitCallback={onClose}
				/>
			</DialogContent>
			<DialogActions sx={{ pb: fullScreen ? 5 : 'default' }}>
				<Button onClick={onClose}>Cancel</Button>
				<Button
					type='submit'
					disabled={submitting}
					variant='contained'
					form={NewSavedRouteFormId}
				>
					{submitting ? (
						<CircularProgress size={24} color='inherit' />
					) : (
						'Create Route'
					)}
				</Button>
			</DialogActions>
		</Dialog>
	)
}
