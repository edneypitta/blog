import React, { Component, PropTypes } from "react"

import Page from "../Page"
import Comments from "../../components/Comments"
import Date from "../../components/Date"

import styles from "./index.css"
const isClient = typeof window !== "undefined"

class Post extends Component {

  static propTypes = {
    head: PropTypes.object.isRequired,
    __url: PropTypes.string
  }

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  }

  componentDidMount() {
    if(!isClient || !this.context.location.hash)
      return

    setTimeout(() => {
       const hash = this.context.location.hash.replace('#', '') 
       const id = decodeURI(hash)
       const element = document.getElementById(id)
       if (element) element.scrollIntoView()
     }, 200);
  }

  render() {
    const {props} = this
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
              <Comments { ...props } />
            }
        </div>
    )
  }
}

export default Post
