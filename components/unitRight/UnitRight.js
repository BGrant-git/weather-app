import { useContext } from 'react'

import { StoreContext } from '../../store/context'
import SearchBar from '../searchbar/SearchBar'

import { Container, WeatherForTitle, CityTitle } from './unitRightStyles'

const UnitRight = () => {
	const { lat, long, locationData, forecastData } = useContext(StoreContext)

	const [latVal, setLatVal] = lat
	const [longVal, setLongVal] = long
	const [locationDataVal, setLocationDataVal] = locationData
	const [forecastDataVal, setForecastDataVal] = forecastData

	const isObjEmpty = (obj) => Object.keys(obj).length === 0

	const isEmpty = isObjEmpty(locationDataVal)

	return (
		<Container>
			<div>
				<WeatherForTitle>Weather for:</WeatherForTitle>
				<CityTitle suppressHydrationWarning>
					{!isEmpty ? 'hello' : 'Loading Location...'}
				</CityTitle>
				<SearchBar />
			</div>
		</Container>
	)
}

export default UnitRight
