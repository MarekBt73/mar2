import * as React from "react"
import './style/global.css'
import styled from "styled-components"


const HamburgerStyless = styled.div`

@media screen and (min-width:760px){

    display: none;
}

`

const HambStyless = styled(HamburgerStyless)`

display: flex;
flex-direction: column;
height: 25px;
width: 25px;
flex-direction: column;
top: 10px;
right: 25px;
justify-content: space-around;

`

const HamburgerDiv = styled.div`
height: 3px;
background-color: black;
`


const Hamburger = () => (

    <>
    <HambStyless >
        <HamburgerDiv></HamburgerDiv>
        <HamburgerDiv></HamburgerDiv>
        <HamburgerDiv></HamburgerDiv>
    </HambStyless>
    </>


)

export default Hamburger