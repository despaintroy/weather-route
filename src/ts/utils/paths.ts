const Paths = {
	home: '/home',
	savedRoutes: '/saved-routes',
	getDisplayRouteLink: (id: string): string => `/display-route/${id}`,
	displayRoute: '/display-route/:id',
	weather: '/weather',
	profile: '/profile',
	security: '/security',
	signIn: '/signin',
	signUp: '/signup',
}

export default Paths
