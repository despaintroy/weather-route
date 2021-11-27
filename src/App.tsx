import React, { Context, useState } from 'react'

import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import Navigation from 'ts/components/Navigation'
import Home from 'ts/containers/Home'
import Presets from 'ts/containers/Presets'
import Profile from 'ts/containers/Profile'
import Security from 'ts/containers/Security'
import { getUser } from 'ts/services/user'
import { drawerWidth } from 'ts/utils/constants'
import { User } from 'ts/utils/models'
import Paths from 'ts/utils/paths'

import { Box, Stack, Toolbar } from '@mui/material'

export let UserContext: Context<{ user: User; updateUser: () => void }>

function App(props: { user: User }): React.ReactElement {
	const [user, setUser] = useState(props.user)

	const updateUser = (): void => {
		const newUser = getUser()
		newUser && setUser(newUser)
	}

	UserContext = React.createContext({ user, updateUser })

	return (
		<UserContext.Provider value={{ user, updateUser }}>
			<Box sx={{ display: 'flex', height: '100vh' }}>
				<HashRouter basename='/'>
					<Navigation />
					<Box
						component='main'
						sx={{
							height: '100%',
							flexGrow: 1,
							width: { sm: `calc(100% - ${drawerWidth}px)` },
						}}
					>
						<Stack height='100%'>
							<Toolbar />
							<Switch>
								<Route exact path={Paths.home} component={Home} />
								<Route exact path={Paths.presets} component={Presets} />
								<Route exact path={Paths.profile} component={Profile} />
								<Route exact path={Paths.security} component={Security} />

								{/* Default redirect */}
								<Route path='/'>
									<Redirect to={Paths.home} />
								</Route>
							</Switch>
						</Stack>
					</Box>
				</HashRouter>
			</Box>
		</UserContext.Provider>
	)
}

export default App
