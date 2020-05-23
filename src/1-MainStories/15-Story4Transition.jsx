import React, { Component } from 'react';

import Transition from '../Components/Transition/Transition';

class Story4Transition extends Component {
    state = {};
    constructor(props) {
        super(props);
        this.continue = localStorage.getItem('regretNotDoing').split(':')[0];
    }
    render() {
        return <Transition noS='true' number='12' baseBackgroundColor='white' total={11} continue={this.continue} />;
    }
}

export default Story4Transition;
