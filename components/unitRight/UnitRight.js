import { useContext } from 'react'

import { StoreContext } from '../../store/context'

import { Container } from './unitRightStyles'
import DailyForecast from '../dailyForecast/DailyForecast'

const UnitRight = () => {
	const { forecastData } = useContext(StoreContext)

	const [forecastDataVal] = forecastData

	const isObjEmpty = (obj) => Object.keys(obj).length === 0

	const isEmpty = isObjEmpty(forecastDataVal)

	const dailyForecastData = isEmpty
		? null
		: forecastDataVal.data.daily.slice(0, 7)

	return (
		<Container>
			<h1>7 Day Forecast</h1>
			{isEmpty
				? 'Loading...'
				: dailyForecastData.map((item, i) => (
						<DailyForecast
							isEmpty={isEmpty}
							date={item.dt}
							temp={item.temp}
							description={item.weather[0].description}
							icon={item.weather[0].icon}
							key={i}
						/>
				  ))}
			<DailyForecast />
		</Container>
	)
}

export default UnitRight
