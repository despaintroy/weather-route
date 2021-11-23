import 'sass/App.scss'

import React from 'react'

import Button from '@mui/material/Button'
import Container from '@mui/material/Container'

function App(): React.ReactElement {
	return (
		<div>
			<Container>
				<h1>Hello World</h1>
				<p>My name is Troy DeSpain</p>
				<Button variant='contained'>Hello World</Button>
			</Container>
		</div>
	)
}

export default App
