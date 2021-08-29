

import styled from "styled-components"
import { Link } from "gatsby"


const LinksStyle = styled(Link)`
display: inline-block;
color: white;
margin: 0 20px;
text-decoration: none;
transition:5ms;
text-align: center;


:hover{
color: #FFCCE6;
text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5);
color: #d9d9d9;


}
`
export default LinksStyle