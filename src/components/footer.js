import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const FooterStyle= styled.footer`
background-color: red;

`

const Footer = () => (
  <>
  <FooterStyle>
      <h1><Link to="/" > <h4>© Wszystkie prawa zastrzeżone</h4></Link> </h1>
  </FooterStyle>
  </>
)

export default Footer

