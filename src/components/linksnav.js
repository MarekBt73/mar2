import React from "react"
import styled from "styled-components"
import Logo from "./logo"
import Hamburger from "./hamburger"
import LinksStyle from "./linkstyles"

const LinkContener = styled.div`
width: 1450px;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: space-around;

@media screen and (max-width: 759px){
flex-direction: column;
position: relative;


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
width: auto;
    position: absolute;
    top: 6px;
    right: 72px;
}
`



const HamburgerStyled = styled(Hamburger)`

@media screen and (max-width: 759px){
display: flex;
flex-direction: column;
align-items: center;
position: absolute;
    top: 7px;
    left: 15vw;
}

`

const Linksnav = () => (
<>
 <LinkContener>
   
           <Logo  className="logostyls" />
   
    <LinkMenu >
        <LinksStyle  to ="/"> Home </LinksStyle>
        <LinksStyle  to ="#">link do strony</LinksStyle>
        <LinksStyle  to ="#">link do strony</LinksStyle>
        <LinksStyle  to ="#">link do strony</LinksStyle>
    </LinkMenu >
      
      <HamburgerStyled/>
      
     <LinkMenu2 >
        <LinksStyle  to ="#">Szukaj</LinksStyle>
     </LinkMenu2 >
  </LinkContener>
</>                 
)
export default Linksnav