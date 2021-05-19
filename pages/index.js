import Head from 'next/head'
import axios from 'axios'
import { useEffect } from 'react'
import Layout from '../components/layout/Layout'

const OPEN_WEATHER_API_KEY = `6d1f5e9ba6fa9fb00c983ef9b885bc28`
const CITY_NAME = `London`

const Home = () => {
	const api_call = async () => {
		const url = `https://api.openweathermap.org/data/2.5/weather?q=Liverpool&appid=${OPEN_WEATHER_API_KEY}`
		const request = axios.get(url)
		const response = await request
		console.log(response)
	}

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
			<div>hello world</div>
		</>
	)
}

export default Home
