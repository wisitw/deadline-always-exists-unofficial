import React, { Component } from 'react';

import Transition from '../Components/Transition/Transition';

class Prologue2TransitionRelax extends Component {
    state = {};
    render() {
        return (
            <Transition
                noS='true'
                number='3_Relax'
                baseBackgroundColor='black'
                total={12}
                continue='/prologue2transition2'
                repeat={2}
            />
        );
    }
}

export default Prologue2TransitionRelax;
