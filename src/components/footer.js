import * as React from "react"
import { Link } from "gatsby"

const Footer = () => (
  <footer
    style={{
      background: `rebeccapurple`,
  
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/" style={{ color: `white`, textDecoration: `none`, }}
                                     > 
                 <h4>© Wszystkie prawa zastrzeżone</h4>

        </Link>
      </h1>
    </div>
  </footer>
)

export default Footer

