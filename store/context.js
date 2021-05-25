import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const StoreContext = createContext()

const citiesList = [
	[51.509865, -0.118092],
	[55.953251, -3.188267],
	[51.481583, -3.17909],
	[48.864716, 2.349014],
	[40.415524, -3.707488],
	[41.403706, 2.173504],
	[40.73061, -73.935242],
	[-33.865143, 151.2099],
	[-41.276825, 174.777969],
]
const randomCity = citiesList[Math.floor(Math.random() * citiesList.length)]

const StoreContextProvider = ({ children }) => {
	const [search, setSearch] = useState('')
	const [query, setQuery] = useState('')
	const [lat, setLat] = useState(randomCity[0])
	const [long, setLong] = useState(randomCity[1])
	const [locationData, setLocationData] = useState({})
	const [forecastData, setForecastData] = useState({})

	const weather_location_api_call = async (lat, long, x) => {
		const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.OPEN_WEATHER_API_KEY}`
		const request = axios.get(url)
		const response = await request
		setLocationData(response)
	}

	const weather_data_api_call = async (lat, long) => {
		const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,alerts&appid=${process.env.OPEN_WEATHER_API_KEY}`
		const request = axios.get(url)
		const response = await request
		setForecastData(response)
	}

	return (
		<StoreContext.Provider
			value={{
				search: [search, setSearch],
				query: [query, setQuery],
				lat: [lat, setLat],
				long: [long, setLong],
				locationData: [locationData, setLocationData],
				forecastData: [forecastData, setForecastData],
				weather_location_api_call,
				weather_data_api_call,
			}}
		>
			{children}
		</StoreContext.Provider>
	)
}

export default StoreContextProvider
