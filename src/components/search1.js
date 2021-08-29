import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import LinksStyle from "./linkstyles"

/*import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'*/



const SearchTop = () => (

 <>
    <LinksStyle to = "#" >  < FontAwesomeIcon icon={faSearch} /> Szukaj</LinksStyle>
</> 
 

)

export default SearchTop;