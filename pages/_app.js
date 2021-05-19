import GlobalStyle from '../globalStyles'
import StoreContextProvider from '../store/context'

function MyApp({ Component, pageProps }) {
	return (
		<StoreContextProvider>
			<GlobalStyle />
			<Component {...pageProps} />
		</StoreContextProvider>
	)
}

export default MyApp
