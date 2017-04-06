import React, { PropTypes } from "react"

import styles from "./index.css"

const Content = (props) => (
  <main className={styles.container}>
    { props.children }
  </main>
)

Content.propTypes = {
  children: PropTypes.node,
}

export default Content
