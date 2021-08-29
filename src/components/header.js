import * as React from "react"
import styled from "styled-components"
import Linksnav from "./linksnav"


 
const HeaderStyle = styled.header`

height: 60px;
background-color: #000000;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
width: 100%;
background-color: #a605e8;

@media screen and (max-width: 760px){
  
  height:60px
  }
position: relative;

`


          
const Header = () => (

  <HeaderStyle>
  <Linksnav/>
  </HeaderStyle>
)


export default Header
