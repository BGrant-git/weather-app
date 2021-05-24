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

const StoreContextProvider = ({ children }) => {
	const [search, setSearch] = useState('')
	const [query, setQuery] = useState('')
	const [city, setCity] = useState('')
	const [lat, setLat] = useState('')
	const [long, setLong] = useState('')
	const [userLoc, setUserLoc] = useState([])

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
	const randomCity = citiesList[Math.floor(Math.random() * citiesList.length)]

	const setCityHandler = ({ setCity, userLoc }) => {
		// check if location has been provided
		// if it has set city to that location
		// if not set city to random city
	}

	useEffect(() => {
		setCityHandler(setCity, userLoc)
	}, [query])

	return (
		<StoreContext.Provider
			value={{
				search: [search, setSearch],
				query: [query, setQuery],
				city: [city, setCity],
				lat: [lat, setLat],
				long: [long, setLong],
				userLoc: [userLoc, setUserLoc],
			}}
		>
			{children}
		</StoreContext.Provider>
	)
}

export default StoreContextProvider
