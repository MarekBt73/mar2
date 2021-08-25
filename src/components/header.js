import * as React from "react"
import PropTypes from "prop-types"
import Navtop from "./nav-top"

const Header = ({ siteTitle }) => (
  <header className="topheader" >
    <div className="header">
     <Navtop />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
