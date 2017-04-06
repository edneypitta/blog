import React from "react"

import Page from "../Page"
import ArchiveList from "../../components/ArchiveList"

const Archive = props => (
  <Page { ...props }>
    <ArchiveList />
  </Page>
)

export default Archive
