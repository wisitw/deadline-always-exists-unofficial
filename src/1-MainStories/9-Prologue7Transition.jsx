import React, { Component } from 'react';

import Transition from '../Components/Transition/Transition';

class Prologue7Transition extends Component {
    state = {};
    render() {
        return <Transition number='9' baseBackgroundColor='white' total={4} continue='/prologue8' />;
    }
}

export default Prologue7Transition;
