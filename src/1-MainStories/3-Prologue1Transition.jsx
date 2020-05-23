import React, { Component } from 'react';

import Transition from '../Components/Transition/Transition';

class Prologue1Transition extends Component {
    state = {};
    render() {
        return <Transition number='3' baseBackgroundColor='black' total={6} continue='/prologue2' />;
    }
}

export default Prologue1Transition;
