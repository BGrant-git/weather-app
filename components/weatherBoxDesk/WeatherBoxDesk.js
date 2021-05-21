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
	const { cityVal, setCityVal } = useContext(StoreContext)
	return (
		<Container>
			<Unit>
				<h1 suppressHydrationWarning>{cityVal[0]}</h1>
			</Unit>
			<Unit />
		</Container>
	)
}

export default WeatherBoxDesk
