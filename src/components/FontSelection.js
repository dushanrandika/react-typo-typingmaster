import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

// Using  Google Fonts API
export default class FontSelection extends Component {
    constructor(props) {
        super(props);

    }

    static propTypes = {
        type: PropTypes.string
    }

    componentDidMount() {
        console.log("ADAD")
        // Make a request for getting Google Fonts
        axios.get('https://fonts.googleapis.com/css?family=Alata')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                console.log("Executed")
            });
    }

    render() {
        const { type, children } = this.props

        return <div>{children}</div>

    }
}