import React, { PropTypes } from "react"
import styles from "./index.css"
import getI18n from "../../i18n/get"

const Footer = (props, context) => {
  const { footer: i18nFooter } = getI18n(props, context)
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        <p>
          © 2017 {' '}
          {i18nFooter.buildWith} <span className={styles.heart}>❤</span> {i18nFooter.using} <a href={process.env.PHENOMIC_HOMEPAGE} className={styles.phenomicReference} target="_blank">
            <span className={styles.phenomicReferenceName}>
              {`<${process.env.PHENOMIC_NAME} />`}
            </span>
          </a>. Forked from <a href='https://chicocode.io' target='_blank'>chicocode.io</a>
        </p>
      </div>
    </footer>
  )
}

Footer.contextTypes = {
  metadata: PropTypes.object.isRequired
}

Footer.propTypes = {
  location: PropTypes.object.isRequired
}

export default Footer
