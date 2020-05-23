import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FadingClickSingleLine from '../Components/FadingClickSingleLine/FadingClickSingleLine';

class Prologue7 extends Component {
    state = {};
    componentDidMount = () => {
        const musicPlayer = document.getElementById('appMusicPlayer');
        if (!musicPlayer.paused) {
            musicPlayer.pause();
        }
    };
    render() {
        return (
            <div className='d-flex justify-content-center container prologue-screen'>
                <div className='d-flex align-self-center'>
                    <FadingClickSingleLine
                        texts={[
                            'เช้านี้คุณตื่นขึ้นโดยปราศจากเสียงนาฬิกาปลุก',
                            'ทุกอย่างรอบตัวดูเงียบกว่าที่เคยเป็น',
                            '"คุณตายแล้ว"',
                            'ชีวิตของคุณไม่เหลือวันพรุ่งนี้อีกแล้ว',
                        ]}
                        styles={{
                            3: { fontSize: '46px', fontWeight: 'bold' },
                        }}
                        delayBefore={{
                            3: 2000,
                        }}
                        continue='/prologue7transition'
                        specifier='prologue7'
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(Prologue7);
