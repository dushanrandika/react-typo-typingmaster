import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class FirstTypo extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const { text, typo } = this.props

    return (
      <div style={{typo}}>{text}</div>
    )
  }
}
