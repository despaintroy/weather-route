import {
	collection,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	setDoc,
} from 'firebase/firestore'
import { SavedRoute } from 'ts/utils/models'

import { database } from './firebase'
import { getUser } from './user'

type newSavedRouteParams = Omit<SavedRoute, 'id'>

export const newSavedRoute = (route: newSavedRouteParams): Promise<void> => {
	const user = getUser()
	if (!user) return Promise.reject()

	const userCollection = collection(database, user.id)

	return setDoc(doc(userCollection), route)
		.then(() => Promise.resolve())
		.catch(() => Promise.reject())
}

export const getSavedRoutes = (): Promise<SavedRoute[]> => {
	const user = getUser()
	if (!user) return Promise.reject()

	return getDocs(collection(database, user.id))
		.then(r => {
			const routes: SavedRoute[] = []
			r.forEach(doc => routes.push({ ...doc.data(), id: doc.id } as SavedRoute))
			return Promise.resolve(routes)
		})
		.catch(() => Promise.reject())
}

export const getSavedRoute = (id: string): Promise<SavedRoute> => {
	const user = getUser()
	if (!user) return Promise.reject()

	return getDoc(doc(database, user.id, id))
		.then(r => Promise.resolve(r.data() as SavedRoute))
		.catch(() => Promise.reject())
}

export const deleteSavedRoute = (id: string): Promise<void> => {
	const user = getUser()
	if (!user) return Promise.reject()

	return deleteDoc(doc(collection(database, user.id), id))
		.then(() => Promise.resolve())
		.catch(() => Promise.reject())
}
