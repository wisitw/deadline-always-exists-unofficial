import React, { Component } from 'react';

import Transition from '../Components/Transition/Transition';

class Prologue2TransitionPhone extends Component {
    state = {};
    render() {
        return (
            <Transition
                noS='true'
                number='3_Social'
                baseBackgroundColor='black'
                total={16}
                continue='/prologue2transition2'
            />
        );
    }
}

export default Prologue2TransitionPhone;
