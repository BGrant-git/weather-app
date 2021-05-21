import Head from 'next/head'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

import {
	weather_location_api_call,
	weather_data_api_call,
	randomCity,
	StoreContext,
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
	const { lat, long } = useContext(StoreContext)

	const [latVal, setLatVal] = lat
	const [longVal, setLongVal] = long

	useEffect(() => {
		weather_location_api_call()
		weather_data_api_call()
		randomCity()
	}, [])

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(function (position) {
			setLatVal(position.coords.latitude)
			setLongVal(position.coords.longitude)
		})

		console.log('Latitude is:', latVal)
		console.log('Longitude is:', longVal)
	}, [latVal, longVal])

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
