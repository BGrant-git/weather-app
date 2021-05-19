import Head from 'next/head'
import { useEffect } from 'react'

import { api_call } from '../store/context'
import { Root } from './indexStyles'
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

export default Home
