import React, { Component } from 'react';

import Transition from '../Components/Transition/Transition';

class Story2Transition3 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <Transition reverse='true' number='10' baseBackgroundColor='white' total={6} continue='/story3' />;
    }
}

export default Story2Transition3;
