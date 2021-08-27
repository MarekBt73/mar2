import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Logo from "./logo"
import Hamburger from "./hamburger"


const LinkContener = styled.div`
width: 1450px;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: space-around;

@media screen and (max-width: 759px){
flex-direction: column;
}
`

const LinkMenu = styled.div`
width: 85%;
display: flex;

align-items: center;
justify-content: flex-start;

@media screen and (max-width: 759px){
display: none;
 }
`
const LinkMenu2 = styled.div`
width: 20%;
display: flex;
flex-direction: row;

align-items: center;
justify-content: center;
@media screen and (max-width: 760px){
width: auto;
position: absolute;
top: 0;
right: 0;
}
`

const ContHamburger = styled.div`
@media screen and (max-width: 759px){
display: flex;
flex-direction: column;
align-items: center
}
`

const Linksnav = () => (
<>
 <LinkContener>
  <Logo/>
    <LinkMenu >
        <Link className="menulins" to ="/"> Home </Link>
        <Link className="menulins" to ="#">link do strony</Link>
        <Link className="menulins" to ="#">link do strony</Link>
        <Link className="menulins" to ="#">link do strony</Link>
    </LinkMenu >
      <ContHamburger>
             <Hamburger className="hamburgerstyles" />
      </ContHamburger>
     <LinkMenu2 >
        <Link className="menulins"  to ="#">link do strony</Link>
     </LinkMenu2 >
  </LinkContener>
</>                 
)
export default Linksnav