import React, { Component } from 'react';

import Transition from '../Components/Transition/Transition';

class Prologue6Transition extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <Transition noS='true' number='8' baseBackgroundColor='#f27a22' total={9} continue='/prologue7' />;
    }
}

export default Prologue6Transition;
