import { Container } from './weatherBoxDeskStyles'
import ItemLeft from './itemLeft/ItemLeft'
import ItemRight from './itemRight/ItemRight'

const WeatherBoxDesk = () => {
	return (
		<Container>
			<ItemLeft />
			<ItemRight />
		</Container>
	)
}

export default WeatherBoxDesk
