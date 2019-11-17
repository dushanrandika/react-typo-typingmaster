import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Heading extends Component {
    static propTypes = {
        type: PropTypes.string
    }

    render() {
        const { type, children } = this.props

        const headingStyle = {
            h1:{
                fontSize: '2.5rem',
            },
            h2:{
                fontSize: '2rem',
            },
            h3:{
                fontSize: '1.75rem',
            },
            h4:{
                fontSize: '1.5rem',
            },
            h5:{
                fontSize: '1.25rem',
            },
            h6:{
                fontSize: '1rem',
            },
        }

        if (type == 'h1') {
            return <h1 style={headingStyle.h1}>{this.props.children}</h1>
        } else if (type == 'h2') {
            return <h2 style={headingStyle.h2}>{this.props.children}</h2>
        } else if (type == 'h3') {
            return <h2 style={headingStyle.h3}>{this.props.children}</h2>
        } else if (type == 'h4') {
            return <h2 style={headingStyle.h4}>{this.props.children}</h2>
        } else if (type == 'h5') {
            return <h2 style={headingStyle.h5}>{this.props.children}</h2>
        } else if (type == 'h6') {
            return <h2 style={headingStyle.h6}>{this.props.children}</h2>
        } else{
            return <p>{this.props.children}</p>
            // this need to throw an error
        }

    }
}