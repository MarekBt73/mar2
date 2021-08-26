import React from "react"
import { Link } from "gatsby"
import "./style/linksnav.css"
import styled from "styled-components"


const LinkContener = styled.div`
width: 40vw;
display: flex;
flex-direction: row;
justify-content: space-around;
`

const LinkMenu = styled.div`
width: 30vw;
display: flex;

`
const LinkMenu2 = styled.div`
width: 10vw;
display: flex;
flex-direction: row;


`





const Linksnav = () => (
<>
<LinkContener>
<LinkMenu >
        <Link to ="/"> Home </Link>
        <Link to ="#">link do strony</Link>
        <Link to ="#">link do strony</Link>
        <Link to ="#">link do strony</Link>
 </LinkMenu >
  <LinkMenu2 >
        <Link to ="#">link do strony</Link>
 </LinkMenu2 >
 </LinkContener>
</>                 
)
export default Linksnav