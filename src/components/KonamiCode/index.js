import React, { Component, PropTypes } from "react"
import EasterEgg from "react-easter"

import get from "../../i18n/get"

import styles from "./index.css"

const konamiCodeSeq = [
  'arrowup',
  'arrowup',
  'arrowdown',
  'arrowdown',
  'arrowleft',
  'arrowright',
  'arrowleft',
  'arrowright',
  'b',
  'a'
];

class KonamiCode extends Component {

  static propTypes = {
    location: PropTypes.object.isRequired
  }

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props,context)
    this.state = { show:true }
  }

  onClick(event) {
    if (event.target.id === 'overlay')
      this.setState({show: false})
  }

  componentDidUpdate() {
    if (this.state.show === false)
      this.setState({show:true})
  }

  render() {
    const {konami} = get(this.props, this.context)
    if (!this.state.show)
      return null

    return (
      <EasterEgg keys={konamiCodeSeq} timeout={30000}>
        <div className={styles.overlay} onClick={this.onClick.bind(this)} id="overlay">
          <div className={styles.container}>
            <div className={`${styles.glitch} ${styles.found}`} data-text={konami.first}>{konami.first}</div>
              <div className={`${styles.glitch} ${styles.reward}`} data-text={konami.second}>{konami.second}</div>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/5dbG4wqN0rQ?autoplay=1" frameBorder="0" allowFullScreen></iframe>
              <div className={`${styles.glitch} ${styles.haveFun}`} data-text={konami.fun.shadow}>{konami.fun.text}</div>
          </div>
        </div>
      </EasterEgg>
    )
  }
}

export default KonamiCode
