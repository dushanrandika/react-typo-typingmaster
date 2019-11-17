import React, { Component } from 'react'

import { Typo } from 'react-typo'

export default class App extends Component {
  render() {
    return (
      <div>
        <Typo type="h1">Print me!</Typo>
        <Typo type="h2">Print me!</Typo>
        <Typo type="h3">Print me!</Typo>
        <Typo type="h4">Print me!</Typo>
        <Typo type="h5">Print me!</Typo>
        <Typo type="h6">Print me!</Typo>
        <Typo type="h7">Print me!</Typo>
        <Typo>Print me!</Typo>
      </div>
    )
  }
}
