import { initializeApp } from 'firebase/app'

// These keys will be exposed on the client frontend, but this is safe
// Security is enforced through Firebase security rules
// See more: https://stackoverflow.com/questions/37482366/is-it-safe-to-expose-firebase-apikey-to-the-public/
const firebaseConfig = {
	apiKey: 'AIzaSyCyk-8pQIXG4EJOyRa3QT0yzUfr661yuyI',
	authDomain: 'weather-route-e1a9c.firebaseapp.com',
	projectId: 'weather-route-e1a9c',
	storageBucket: 'weather-route-e1a9c.appspot.com',
	messagingSenderId: '184699653844',
	appId: '1:184699653844:web:74997c51e6e4b49ed83541',
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)
// export const database = getDatabase(firebaseApp)
