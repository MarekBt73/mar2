import * as React from "react"
import { Link } from "gatsby"



const Navtop = () => (
<>
<div className="containernav">
   <div className="logonav">
          <h1>
              <Link to="/" >
                          Glazurnik-Malarz.pl
                   </Link>
                </h1>
        </div>

        < div className='search'>
                   <form action>
                   <input type="text" />
                   <button type="submit">szykaj</button>
                    </form>
                    </div>
      < div className='links'>
        <ul>
        <li><Link to="#">O mnie</Link></li>
        <li><Link to="#">Poradnik</Link></li>
        <li><Link to="#">Cenniki</Link></li>
        <li><Link to="#">Sklep</Link></li>
        <li><Link to="#">Kontakt</Link></li>
        </ul>
       </div>

       </div>
       

</>
)

export default Navtop