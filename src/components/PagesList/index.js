import React, { PropTypes } from "react"

import PagePreview from "../PagePreview"

import {getFromContext as get} from "../../i18n/get"

import styles from "./index.css"

const PagesList = ({ pages }, context) => {
  const i18n = get(context)
  return (
    <div>
      {
      pages.length
      ? (
        <div>
          <ul className={ styles.list }>
            {
            pages.map(page => (
              <li className={styles.item} key={ page.title }><PagePreview { ...page } /></li>
            ))
          }
          </ul>
        </div>
      )
      : i18n.noPosts
    }
    </div>
  )
}

PagesList.propTypes = {
  pages: PropTypes.array.isRequired,
}

PagesList.contextTypes = {
  metadata: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
}

export default PagesList
