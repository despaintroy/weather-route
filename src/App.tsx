import React, {
	Context,
	createContext,
	useCallback,
	useState,
} from 'react'

import {
	HashRouter,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom'
import Navigation from 'ts/components/Navigation'
import Home from 'ts/containers/Home'
import Profile from 'ts/containers/Profile'
import SavedRoutes from 'ts/containers/SavedRoutes'
import Security from 'ts/containers/Security'
import Weather from 'ts/containers/Weather'
import { getUser } from 'ts/services/user'
import { drawerWidth } from 'ts/utils/constants'
import { User } from 'ts/utils/models'
import Paths from 'ts/utils/paths'

import {
	Box,
	Stack,
	Toolbar,
} from '@mui/material'
import { GoogleMapProvider } from '@ubilabs/google-maps-react-hooks'

export let UserContext: Context<{ user: User; updateUser: () => void }>
export const MapContext = createContext<((node: any)=>void) | null>(null)

function App(props: { user: User }): React.ReactElement {
	const [user, setUser] = useState(props.user)

	const updateUser = (): void => {
		const newUser = getUser()
		newUser && setUser(newUser)
	}

	const [mapContainer, setMapContainer] = useState(null)
	const mapRef = useCallback(node => {
		node && setMapContainer(node)
	}, [])

	UserContext = React.createContext({ user, updateUser })

	return (
		<UserContext.Provider value={{ user, updateUser }}>
			<MapContext.Provider value={mapRef}>
			<GoogleMapProvider
				googleMapsAPIKey={process.env.REACT_APP_GOOGLE_MAPS_KEY ?? ''}
				mapContainer={mapContainer}
				options={{
					// center: {lat: -34.397, lng: 150.644},
					zoom: 8,
					fullscreenControl: false,
					streetViewControl: false,
					zoomControl: false,
					mapTypeControl: false,
				}}
				onLoad={(map) => map.setZoom(4)}
			>
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
								<Route exact path={Paths.savedRoutes} component={SavedRoutes} />
								<Route exact path={Paths.weather} component={Weather} />
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
			</GoogleMapProvider>
			</MapContext.Provider>
		</UserContext.Provider>
	)
}

export default App
