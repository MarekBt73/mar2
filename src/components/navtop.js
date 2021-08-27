import * as React from "react"


import Logo from "./logo"
import Linksnav from "./linksnav"
import styled from 'styled-components'


const NavStyled = styled.nav`
display: flex;
flex-direction: row;
flex-wrap: wrap;

width: 100vw;
align-content: center; 
align-items: center;
justify-content: space-between;
`

const Navtop = () => (
<>

    
      <NavStyled className="contener">
        <Logo />
        <Linksnav />
    </NavStyled>

</>
)

export default Navtop