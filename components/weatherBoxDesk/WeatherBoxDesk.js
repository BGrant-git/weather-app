import { useContext } from 'react'

import { StoreContext } from '../../store/context'
import { Container, UnitContainer } from './weatherBoxDeskStyles'
import UnitLeft from '../unitLeft/UnitLeft'
import UnitRight from '../unitRight/UnitRight'

const WeatherBoxDesk = () => {
	const { lat, long, locationData, forecastData } = useContext(StoreContext)

	const [latVal, setLatVal] = lat
	const [longVal, setLongVal] = long
	const [locationDataVal, setLocationDataVal] = locationData
	const [forecastDataVal, setForecastDataVal] = forecastData

	// suppressHydrationWarning

	return (
		<Container>
			<UnitContainer>
				<UnitLeft />
			</UnitContainer>
			<UnitContainer>
				<UnitRight />
			</UnitContainer>
		</Container>
	)
}

export default WeatherBoxDesk
