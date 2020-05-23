import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FadingClickSingleLine from '../Components/FadingClickSingleLine/FadingClickSingleLine';

class SelfUnderstanding3A extends Component {
    state = {};

    render() {
        return (
            <div className='d-flex justify-content-center container prologue-screen bg-9'>
                <div className='d-flex align-self-center'>
                    <FadingClickSingleLine
                        texts={[
                            'ฟังดูดีนะ',
                            'ถ้ายังมีชีวิต ก็ยังมีความเป็นไปได้อีกหลายอย่างรออยู่นะ',
                            'คงจะดีถ้าได้รู้ว่าตัวเองเป็นใครและอยากทำอะไรบนโลกนี้',
                        ]}
                        continue='/conclusion'
                        specifier='self-understanding-3A'
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(SelfUnderstanding3A);
