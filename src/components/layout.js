import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import styled from "styled-components"




const ConteinerMax = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
width: 100%;

`

const ConteinerWeb = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

width: 100%;

`
const MainStyle = styled.main`
margin: 25px;
`






const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <ConteinerMax>
    <ConteinerWeb>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <MainStyle>{children}</MainStyle>
      <Footer/>
      </ConteinerWeb>
      </ConteinerMax>
     </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
