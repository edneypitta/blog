import React, { PropTypes } from "react"
import { Link } from "phenomic"

import styles from "./index.css"

import getLang from "../../i18n/getLang"
import get from "../../i18n/get"

const Header = (props, context) => {
  const locale = getLang(props, context)
  const {archive, about} = get(props, context)
  return (
    <header className={styles.header}>
      <Link className={styles.logo} to={ `/${ locale }` } >
        chico<span className={styles.info}>code.io</span>
      </Link>
      <ul className={styles.nav}>
          <li>
            <Link activeClassName={ styles.active } to={ `/${ locale }` } >
              { "blog" }
            </Link>
          </li>
          <li>
            <Link activeClassName={ styles.active } to={ archive.url } >
              { archive.name }
            </Link>
          </li>
          <li>
            <Link activeClassName={ styles.active } to={ about.url } >
              { about.name }
            </Link>
          </li>
          <li>
            {
              context.metadata.pkg.github &&
              <Link to={ context.metadata.pkg.github } target="_blank" >
                { "github" }
              </Link>
            }
          </li>
          <li>
            <Link to={ "/feed.xml" } target="_self" >
              { "rss" }
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
