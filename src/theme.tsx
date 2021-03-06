import React from 'react'

import {
	Link as RouterLink,
	LinkProps as RouterLinkProps,
} from 'react-router-dom'

import { createTheme } from '@mui/material/styles'

// Allow adapting MUI links to react-router-dom links
const LinkBehavior = React.forwardRef<
	any,
	Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
	const { href, ...other } = props
	// Map href (MUI) -> to (react-router)
	return <RouterLink ref={ref} to={href} {...other} />
})

LinkBehavior.displayName = 'LinkBehavior'

const theme = createTheme({
	palette: {
		primary: {
			main: '#2a8544',
		},
		secondary: {
			main: '#f50057',
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
	typography: {
		h1: {
			color: '#2a8544',
			fontSize: '2.5rem',
			fontWeight: '500',
			marginTop: '1.5rem',
		},
		h2: {
			color: '#2a8544',
			fontSize: '1.5rem',
			fontWeight: '500',
			marginTop: '1.5rem',
		},
	},
})

export default theme
