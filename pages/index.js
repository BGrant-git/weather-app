import Head from 'next/head'
import { useContext, useEffect } from 'react'

import UnitLeft from '../components/unitLeft/UnitLeft'
import UnitRight from '../components/unitRight/UnitRight'
import { StoreContext } from '../store/context'
import {
	Root,
	Container,
	UnitWrapper,
	ContentWrapper,
} from '../store/indexStyles'

const backgroundDay = require('../public/images/background/sky-vector-01.jpg')

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
			<Container>
				<ContentWrapper>
					<UnitWrapper>
						<UnitLeft />
					</UnitWrapper>
					<UnitWrapper>
						<UnitRight />
					</UnitWrapper>
				</ContentWrapper>
			</Container>
		</Root>
	)
}

export default Home
