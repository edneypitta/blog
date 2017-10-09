import React, { PropTypes } from "react"

import "./index.global.css"
import "./markdown.global.css"
import "./highlight.global.css"

import Container from "./components/Container"
import DefaultHeadMeta from "./components/DefaultHeadMeta"
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"

import GATracker from "./components/GATracker"

const AppContainer = props => (
  <div>
    <Container>
      <GATracker params={props.params}>
      <DefaultHeadMeta />
      <Header {...props} />
      <Content {...props} >
        {props.children}
      </Content>
      <Footer {...props} />
      </GATracker>
    </Container>
  </div>
)

AppContainer.propTypes = {
  children: PropTypes.node,
  params: PropTypes.object,
}

export default AppContainer
