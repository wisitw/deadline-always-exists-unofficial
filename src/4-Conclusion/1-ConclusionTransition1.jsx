import React, { Component } from 'react';

import Transition from '../Components/Transition/Transition';

class ConclusionTransition1 extends Component {
    state = {};
    render() {
        return <Transition noS='true' number='12' baseBackgroundColor='white' total={11} continue='/conclusion1' />;
    }
}

export default ConclusionTransition1;
