import Head from 'next/head'
import { useEffect } from 'react'
import styled from 'styled-components'

import { api_call } from '../store/context'
import WeatherBoxDesk from '../components/weatherBoxDesk/WeatherBoxDesk'

const Home = () => {
	useEffect(() => {
		api_call()
	}, [])

	return (
		<>
			<Head>
				<title>Weather App</title>
				<meta name="Weather App" content="Find weather locally and globally." />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Root>
				<WeatherBoxDesk />
			</Root>
		</>
	)
}

const Root = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`

export default Home
