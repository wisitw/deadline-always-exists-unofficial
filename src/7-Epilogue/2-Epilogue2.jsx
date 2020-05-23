import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FadingClickSingleLine from '../Components/FadingClickSingleLine/FadingClickSingleLine';

class Epilogue2 extends Component {
    state = {};

    componentDidMount = () => {
        const musicPlayer = document.getElementById('appMusicPlayer');
        musicPlayer.play();
        console.log('music is played', musicPlayer.src);
    };

    render() {
        const text = (
            <div>
                ทันทีที่คุณลุกขึ้น
                <br />
                คุณก็หันไปเห็นของที่ระลึกจากความตายที่ยมฑูตทิ้งไว้ให้
            </div>
        );
        return (
            <div
                className='d-flex flex-column justify-content-center container prologue-screen bg-11-4-1'
                id='blackOutDiv'
            >
                <div className='d-flex align-self-center'>
                    <FadingClickSingleLine
                        texts={[text]}
                        continue='/epilogue3back'
                        blackOut={1500}
                        fadeOutWithMusic
                        specifier='epilogue2'
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(Epilogue2);
