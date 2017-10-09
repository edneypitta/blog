import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"
import PagesList from "../../components/PagesList"
import {getLangContext as getLang} from "../../i18n/getLang"
import styles from "./index.css"

const defaultNumberOfPosts = 6

const LatestPosts = (props, context) => {
  const locale = getLang(context)
  const latestPosts = enhanceCollection(context.collection, {
    filter: pg => pg.layout === "Post" 
      && (!pg.hidden || pg.hidden === false)
      && pg.__filename.startsWith(`${ locale }`),
    sort: "date",
    reverse: true,
  })
  .slice(0, props.numberOfPosts || defaultNumberOfPosts)

  return (
    <div>
      <ul className={styles.list}>
        <PagesList pages={ latestPosts } />
      </ul>
    </div>
  )
}

LatestPosts.propTypes = {
  numberOfPosts: PropTypes.number
}

LatestPosts.contextTypes = {
  collection: PropTypes.array.isRequired,
  metadata: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
}

export default LatestPosts
