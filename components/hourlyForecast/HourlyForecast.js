import { Container, Icon, Temp, Time } from './hourlyForecastStyles'

const HourlyForecast = ({ isEmpty, img, temp, time, tempToCelsius }) => {
	const UTCConverter = (utc) => {
		const dateObj = new Date(utc * 1000)
		return dateObj.toUTCString()
	}

	const forecastTimes = isEmpty ? null : UTCConverter(time).slice(17, 22)

	const imageUrl = `https://openweathermap.org/img/wn/${img}@2x.png`

	let tempInCelsius = Math.round((temp - 273.15 + Number.EPSILON) * 100) / 100

	let tempInCelsius2 = tempToCelsius(temp)

	return (
		<Container>
			<Time>{forecastTimes}</Time>

			<Icon src={imageUrl} alt="" />
			<Temp>{tempInCelsius}°C</Temp>
		</Container>
	)
}

export default HourlyForecast
