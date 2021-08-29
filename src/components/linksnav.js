import React from "react"
import styled from "styled-components"
import Logo from "./logo"
import HomeIcon from "./icon/home-icon"
import SearchIcon from "./icon/search-icon"
import HmburgerIcon from "./icon/hamburger-icon"
import LinksStyle from "./linkstyles"
import SearchTop from './search1'



const LinkContener = styled.div`
width: 1450px;
display: flex;
flex-direction: row;
flex-wrap: nowrap;

justify-content: flex-start;
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
display: flex;
width: auto;
width: auto;
align-items: center;
justify-content: center;


@media screen and (min-width: 760px){
display: none;

}
`
const LinkMenu3 = styled.div`
width: 20%;

@media screen and (max-width: 761px){
display: none;
}
`

const Linksnav = () => (
<>
 <LinkContener>
        <Logo  className="logostyls" />
      <LinkMenu >
        <LinksStyle  to ="/"><HomeIcon /> Home</LinksStyle>
        <LinksStyle  to ="/page-2/">Realzacje</LinksStyle>
        <LinksStyle  to ="#">Cennik</LinksStyle>
        <LinksStyle  to ="#">O mnie</LinksStyle>
        <LinksStyle  to ="#">Kontakt</LinksStyle>
     </LinkMenu >
     <LinkMenu2 >
        <LinksStyle  to ="#"><HmburgerIcon/></LinksStyle>
        <LinksStyle  to ="#"><SearchIcon/></LinksStyle>
     </LinkMenu2 >
     <LinkMenu3 >
          <SearchTop/>
     </LinkMenu3 >
  </LinkContener>
</>                 
)
export default Linksnav;