import { useContext } from 'react'
import { TextField } from '@material-ui/core'

import { StoreContext } from '../../store/context'
import { Container } from './searchBarStyles'

const SearchBar = () => {
	return (
		<Container>
			<form>
				<TextField id="standard-basic" label="Search City" />
			</form>
		</Container>
	)
}

export default SearchBar
