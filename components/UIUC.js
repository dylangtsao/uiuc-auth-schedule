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
        const response = await fetch('http://courses.illinois.edu/cisapp/explorer/schedule/2022/spring');
        const data = await response.json();
        this.setState({data: data, isLoaded: true});
    }

    render() {
        const { isLoaded, data } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    {data.map((item, index) => (
                        <div key={index}>
                            {item.course} - {item.title}
                        </div>
                    ))}
                </div>
            );
        }
    }
}

export default UIUC