import * as React from "react"
import PropTypes from "prop-types"
import Navtop from "./navtop"
import "./style/header.css"

          
const Header = ({ siteTitle }) => (
  <header className="topheader" >
     <Navtop/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
