import React, { Component } from 'react';

class UIUC extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoaded: false,
        }
    }

    async componentDidMount() {
        const response = await fetch('http://courses.illinois.edu/cisapp/explorer/catalog/2012/spring/AAS/100.xml');
        const data = await response.json();
        this.setState({data: data});
    }

    render() {
        return (
            <div>
                Schedule
            </div>
        )
    }
}

export default UIUC