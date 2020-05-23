import React, { Component } from 'react';

import Transition from '../Components/Transition/Transition';

class WelcomeTransition extends Component {
    state = {};
    render() {
        return <Transition number='2' baseBackgroundColor='black' total={6} continue='/prologue1' />;
    }
}

export default WelcomeTransition;
