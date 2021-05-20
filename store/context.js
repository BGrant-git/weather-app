import { createContext, useState } from 'react'
import axios from 'axios'

export const StoreContext = createContext()

export const api_call = async () => {
	const url = `https://api.openweathermap.org/data/2.5/weather?q=Liverpool&appid=${process.env.OPEN_WEATHER_API_KEY}`
	const request = axios.get(url)
	const response = await request
	console.log(response)
}

const StoreContextProvider = ({ children }) => {
	const [searchVal, setSearchVal] = useState('')
	const [query, setQuery] = useState('')

	return (
		<StoreContext.Provider
			value={{ searchVal: [searchVal, setSearchVal], query: [query, setQuery] }}
		>
			{children}
		</StoreContext.Provider>
	)
}

export default StoreContextProvider
