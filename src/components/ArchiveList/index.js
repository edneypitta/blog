import React, { PropTypes } from "react"

import enhanceCollection from "phenomic/lib/enhance-collection"

import {getLangContext as getLang} from "../../i18n/getLang"

import styles from "./index.css"

import Item from "./item.js"

const ArchiveList = (props, context) => {
  const locale = getLang(context)
  const posts = enhanceCollection(context.collection, {
    filter: pg => pg.layout === "Post"
      && pg.__filename.startsWith(locale),
    sort: "date",
    reverse: true,
  })
  .reduce((acc, item) => {
    let year = new Date(item.date).getFullYear().toString()
    if (!acc.hasOwnProperty(year))
      acc[year] = []
    acc[year].push(item)
    return acc
  }, {})

  return (
    <div className={styles.archive}>
      {Object.keys(posts).map(year => {
        return (
          <div key={year}>
            <h2>{year}</h2>
            <div className={styles.item}>
                {posts[year].map(post => <Item {...post} key={post.__url} />)}
            </div>
          </div>
        )
      })}
    </div>
  )
}

ArchiveList.contextTypes = {
  collection: PropTypes.array.isRequired,
  metadata: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
}

export default ArchiveList
