import React, { PropTypes } from "react"
import { Link } from "phenomic"

import styles from "./index.css"

const Header = (props, context) => {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} to='/' >
        edney pitta
      </Link>
      <ul className={styles.nav}>
        <li>
          {
            context.metadata.pkg.github &&
            <Link to={context.metadata.pkg.github} target="_blank" >
              {"github"}
            </Link>
          }
        </li>
      </ul>
    </header>
  )
}

Header.propTypess = {
  location: PropTypes.object.isRequired
}

Header.contextTypes = {
  metadata: PropTypes.object.isRequired
}

export default Header
