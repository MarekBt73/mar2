import React from "react"
import styled from "styled-components"
import Logo from "./logo"
import HomeIcon from "./icon/home-icon"
import SearchIcon from "./icon/search-icon"
import HmburgerIcon from "./icon/hamburger-icon"
import LinksStyle from "./linkstyles"
import LinksStyle2 from "./linkstyles2"
import SearchTop from './search1'



const LinkContener = styled.div`
width: 1300px;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: flex-start;

@media screen and (max-width: 760px){
justify-content: center;

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
display: flex;
align-content: center;
flex-direction: column;
align-items: flex-end;
justify-content: center;


@media screen and (max-width: 761px){
display: none;
}
`
const Logostyl = styled(Logo)`
position: absolute;
top: 10px;
left: 10px;


`

const Linksnav = () => (
<>
 <LinkContener>
      <LinkMenu >
         <Logostyl />
        <LinksStyle  to ="/"><HomeIcon /> Home</LinksStyle>
        <LinksStyle  to ="/page-2/">Realzacje</LinksStyle>
        <LinksStyle  to ="#">Cennik</LinksStyle>
        <LinksStyle  to ="#">O mnie</LinksStyle>
        <LinksStyle  to ="#">Kontakt</LinksStyle>
     </LinkMenu >
     <LinkMenu2 >
        <Logostyl />
        <LinksStyle2  to ="#"><SearchIcon/></LinksStyle2>
        <LinksStyle2  to ="#"><HmburgerIcon/></LinksStyle2>
     </LinkMenu2 >
     <LinkMenu3 >
          <SearchTop/>
     </LinkMenu3 >
  </LinkContener>
</>                 
)
export default Linksnav;