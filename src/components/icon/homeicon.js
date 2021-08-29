import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab)

const HomeIcon = () =>(
<>
    < FontAwesomeIcon icon="fas fa-home" />
</>
)

export default HomeIcon;