import React, { Component } from 'react';

import Transition from '../Components/Transition/Transition';

class PreEpilogue2Transition extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount = () => {
        const musicPlayer = document.getElementById('appMusicPlayer');
        if (!musicPlayer.paused) {
            musicPlayer.pause();
        }
    };

    render() {
        return <Transition noS='true' number='8' baseBackgroundColor='black' total={9} continue='/epilogue' />;
    }
}

export default PreEpilogue2Transition;
