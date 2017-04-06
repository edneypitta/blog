import React, { PropTypes } from "react"

import DisqusThread from "react-disqus-thread"

import Page from "../Page"
import Date from "../../components/Date"

import {getFromContext as get} from "../../i18n/get"

import styles from "./index.css"

const Post = (props, context) => {
  let i18n = get(context)
  return (
      <div>
          <article className={styles.block}>
              <h1 className={styles.title}>{ props.head.title }</h1>
              <Date time={ props.head.date } />
              <div className={styles.content}>
                 <Page {...props} />
              </div>
          </article>
          {
            props.head.comments &&
            <DisqusThread
              shortname={i18n.disqus.shortname}
              identifier={`${context.metadata.pkg.homepage}${props.__url}`}
              url={`${context.metadata.pkg.homepage}${props.__url}`}
            />
          }
      </div>
  )
}

Post.propTypes = {
  head: PropTypes.object.isRequired,
  __url: PropTypes.string
}

Post.contextTypes = {
  metadata: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
}

export default Post
