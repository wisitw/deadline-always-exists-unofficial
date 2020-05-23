import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Story2Transition2 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.musics = {
            music1: '/musics/musics/rain.mp3',
            music2: '/musics/musics/wave.mp3',
            music3: '/musics/musics/wind.mp3',
        };
    }

    componentDidMount = async () => {
        const music = localStorage.getItem('music');
        const musicPlayer = document.getElementById('appMusicPlayer');
        if (!musicPlayer.paused) {
            musicPlayer.pause();
        }
        musicPlayer.src = this.musics[music];
        await musicPlayer.load();
        await musicPlayer.play();
        this.timerHandler = setTimeout(() => {
            this.props.history.push('/story2transition3');
        }, 5000);
    };

    componentWillUnmount = () => {
        if (this.timerHandler) {
            clearTimeout(this.timerHandler);
            this.timerHandler = 0;
        }
    };
    render() {
        return <div className='bg-10 fit-screen' />;
    }
}

export default withRouter(Story2Transition2);
