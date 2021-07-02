import { useContext } from 'react'
import { TextField } from '@material-ui/core'

import { StoreContext } from '../../store/context'

const SearchBar = () => {
	const { handleSearchChange, handleSubmit, search } = useContext(StoreContext)

	const [searchVal] = search

	return (
		<div>
			<form onChange={handleSearchChange} onSubmit={handleSubmit}>
				<TextField value={searchVal} id="standard-basic" label="Search City" />
			</form>
		</div>
	)
}

export default SearchBar
