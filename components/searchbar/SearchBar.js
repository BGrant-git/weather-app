import { useContext } from 'react'
import { TextField } from '@material-ui/core'

import { StoreContext } from '../../store/context'
import { Container } from './searchBarStyles'

const SearchBar = () => {
	const { handleSearchChange, handleSubmit, search } = useContext(StoreContext)

	const [searchVal] = search

	return (
		<Container>
			<form onChange={handleSearchChange} onSubmit={handleSubmit}>
				<TextField value={searchVal} id="standard-basic" label="Search City" />
			</form>
		</Container>
	)
}

export default SearchBar
