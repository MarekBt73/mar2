import React from "react"
import "./style/logo.css"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Logo =()=>(

<>
<div className="logo"><Link to="/"> 
<StaticImage className='logoblog' src="../images/gatsby-icon.png" formats={["AUTO", "WEBP", "AVIF"]}  alt="A Gatsby astronaut"  />
</Link></div>
</>

)
export default Logo