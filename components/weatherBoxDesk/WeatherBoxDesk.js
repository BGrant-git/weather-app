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
	const { city, query, search } = useContext(StoreContext)

	const [cityVal, setCityVal] = city
	const [queryVal, serQueryVal] = query
	const [searchVal, setSearchVal] = search

	return (
		<Container>
			<Unit>
				<h1 suppressHydrationWarning>{city}</h1>
			</Unit>
			<Unit />
		</Container>
	)
}

export default WeatherBoxDesk
