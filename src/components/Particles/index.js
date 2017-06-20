import React from "react"

import Particles from "react-particles-js"
import config from "./config.yml"

import {particles} from "./index.css"

//this is a linear particles number generator based on screen width
let linearParticlesGenerator = x => (0.0205 * x - 7.3442) * 2
const isClient = typeof window !== "undefined"

const ParticlesContainer = () => {
  if (isClient)
    config.particles.number.value = Math.round(linearParticlesGenerator(window.innerWidth))

  return (
    <div className={particles}>
      <Particles params={config}
        width={'100%'} height={'100%'}
        style={{position:"fixed", "zIndex": "-1", display: "block"}}/>
    </div>
  )
}

export default ParticlesContainer
