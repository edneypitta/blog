import React from "react"

import Particles from "react-particles-js"
import config from "./config"

import {particles} from "./index.css"

//this is a linear particles number generator based on screen width
let linearParticlesGenerator = x => 5/244 * x - 440/61

const ParticlesContainer = () => {
  config.particles.number.value = linearParticlesGenerator(window.innerWidth)

  return (
    <div className={particles}>
      <Particles params={config}
        width={'100%'} height={'100%'}
        style={{position:"fixed", "zIndex": "-1", display: "block"}}/>
    </div>
  )
}

export default ParticlesContainer
