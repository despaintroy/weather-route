import React from 'react'

import { Box } from '@mui/system'

interface InfoPieceProps {
	label: string
	children: React.ReactNode
}

export default function InfoPiece(props: InfoPieceProps): React.ReactElement {
	return (
		<Box sx={{ mt: 1 }}>
			<b>{props.label}</b>
			<br />
			{props.children}
		</Box>
	)
}
