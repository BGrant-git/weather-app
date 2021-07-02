import { NavWrapper, FooterWrapper } from './layoutStyles'

const Layout = ({ children }) => {
	return (
		<>
			<NavWrapper />
			{children}
			<FooterWrapper />
		</>
	)
}

export default Layout
