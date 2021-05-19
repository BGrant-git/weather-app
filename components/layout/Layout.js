import { NavContainer } from './layoutStyles'

const Layout = ({ children }) => {
	return (
		<>
			<NavContainer />
			{children}
		</>
	)
}

export default Layout
