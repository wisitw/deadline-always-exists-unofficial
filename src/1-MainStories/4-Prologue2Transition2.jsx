import React, { Component } from 'react';

import Transition from '../Components/Transition/Transition';

class Prologue2Transition2 extends Component {
    state = {};
    render() {
        return <Transition number='3' baseBackgroundColor='black' total={6} continue='/prologue3' />;
    }
}

export default Prologue2Transition2;
