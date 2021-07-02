import styled from 'styled-components'

export const Root = styled.div`
	background-image: url(${(props) => props.img});
`

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const ContentWrapper = styled.div`
	width: 900px;
	height: 700px;
	display: flex;
	justify-content: space-between;
`

export const UnitWrapper = styled.div`
	width: 49%;
	height: 100%;
	border-radius: 25px;
	background-color: rgba(66, 65, 110, 0.5);
`
