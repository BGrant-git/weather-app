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
	const { city, userLoc, lat, long } = useContext(StoreContext)

	const [cityVal, setCityVal] = city
	const [latVal, setLatVal] = lat
	const [longVal, setLongVal] = long
	const [userLocVal, setUserLocVal] = userLoc

	// suppressHydrationWarning

	return (
		<Container>
			<Unit>
				<p>{cityVal}</p>
				<p>{latVal}</p>
				<p>{longVal}</p>
			</Unit>
			<Unit />
		</Container>
	)
}

export default WeatherBoxDesk
