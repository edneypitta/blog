import React, { PropTypes } from "react"
import Helmet from "react-helmet"
import TopBarProgressIndicator from "react-topbar-progress-indicator"

import {getFromContext as get} from "../../i18n/get"

import styles from "./index.css"

TopBarProgressIndicator.config({
  barColors: {
    "0": "#F6B1C3",
    "0.333": "#F0788C",
    "0.666": "#BC0D35",
    "1": "#A20D1E"
  },
  shadowBlur: 5,
})

const Loading = (_, context) => {
  const i18n = get(context)
  return (
    <div>
      <Helmet
        title={ i18n.loading }
      />
      <TopBarProgressIndicator />
      <div className={ styles.loader }>
        <div className={ styles.spinner } />
      </div>
    </div>
  )
}

Loading.contextTypes = {
  metadata: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
}

export default Loading
