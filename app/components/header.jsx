import React, { PropTypes } from 'react'
import { Link } from 'react-router'

export default class Header extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return <div className="col-xs-12">
      header
      <Link to="/page1">
      page1
      </Link>
      <Link to="/page2">
      page2
      </Link>
    </div>

  }
}
