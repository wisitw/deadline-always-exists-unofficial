import React, { Component } from 'react';

import Transition from '../Components/Transition/Transition';

class Prologue5Transition2 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Transition
                noS='true'
                number='8_Cloed'
                baseBackgroundColor='black'
                changeBackgroundWhen={{ 3: '#f27a22' }}
                total={10}
                continue='/prologue6'
            />
        );
    }
}

export default Prologue5Transition2;
