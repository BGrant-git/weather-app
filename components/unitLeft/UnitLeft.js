import { useContext } from 'react'

import { StoreContext } from '../../store/context'
import SearchBar from '../searchbar/SearchBar'
import HourlyForecast from '../hourlyForecast/HourlyForecast'

import {
	Container,
	StyledH1,
	TempDisplayWrapper,
	HourlyForecastWrapper,
} from './unitLeftStyles'

const UnitLeft = () => {
	const { locationData, forecastData, tempToCelsius } = useContext(StoreContext)

	const [locationDataVal] = locationData
	const [forecastDataVal] = forecastData

	const isObjEmpty = (obj) => Object.keys(obj).length === 0

	const isEmpty = isObjEmpty(locationDataVal && forecastDataVal)

	let cityName = isEmpty ? 'Loading City...' : locationDataVal.data.name

	let currentWeatherImageUrl = isEmpty
		? 'Loading Image...'
		: `https://openweathermap.org/img/wn/${forecastDataVal.data.current.weather[0].icon}@2x.png`

	let currentTempToCelsuis = isEmpty
		? null
		: tempToCelsius(forecastDataVal.data.current.temp)

	let feelsLikeToCelsuis = isEmpty
		? null
		: tempToCelsius(forecastDataVal.data.current.feels_like)

	const hourlyForecastData = isEmpty
		? null
		: forecastDataVal.data.hourly.slice(0, 5)

	return (
		<Container>
			<div>
				<h2>Weather for:</h2>
				<StyledH1 suppressHydrationWarning>{cityName}</StyledH1>
			</div>
			<TempDisplayWrapper>
				<div>
					<p>Current Temp: {currentTempToCelsuis}°C</p>
					<p>Feels Like: {feelsLikeToCelsuis}°C</p>
				</div>
				<div>
					<img src={currentWeatherImageUrl} alt="" />
				</div>
			</TempDisplayWrapper>
			<HourlyForecastWrapper>
				{isEmpty
					? 'Loading...'
					: hourlyForecastData.map((item, i) => (
							<HourlyForecast
								isEmpty={isEmpty}
								time={item.dt}
								temp={item.temp}
								img={item.weather[0].icon}
								key={i}
							/>
					  ))}
			</HourlyForecastWrapper>

			<SearchBar />
		</Container>
	)
}

export default UnitLeft
