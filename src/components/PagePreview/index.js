import React, { PropTypes } from "react"
import { Link } from "phenomic"

import styles from "./index.css"

import {getFromContext as get} from "../../i18n/get"

const PagePreview = ({ __url, title, date, description }, context) => {
  const i18n = get(context)

  return (
    <article>
      <h2 className={styles.title} >
        <Link to={ __url } className={styles.link}>
          { title }
        </Link>
      </h2>
      <p> { description } <br /> </p>
      <Link to={ __url } className={styles.readMore}>
          { `... ${ i18n.more }` }
      </Link>
    </article>
  )
}

PagePreview.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  description: PropTypes.string,
}

PagePreview.contextTypes = {
  metadata: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
}

export default PagePreview
