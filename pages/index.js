import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styled from 'styled-components'

import {
	weather_location_api_call,
	weather_data_api_call,
	randomCity,
} from '../store/context'
import WeatherBoxDesk from '../components/weatherBoxDesk/WeatherBoxDesk'

const backgroundDay = require('../public/images/background/sky-vector-01.jpg')

const Root = styled.div`
	background-image: url(${(props) => props.img});
`

const ContentContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Home = () => {
	useEffect(() => {
		weather_location_api_call()
		weather_data_api_call()
		randomCity()
	}, [])

	return (
		<Root img={backgroundDay}>
			<Head>
				<title>Weather App</title>
				<meta name="Weather App" content="Find weather locally and globally." />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ContentContainer>
				<WeatherBoxDesk />
			</ContentContainer>
		</Root>
	)
}

export default Home
