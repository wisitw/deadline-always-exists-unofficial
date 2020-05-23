import React, { Component } from 'react';

import Transition from '../Components/Transition/Transition';

class Prologue2TransitionMiss extends Component {
    state = {};
    render() {
        return (
            <Transition
                noS='true'
                number='3_Miss'
                baseBackgroundColor='black'
                total={19}
                continue='/prologue2transition2'
                repeat={2}
            />
        );
    }
}

export default Prologue2TransitionMiss;
