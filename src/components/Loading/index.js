import React, { PropTypes } from "react"
import Helmet from "react-helmet"
import TopBarProgressIndicator from "react-topbar-progress-indicator"

import {getFromContext as get} from "../../i18n/get"

import styles from "./index.css"

TopBarProgressIndicator.config({
  barColors: {
    "0": "#14A697",
    "0.25": "#F2C12E",
    "0.50": "#F29D35",
    "0.75": "#F27649",
    "1.0": "#F25252"
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
