import React from "react"

import Particles from "react-particles-js"
import config from "./config"

import {particles} from "./index.css"

const ParticlesContainer = () => {
  return (
    <div className={particles}>
      <Particles params={config}
        width={'100%'} height={'100%'}
        style={{position:"fixed", "zIndex": "-1", display: "block"}}/>
    </div>
  )
}

export default ParticlesContainer
