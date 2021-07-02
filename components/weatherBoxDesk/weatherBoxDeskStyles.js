import styled from 'styled-components'

export const Container = styled.div`
	width: 900px;
	height: 700px;
	display: flex;
	justify-content: space-between;

	@media (max-width: 960px) {
		flex-direction: column;
		justify-content: initial;
		font-size: 75%;
	}
`

export const UnitContainer = styled.div`
	width: 49%;
	height: 100%;
	border-radius: 25px;
	background-color: rgba(66, 65, 110, 0.5);
`
