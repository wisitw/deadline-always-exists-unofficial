import React, { Component } from 'react';

import Transition from '../Components/Transition/Transition';

class Prologue2TransitionWork extends Component {
    state = {};
    render() {
        return (
            <Transition
                noS='true'
                number='3_Work'
                baseBackgroundColor='black'
                total={17}
                continue='/prologue2transition2'
                repeat={2}
            />
        );
    }
}

export default Prologue2TransitionWork;
