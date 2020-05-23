import React, { Component } from 'react';

import Transition from '../Components/Transition/Transition';

class Story3Transition extends Component {
    state = {};
    render() {
        return <Transition number='11' baseBackgroundColor='white' total={4} continue='/story4' />;
    }
}

export default Story3Transition;
