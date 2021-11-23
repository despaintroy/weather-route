import 'sass/index.scss'

import React from 'react'
import ReactDOM from 'react-dom'

import App from 'App'
import theme from 'theme'
import SignIn from 'ts/components/SignIn'
import { auth } from 'ts/services/auth'
import { formatUser } from 'ts/services/user'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'

import reportWebVitals from './reportWebVitals'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

auth.onAuthStateChanged(fireUser => {
	const user = formatUser(fireUser)

	if (user) {
		ReactDOM.render(
			<React.StrictMode>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<App user={user} />
				</ThemeProvider>
			</React.StrictMode>,
			document.getElementById('root')
		)
	} else {
		ReactDOM.render(
			<React.StrictMode>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<SignIn />
				</ThemeProvider>
			</React.StrictMode>,
			document.getElementById('root')
		)
	}
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
