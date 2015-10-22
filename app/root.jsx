import React, { PropTypes } from 'react'
import Routes from './routes.jsx'

export default class Root extends React.Component {
  /*static propTypes = {
    application: PropTypes.object.isRequired
  }*/

  render () {
    return (
      <div>{Routes}</div>
    )
  }
}