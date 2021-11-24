import React, { Context, useState } from 'react'

import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import Navigation from 'ts/components/Navigation'
import Account from 'ts/containers/Account'
import Favorites from 'ts/containers/Favorites'
import Home from 'ts/containers/Home'
import { User } from 'ts/services/models'
import { getUser } from 'ts/services/user'
import Paths from 'ts/utils/paths'

import { Stack } from '@mui/material'

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
			<div>
				<HashRouter basename='/'>
					<Stack
						height='100vh'
						direction='column'
						justifyContent='space-between'
						alignItems='stretch'
						overflow='auto'
					>
						<Switch>
							<Route exact path={Paths.home} component={Home} />
							<Route exact path={Paths.map} component={Favorites} />
							<Route exact path={Paths.account} component={Account} />

							{/* Default redirect */}
							<Route path='/'>
								<Redirect to={Paths.home} />
							</Route>
						</Switch>
						<Navigation />
					</Stack>
				</HashRouter>
			</div>
		</UserContext.Provider>
	)
}

export default App
