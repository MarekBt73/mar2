import React from "react"
import { Link } from "gatsby"
import "./style/linksnav.css"
import styled from "styled-components"
import Logo from "./logo"
import Hamburger from "./hamburger"


const LinkContener = styled.div`
width: 1450px;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: space-around;

@media screen and (max-width: 760px){
  
  flex-direction: column;
  }



`

const LinkMenu = styled.div`
width: 85%;
display: flex;
background-color: red;
align-items: center;
justify-content: flex-start;

@media screen and (max-width: 760px){
       display: none;
  
 }

`
const LinkMenu2 = styled.div`
width: 20%;
display: flex;
flex-direction: row;
background-color: yellow;
align-items: center;
justify-content: center;
@media screen and (max-width: 760px){
       width: auto;
   position: absolute;
   top: 0;
   right: 0;
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
  <Hamburger/>
  <LinkMenu2 >
        <Link to ="#">link do strony</Link>
 </LinkMenu2 >
 </LinkContener>
</>                 
)
export default Linksnav