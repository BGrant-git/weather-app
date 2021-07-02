import { useContext } from 'react'
import { Grid } from '@material-ui/core'

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
					<Grid container alignItems="center">
						<Grid item xs={1}></Grid>
						<Grid item xs={1}>
							<p>{forecastDate}</p>
						</Grid>
						<Grid item xs={3}>
							<img src={iconUrl} alt="" />
						</Grid>
						<Grid item xs={2}>
							<p>{description}</p>
						</Grid>
						<Grid item xs={2}>
							<p>Min: {minTempInCelsius}°C</p>
						</Grid>
						<Grid item xs={2}>
							<p>Max: {maxTempInCelsius}°C</p>
						</Grid>
					</Grid>
				</Container>
			)}
		</>
	)
}

export default DailyForecast
