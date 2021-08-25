import * as React from "react"
import "./style/navtop.css"
import Hamburger from "./hamburger"
import Searchtop from "./searchtop"
import Logo from "./logo"
import Linksnav from "./linksnav"

const Navtop = () => (
<>



<div>
    
      <nav className="contener">
        <Logo />
        <Searchtop />
        <Hamburger />
        <Linksnav />
    </nav>
</div>
</>
)

export default Navtop