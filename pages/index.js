import Head from 'next/head'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

import { StoreContext } from '../store/context'
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
	const { lat, long, weather_data_api_call, weather_location_api_call } =
		useContext(StoreContext)

	const [latVal] = lat
	const [longVal] = long

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(function (position) {
			const userLong = `${position.coords.longitude}`
			const userLat = `${position.coords.latitude}`
			weather_data_api_call(userLat, userLong)
			weather_location_api_call(userLat, userLong)
		})
	}, [])

	useEffect(() => {
		weather_data_api_call(latVal, longVal)
		weather_location_api_call(latVal, longVal)
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
