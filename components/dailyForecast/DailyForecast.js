import { useContext } from 'react'

import { StoreContext } from '../../store/context'
import { Container } from './dailyForecastStyles'

const DailyForecast = ({ isEmpty, date, temp, description, icon }) => {
	const { tempToCelsius } = useContext(StoreContext)

	const UTCConverter = (utc) => {
		const dateObj = new Date(utc * 1000)
		return dateObj.toUTCString()
	}

	const forecastDate = isEmpty
		? null
		: UTCConverter(date).slice(0, 7).replace(/,/g, '')

	const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`

	const maxTemp = temp === undefined ? '0' : temp.max
	const minTemp = temp === undefined ? '0' : temp.min

	const maxTempInCelsius = !isNaN(maxTemp) ? tempToCelsius(maxTemp) : '0'

	const minTempInCelsius = !isNaN(minTemp) ? tempToCelsius(minTemp) : '0'

	// console.log(maxTempInCelsius)

	return (
		<>
			{date === undefined ? null : (
				<Container>
					<p>{forecastDate}</p>
					<img src={iconUrl} alt="" />
					<p>{description}</p>
					<p>Min: {minTempInCelsius}°C</p>
					<p>Max: {maxTempInCelsius}°C</p>
				</Container>
			)}
		</>
	)
}

export default DailyForecast
