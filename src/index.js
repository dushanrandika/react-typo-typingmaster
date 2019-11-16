import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Typo extends Component {
  static propTypes = {
    type: PropTypes.string
  }

  render() {
    console.log(this.props)
    const { type, children } = this.props

    if (type == 'h1') {
      return <h1>{this.props.children}</h1>
    } else if (type == 'h2') {
      return <h2>{this.props.children}</h2>
    } else if (type == 'h3') {
      return <h2>{this.props.children}</h2>
    } else if (type == 'h4') {
      return <h2>{this.props.children}</h2>
    } else if (type == 'h5') {
      return <h2>{this.props.children}</h2>
    } else if (type == 'h6') {
      return <h2>{this.props.children}</h2>
    } else if (type == 'Times New Roman') {
      return <p style={{fontFamily:type}}>{this.props.children}</p>
    } else {
      return <p>{this.props.children}</p>
    }

  }
}
