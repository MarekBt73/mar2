import * as React from "react"

import styled from "styled-components"
import LinksStyle from "./linkstyles"



const FooterStyle= styled.footer`
background-color: #a605e8;
text-align: center;
font-size: 14px;
height: 65px;
display: flex;
flex-direction: row;
align-content: center;
justify-content: center;
align-items: center;

`

const Footer = () => (
  <>
  <FooterStyle>
      <h1><LinksStyle to="/" > © Wszystkie prawa zastrzeżone</LinksStyle> </h1>
  </FooterStyle>
  </>
)

export default Footer

