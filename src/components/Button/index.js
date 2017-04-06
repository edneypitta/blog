import React, { PropTypes } from "react"
import { Link } from "phenomic"

import styles from "./index.css"

const Button = ({ to, children }) => (
  <Link to={to} className={styles.button}>
    { children }
  </Link>
)

Button.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
}

export default Button
