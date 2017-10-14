import React, { PropTypes } from "react"
import { Link } from "phenomic"

import styles from "./index.css"

import get from "../../i18n/get"

const Header = (props, context) => {
  const { about } = get(props, context)
  return (
    <header className={styles.header}>
      <Link className={styles.logo} to='/' >
        edney pitta
      </Link>
      <ul className={styles.nav}>
        <li>
          <Link activeClassName={styles.active} to={about.url} >
            {about.name}
          </Link>
        </li>
        <li>
          <Link to={context.metadata.pkg.github} target="_blank" >
            <i className="fa fa-github fa-lg" aria-hidden="true"></i>
          </Link>
        </li>
        <li>
          <Link to={context.metadata.pkg.twitter} target="_blank" >
            <i className="fa fa-twitter fa-lg" aria-hidden="true"></i>
          </Link>
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
