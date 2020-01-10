import React, { Component } from 'react';

class LifeCycleB extends Component {
    constructor(props) {
        super();

        this.state = {
            name: 'Name'
        }

        console.log('LifeCycleB constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleB getDerivedStateFromProps')
        return null;
    }

    componentDidMount() {
        console.log('LifeCycleB componentDidMount')
    }

    render() {
        console.log('LifeCycleB render')
        return (
            <div>
                LifeCycleB
            </div>
        )
    }
}

export default LifeCycleB;