import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Blog marka</h1>
    <p>Witam na moim blogu </p>
    <p>Zapraszam do współpracy</p>
    <StaticImage
      src="../images/gatsby-astronaut.png" formats={["AUTO", "WEBP", "AVIF"]}  alt="A Gatsby astronaut" />
    <p>
   
      <Link to="/page-2/">Go to page 2</Link> 
      </p> 
      <p>
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
