import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import PagesList from "../../components/PagesList"
import Button from "../../components/Button"

import {getLangContext as getLang} from "../../i18n/getLang"
import {getFromContext as get} from "../../i18n/get"

import styles from "./index.css"

const defaultNumberOfPosts = 6

const LatestPosts = (props, context) => {
  const locale = getLang(context)
  const {archive: {name, url}} = get(context)
  const latestPosts = enhanceCollection(context.collection, {
    filter: pg => pg.layout === "Post"
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
      <div className={styles.container}>
        <Button to={url}>
          {name}
        </Button>
      </div>
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
