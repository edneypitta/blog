import React, { PropTypes } from "react"

import Page from "../Page"

import Button from "../../components/Button"

import styles from "./index.css"
import {getFromContext as get} from "../../i18n/get"

const PageError = ({ error, errorText }, context) => {
  const { error404Title, error404Message } = get(context)

  return (
    <Page head={{ title: error404Title }}>
      <div className={ styles.container }>
        <div className={ styles.oops }>😱</div>
        <div className={ styles.text }>
          <p className={ styles.title }>
            <strong>{ error }</strong>
            { " " }
            { error404Title }
          </p>
          {
            error === 404 &&
            <div className={styles.description}>
              { error404Message.split("\\n").map(text => <div>{text}</div>) }
            </div>
          }
        </div>
      </div>
      <div className={styles.actions}>
        <Button to={"mailto:eu@chicocode.io"}>
          {"Reportar"}
        </Button>
      </div>
    </Page>
  )
}

PageError.propTypes = {
  error: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  errorText: PropTypes.string
}

PageError.defaultProps = {
  error: 404,
  errorText: "Page Not Found",
}

PageError.contextTypes = {
  location: PropTypes.object.isRequired,
  metadata: PropTypes.object.isRequired
}


export default PageError
