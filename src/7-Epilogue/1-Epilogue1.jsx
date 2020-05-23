import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FadingClickSingleLine from '../Components/FadingClickSingleLine/FadingClickSingleLine';

class Epilogue1 extends Component {
    state = {};

    render() {
        return (
            <div className='d-flex flex-column justify-content-center container prologue-screen'>
                <div className='d-flex align-self-center'>
                    <FadingClickSingleLine
                        texts={[
                            'คุณตื่นมาในห้องนอนของตัวเอง',
                            'ดูเหมือนเรื่องทั้งหมดจะเป็นแค่ฝันไป',
                            'คุณนั่งพักสักครู่ ก่อนลุกขึ้นขยับตัวใช้ชีวิตวันนี้ต่อไป',
                        ]}
                        continue='/epilogue2'
                        musicPlay='/musics/musics/ending.mp3'
                        playKey={3}
                        specifier='epilogue1'
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(Epilogue1);
