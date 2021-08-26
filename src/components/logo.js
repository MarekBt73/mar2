import React from "react"
import "./style/logo.css"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const LogoDiv = styled.div`
display: flex;
flex-direction: row;

width: 15vw;
`
const LogoH1 = styled.h1`
font-size: 14px;
color: black;
text-decoration: none;

`

const Logo =()=>(

<>
<LogoDiv className="logo1">
    <Link className="logo2" to="/"> 
        <StaticImage className='logoblog' src="../images/gatsby-icon.png" formats={["AUTO", "WEBP", "AVIF"]}  alt="A Gatsby astronaut"  />
    </Link>
  </LogoDiv>
</>

)
export default Logo