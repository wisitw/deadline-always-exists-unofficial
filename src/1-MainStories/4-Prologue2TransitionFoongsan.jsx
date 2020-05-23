import React, { Component } from 'react';

import Transition from '../Components/Transition/Transition';

class Prologue2TransitionFoongsan extends Component {
    state = {};
    render() {
        return (
            <Transition
                noS='true'
                number='3_Foogsan'
                baseBackgroundColor='black'
                total={22}
                continue='/prologue2transition2'
                repeat={2}
            />
        );
    }
}

export default Prologue2TransitionFoongsan;
