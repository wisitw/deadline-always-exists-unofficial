import React, { Component } from 'react';

import Transition from '../Components/Transition/Transition';

class Story2Transition1 extends Component {
    state = {};
    render() {
        return <Transition number='10' baseBackgroundColor='white' total={6} continue='/story2transition2' />;
    }
}

export default Story2Transition1;
