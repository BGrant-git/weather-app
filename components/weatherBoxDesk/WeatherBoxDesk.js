import { useContext } from 'react'
import styled from 'styled-components'

import { StoreContext } from '../../store/context'

const Container = styled.div`
	width: 900px;
	height: 700px;
	display: flex;
	justify-content: space-between;
`

const Unit = styled.div`
	width: 49%;
	height: 100%;
	border-radius: 25px;
	background-color: rgba(66, 65, 110, 0.5);
`

const WeatherBoxDesk = () => {
	const { lat, long, locationData, forecastData } = useContext(StoreContext)

	const [latVal, setLatVal] = lat
	const [longVal, setLongVal] = long
	const [locationDataVal, setLocationDataVal] = locationData
	const [forecastDataVal, setForecastDataVal] = forecastData

	// suppressHydrationWarning

	const isEmpty = (obj) => Object.keys(obj).length === 0

	console.log(isEmpty(locationDataVal))

	return (
		<Container>
			<Unit>
				<p suppressHydrationWarning>
					{isEmpty(locationDataVal) ? null : locationDataVal.data.name}
				</p>
			</Unit>
			<Unit />
		</Container>
	)
}

export default WeatherBoxDesk
