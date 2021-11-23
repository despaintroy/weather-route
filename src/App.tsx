import 'sass/App.scss'

import React, { Context, useState } from 'react'

import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import Home from 'ts/containers/Home'
import { User } from 'ts/services/models'
import { getUser } from 'ts/services/user'
import Paths from 'ts/utils/paths'

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
					{/* <Navigation /> */}
					<Switch>
						<Route exact path={Paths.home} component={Home} />

						{/* Default redirect */}
						<Route exact path={Paths.signIn}>
							<Redirect to={Paths.home} />
						</Route>
						<Route exact path='/'>
							<Redirect to={Paths.home} />
						</Route>
					</Switch>
				</HashRouter>
			</div>
		</UserContext.Provider>
	)
}

export default App
