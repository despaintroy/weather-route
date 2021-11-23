import React from 'react'

import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import SignIn from 'ts/components/SignIn'
import SignUp from 'ts/components/SignUp'
import Paths from 'ts/utils/paths'

function AppUnauthorized(): React.ReactElement {
	return (
		<div className='app-unauthorized'>
			<HashRouter basename='/'>
				<Switch>
					<Route exact path={Paths.signIn} component={SignIn} />
					<Route exact path={Paths.signUp} component={SignUp} />

					{/* Default redirect */}
					<Redirect push to={Paths.signIn} />
				</Switch>
			</HashRouter>
		</div>
	)
}

export default AppUnauthorized
