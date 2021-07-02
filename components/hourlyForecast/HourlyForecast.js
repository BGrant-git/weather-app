import { useContext } from 'react'

import { StoreContext } from '../../store/context'
import { Container, StyledImg, StyledP } from './hourlyForecastStyles'

const HourlyForecast = ({ isEmpty, img, temp, time }) => {
	const { tempToCelsius } = useContext(StoreContext)

	const UTCConverter = (utc) => {
		const dateObj = new Date(utc * 1000)
		return dateObj.toUTCString()
	}

	const forecastTimes = isEmpty ? null : UTCConverter(time).slice(17, 22)

	const imageUrl = `https://openweathermap.org/img/wn/${img}@2x.png`

	let tempInCelsius = tempToCelsius(temp)

	return (
		<Container>
			<p>{forecastTimes}</p>

			<StyledImg src={imageUrl} alt="" />
			<StyledP>{tempInCelsius}°C</StyledP>
		</Container>
	)
}

export default HourlyForecast
