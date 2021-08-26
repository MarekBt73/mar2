import * as React from "react"

import Navtop from "./navtop"
import "./style/header.css"
import styled from "styled-components"

const HeaderStyle = styled.header`
height: 50px;
background-color: #fff666;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
width: 100vw;
`

          
const Header = () => (

  <HeaderStyle>
     <Navtop/>
  </HeaderStyle>
)


export default Header
