import React, { PropTypes } from "react"
import { Link } from "phenomic"

import styles from "./index.css"

const Button = ({ to, children, onClick }) => {
  let url = to || '#'

  let handleClick = event => {
    if (!onClick)
      return
      
    event.preventDefault()
    onClick()
  }

  return (
    <Link to={url} className={styles.button} onClick={handleClick}>
      {children}
    </Link>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  onClick: React.PropTypes.func
}

export default Button
