import { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const StoreContext = createContext()

export const weather_location_api_call = async () => {
	const url = `https://api.openweathermap.org/data/2.5/weather?q=Liverpool&appid=${process.env.OPEN_WEATHER_API_KEY}`
	const request = axios.get(url)
	const response = await request
	console.log(response)
}

const lat = 33.44
const lon = -94.04

export const weather_data_api_call = async () => {
	const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=${process.env.OPEN_WEATHER_API_KEY}`
	const request = axios.get(url)
	const response = await request
	console.log(response)
}

export const randomCity = () => {
	const citiesList = [
		'London',
		'Edinburgh',
		'Cardiff',
		'Paris',
		'Madrid',
		'Barcelona',
		'New York',
		'Sydney',
		'Wellington',
	]

	return citiesList[Math.floor(Math.random() * citiesList.length)]
}

export const setCity = ({ setCity, query }) => {
	useEffect(() => {
		setCity(query)
	}, [query])
}

const StoreContextProvider = ({ children }) => {
	const [search, setSearch] = useState('')
	const [query, setQuery] = useState('')
	const [city, setCity] = useState(randomCity())
	const [lat, setLat] = useState([])
	const [long, setLong] = useState([])

	return (
		<StoreContext.Provider
			value={{
				search: [search, setSearch],
				query: [query, setQuery],
				city: [city, setCity],
				lat: [lat, setLat],
				long: [long, setLong],
			}}
		>
			{children}
		</StoreContext.Provider>
	)
}

export default StoreContextProvider
