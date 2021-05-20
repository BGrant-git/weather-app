import { NavContainer, FooterContainer } from './layoutStyles'

const Layout = ({ children }) => {
	return (
		<>
			<NavContainer />
			{children}
			<FooterContainer />
		</>
	)
}

export default Layout
