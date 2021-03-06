import { createContext, useEffect, useState } from 'react'
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
	const [cityQuery, setCityQuery] = useState('')
	const [lat, setLat] = useState(randomCity[0])
	const [long, setLong] = useState(randomCity[1])
	const [locationData, setLocationData] = useState({})
	const [forecastData, setForecastData] = useState({})

	const weather_location_api_call = async (lat, long) => {
		const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.OPEN_WEATHER_API_KEY}`
		const request = axios.get(url)
		const response = await request
		setLocationData(response)
		console.log(response)
	}

	const weather_data_api_call = async (lat, long) => {
		const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,alerts&appid=${process.env.OPEN_WEATHER_API_KEY}`
		const request = axios.get(url)
		const response = await request
		setForecastData(response)
		console.log(response)
	}

	const city_search_api_call = async (city) => {
		const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=44d8a708fea04782b7af78390ad5d628`
		const request = axios.get(url)
		const response = await request
		setLat(response.data.results[0].geometry.lat)
		setLong(response.data.results[0].geometry.lng)
	}

	const tempToCelsius = (temp) =>
		Math.round((temp - 273.15 + Number.EPSILON) * 100) / 100

	const handleSearchChange = (event) => {
		event.preventDefault()
		setSearch(event.target.value.toLowerCase())
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		setCityQuery(search)
		setSearch('')
	}

	const handleApiSearch = () => {
		if (cityQuery) {
			city_search_api_call(cityQuery)
		}
	}

	useEffect(() => {
		handleApiSearch()
	}, [cityQuery])

	return (
		<StoreContext.Provider
			value={{
				search: [search, setSearch],
				lat: [lat, setLat],
				long: [long, setLong],
				locationData: [locationData, setLocationData],
				forecastData: [forecastData, setForecastData],
				weather_location_api_call,
				weather_data_api_call,
				tempToCelsius,
				handleSearchChange,
				handleSubmit,
			}}
		>
			{children}
		</StoreContext.Provider>
	)
}

export default StoreContextProvider
