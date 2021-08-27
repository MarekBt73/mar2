import React from "react"
import styled from "styled-components"
import Logo from "./logo"

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


const Linksnav = () => (
<>
 <LinkContener>
   
           <Logo  className="logostyls" />
   
    <LinkMenu >
        <LinksStyle  to ="/">Home</LinksStyle>
        <LinksStyle  to ="/page-2/">Realzacje</LinksStyle>
        <LinksStyle  to ="#">Cennik</LinksStyle>
        <LinksStyle  to ="#">O mnie</LinksStyle>
        <LinksStyle  to ="#">Kontakt</LinksStyle>
     </LinkMenu >
     <LinkMenu2 >
        <LinksStyle  to ="#">Szukaj</LinksStyle>
     </LinkMenu2 >
  </LinkContener>
</>                 
)
export default Linksnav