import { Container, UnitContainer } from './weatherBoxDeskStyles'
import UnitLeft from '../unitLeft/UnitLeft'
import UnitRight from '../unitRight/UnitRight'

const WeatherBoxDesk = () => {
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
