import React, { Component } from "react"
import { PropTypes } from "react"

import ga from "react-google-analytics"
const GoogleAnalyticsInitiailizer = ga.Initializer

const isProduction = process.env.NODE_ENV === "production"
const isClient = typeof window !== "undefined"

class GATracker extends Component {

  componentWillMount() {
    if (isClient) {
      const { pkg } = this.context.metadata
      if (isProduction) {
        ga("create", pkg.googleAnalyticsUA, "auto")
      }
      else {
        // eslint-disable-next-line no-console
        console.info("ga.create", pkg.googleAnalyticsUA)
      }
      this.logPageview()
    }
  }

  componentWillReceiveProps(props) {
    if (props.params.splat !== this.props.params.splat) {
      this.logPageview()
    }
  }

  logPageview() {
    if (isClient) {
      if (isProduction) {
        ga("set", "page", window.location.pathname)
        ga("send", "pageview")
      }
      else {
        // eslint-disable-next-line no-console
        console.info("New pageview", window.location.href)
      }
    }
  }

  render() {
    return (
      <div>
        { this.props.children }
        <GoogleAnalyticsInitiailizer />
      </div>
    )
  }
}

GATracker.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
  params: PropTypes.object.isRequired,
}

GATracker.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default GATracker