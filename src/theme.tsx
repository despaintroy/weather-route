import React from 'react'

import {
	Link as RouterLink,
	LinkProps as RouterLinkProps,
} from 'react-router-dom'

import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

const LinkBehavior = React.forwardRef<
	any,
	Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
	const { href, ...other } = props
	// Map href (MUI) -> to (react-router)
	return <RouterLink ref={ref} to={href} {...other} />
})

const theme = createTheme({
	palette: {
		primary: {
			main: '#556cd6',
		},
		secondary: {
			main: '#19857b',
		},
		error: {
			main: red.A400,
		},
	},
	components: {
		MuiLink: {
			defaultProps: {
				// @ts-ignore
				component: LinkBehavior,
			},
		},
		MuiButtonBase: {
			defaultProps: {
				LinkComponent: LinkBehavior,
			},
		},
	},
})

export default theme
