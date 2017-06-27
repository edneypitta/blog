import React, { PropTypes } from "react"

import Date from "../../../components/Date"

import styles from "./index.css"

const Comment = (props) => {
  return (<li className={styles.comment}>
    <img className={styles.avatar} src={props.user.avatar_url} />
    <span className={styles.description}>
      <strong>{props.user.login}</strong> comentou em {' '}
      <Date className={styles.date} time={props.created_at} />
    </span>
    <p className={styles.body} dangerouslySetInnerHTML={{__html: props.body_html}}>
    </p>
  </li>)
}

 Comment.propTypes = {
   id: PropTypes.number.isRequired,
   user: PropTypes.object.isRequired,
   created_at: PropTypes.instanceOf(Date).isRequired,
   body_html: PropTypes.string.isRequired
 }

export default Comment