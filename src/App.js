import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Heading from './components/Heading'

const HeadingTypes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

export class Typo extends Component {
    static propTypes = {
        type: PropTypes.oneOf(HeadingTypes)
    }

    render() {
        console.log(this.props)
        const { type } = this.props
        if (type) {
            return <Heading {...this.props} />
        } else {
            return <p>{this.props.children}</p>
        }
    }
}




