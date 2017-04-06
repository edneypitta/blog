import React, { PropTypes } from "react"
import { Link } from "phenomic"

import Date from "../Date"

import styles from "./index.css"

const Item = ({ __url, title, date }) => {
  return (
    <div key={__url}>
      <Date time={date} className={styles.info} />
      <Link to={__url} className={styles.link}>
        {title}
      </Link>
    </div>
  )
}

Item.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
}

Item.contextTypes = {
  metadata: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
}

export default Item
