import React, { Component } from 'react';

import Transition from '../Components/Transition/Transition';

class ConclusionTransition2 extends Component {
    state = {};
    render() {
        return <Transition number='11' baseBackgroundColor='white' total={11} continue='/conclusion1' />;
    }
}

export default ConclusionTransition2;
