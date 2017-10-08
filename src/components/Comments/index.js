import React, { Component, PropTypes } from "react"

import Comment from './Comment'
import Button from '../Button'

import styles from './index.css'

class Comments extends Component {

  constructor(props) {
    super(props)
    this.state = { comments: [], page: 1 }
  }

  static propTypes = {
    head: PropTypes.object.isRequired
  }

  loadCommentsFromGithub() {
    let req = new Request(`https://api.github.com/repos/chicocode/chicocodeio/issues/${this.props.head.issue}/comments?page=${this.state.page}`, {
      headers: new Headers({
        'Accept': 'application/vnd.github.v3.html+json'
      })
    })

    fetch(req)
      .then(response => response.json())
      .then(result => {
        let comments = this.state.comments.concat(result)
        let page = this.state.page + 1
        this.setState({ comments, page })
      })
  }

  componentDidMount() {
    this.loadCommentsFromGithub()
  }

  showLoadMoreButton() {
    let {comments} = this.state
    return comments.length >= 30
  }

  render() {
    let comments = this.state.comments
      .map(data => <Comment key={data.id} {...data} />)

    return (
      <div className={styles.comments}>
        <h3> Comentários </h3>
        <Button to={`https://github.com/chicocode/chicocodeio/issues/${this.props.head.issue}`}>
          Comentar no Github
        </Button>
        {
          this.state.comments.length > 0 &&
          <div>
            <ul className={styles.commentList}>
              {comments}
            </ul>
            {
              this.showLoadMoreButton() &&
              <div className={styles.alignList}>
                <Button onClick={this.loadCommentsFromGithub.bind(this)}>
                  Carregar mais
                </Button>
              </div>
            }
          </div>
        }
      </div>
    )
  }
}

export default Comments
