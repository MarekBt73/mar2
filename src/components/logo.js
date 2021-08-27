import React from "react"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const LogoDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
width: 15vw;
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