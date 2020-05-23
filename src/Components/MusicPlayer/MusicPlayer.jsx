import React, { Component } from 'react';

class MusicPlayer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            play: false,
            currentMusic: '',
        };
        this.musics = {
            music1: '/static/musics/musics/ฝน.mp3',
            music2: '/static/musics/musics/คลื่น.mp3',
            music3: '/static/musics/musics/ลม.mp3',
        };
        this.audio = '';
        this._isMounted = false;
    }

    componentDidMount() {
        this._isMounted = true;
        // this._isMounted && setInterval(this.listenerMusic, 1000);
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    playMusic = () => {
        const music = localStorage.getItem('music');
        if (this.audio) {
            this.audio.pause();
        }
        const url = this.musics[music];
        this.audio = new Audio(url);
        this.audio.loop = true;
        this.audio.play();
        console.log('play', music);
    };

    // listenerMusic = () => {
    //     const music = localStorage.getItem('music');

    //     if (music && this.state.currentMusic !== music) {
    //         this.setState({ currentMusic: music });
    //         process.nextTick(() => {
    //             console.log(this.state);
    //             const url = this.musics[music];
    //             if (this.audio) {
    //                 this.audio.pause();
    //             }
    //             this.audio = new Audio(url);
    //             this.audio.play();
    //             this.audio.addEventListener(
    //                 'ended',
    //                 function () {
    //                     this.currentTime = 0;
    //                     this.play();
    //                 },
    //                 false
    //             );
    //             console.log(`playing ${music}`);
    //         });
    //     }
    // };

    render() {
        return (
            <div className='d-none' id='musicPlayer'>
                Music
            </div>
        );
    }
}

export default MusicPlayer;
