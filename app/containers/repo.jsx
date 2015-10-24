import React, { PropTypes } from 'react'

export default class Repo extends React.Component {

  // static propTypes = {
  //   user: PropTypes.object.isRequired,
  //   repo: PropTypes.object.isRequired
  // }

  constructor (props) {
    super(props)
  }

  render () {
    const {user, repo} = this.props.params;
    return <div className="row">
      Repository {user}/{repo}
    </div>

  }
}
