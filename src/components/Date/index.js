import React, { PropTypes } from "react"

import {getFromContext as get} from "../../i18n/get"

import {info} from "./index.css"

const DateComponent = ({time, className}, context) => {
  const date = new Date(time)
  const {months} = get(context)
  const monthIndex = date.getMonth()
  return (
    <div className={`${info} ${className}`}>
      {`${months[monthIndex]} ${date.getDate()}, ${date.getFullYear()}`}
    </div>
  )
}

DateComponent.propTypes = {
  time: PropTypes.string.isRequired,
  className:  PropTypes.string
}

DateComponent.contextTypes = {
  metadata: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
}

export default DateComponent
