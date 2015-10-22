import React, { PropTypes } from 'react'
import Header from './header.jsx'
import Footer from './footer.jsx'

export default class Application extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {


    return (
      <div id="layout">
        <Header/>

        <div id="main">
          {/* this will render the child routes */}
          {this.props.children}
        </div>

        <Footer />
      </div>
    )
  }
}
