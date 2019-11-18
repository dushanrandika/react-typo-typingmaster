import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Heading from './components/Heading'
import FontSelection from './components/FontSelection'

const HeadingTypes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

export class Typo extends Component {
    static propTypes = {
        type: PropTypes.oneOf(HeadingTypes),
        font: PropTypes.string
    }

    render() {
        console.log("ANDAKJDNADJ",this.props)
        const { type, font } = this.props
        if (type) {
            return <Heading {...this.props} />
        } else if (font) {
            debugger
            return <FontSelection {...this.props} />
        } else {
            debugger
            return <p>{this.props.children}</p>
        }
    }
}




