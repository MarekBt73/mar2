import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch} from '@fortawesome/free-solid-svg-icons'

library.add(fas, fab)

const SearchIcon = () =>(
<>
    < FontAwesomeIcon icon={faSearch} />
</>
)

export default SearchIcon;