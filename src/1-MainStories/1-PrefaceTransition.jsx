import React, { Component } from 'react';

import Transition from '../Components/Transition/Transition';

class PrefaceTransition extends Component {
    state = {};
    render() {
        return <Transition number='1' baseBackgroundColor='white' total={6} continue='/preface' />;
    }
}

export default PrefaceTransition;
