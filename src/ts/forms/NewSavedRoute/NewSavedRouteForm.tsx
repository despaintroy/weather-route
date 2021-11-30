import React from 'react'

import Map from 'ts/components/Map'
import { getMessage } from 'ts/services/errors'
import { newSavedRoute } from 'ts/services/savedRoutes'
import { beforeSubmit, handleValueChange, validateForm } from 'ts/utils/helpers'

import { Alert, Stack, TextField } from '@mui/material'
import { Box } from '@mui/system'

import { getInitialFormState } from './validation'

export const NewSavedRouteFormId = 'new-saved-route-form'

interface NewSavedRouteFormProps {
	setSubmitting: (submitting: boolean) => void
	submitCallback: () => void
}

export default function NewSavedRouteForm(
	props: NewSavedRouteFormProps
): React.ReactElement {
	const { setSubmitting, submitCallback } = props
	const [formState, setFormState] = React.useState(getInitialFormState())
	const [waypoints, setWaypoints] =
		React.useState<{ start: string; end: string }>()

	function updateWaypoints() {
		formState.values.start &&
			formState.values.end &&
			setWaypoints({
				start: formState.values.start.toString(),
				end: formState.values.end.toString(),
			})
	}

	function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
		event.preventDefault()

		setFormState(state => beforeSubmit(state))
		if (!formState.formValid) return

		setSubmitting(true)

		newSavedRoute({
			name: formState.values.name,
			begin: {
				lat: parseInt(formState.values.start),
				lon: parseInt(formState.values.start),
			},
			end: {
				lat: parseInt(formState.values.end),
				lon: parseInt(formState.values.end),
			},
		})
			.then(() => {
				submitCallback()
			})
			.catch(e =>
				setFormState(state => {
					return { ...state, formMessage: getMessage(e) }
				})
			)
			.finally(() => setSubmitting(false))
	}

	return (
		<Stack gap={2}>
			<Box
				id={NewSavedRouteFormId}
				component='form'
				onSubmit={handleSubmit}
				noValidate
				sx={{ height: '100%' }}
			>
				<TextField
					variant='standard'
					fullWidth
					label='Route Name'
					name='name'
					margin='normal'
					onChange={(e): void =>
						setFormState(state => handleValueChange(e, state))
					}
					onBlur={(): void => {
						formState.touched.name = true
						setFormState(state => validateForm(state))
					}}
					error={formState.touched.name && !formState.isValid.name}
					helperText={formState.touched.name && formState.messages.name}
				/>
				<TextField
					variant='standard'
					fullWidth
					label='Start Location'
					name='start'
					margin='normal'
					onChange={(e): void =>
						setFormState(state => handleValueChange(e, state))
					}
					onBlur={(): void => {
						formState.touched.start = true
						setFormState(state => validateForm(state))
						updateWaypoints()
					}}
					error={formState.touched.start && !formState.isValid.start}
					helperText={formState.touched.start && formState.messages.start}
				/>
				<TextField
					variant='standard'
					fullWidth
					label='End Location'
					name='end'
					margin='normal'
					onChange={(e): void =>
						setFormState(state => handleValueChange(e, state))
					}
					onBlur={(): void => {
						formState.touched.end = true
						setFormState(state => validateForm(state))
						updateWaypoints()
					}}
					error={formState.touched.end && !formState.isValid.end}
					helperText={formState.touched.end && formState.messages.end}
				/>
				{formState.attemptedSubmit && formState.formMessage && (
					<Alert sx={{ mt: 2 }} severity='error'>
						{formState.formMessage || 'Form error'}
					</Alert>
				)}
			</Box>

			{waypoints && (
				<Map
					start={waypoints.start}
					end={waypoints.end}
					sx={{ height: '20rem' }}
				/>
			)}
		</Stack>
	)
}
