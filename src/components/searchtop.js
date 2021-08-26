import * as React from "react"
import "./style/searchtop.css"
import styled from "styled-components"

const FormStyle = styled.form`

width: 75vw;
 text-align: center;

`




const Searchtop =() =>(


     <FormStyle action >
         <input  type="text" className="search" id="szukaj" />
         <input type="button" defaultValue="szukaj" />
     </FormStyle>

 )

 export default Searchtop