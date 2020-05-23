import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FadingTextBulk from '../Components/FadingTextBulk/FadingTextBulk';

class Prologue1 extends Component {
    state = {};
    render() {
        return (
            <div className='d-flex justify-content-center container prologue-screen bg-2'>
                <div className='d-flex align-self-center'>
                    <FadingTextBulk
                        texts={['วันนี้เป็นวันธรรมดา ๆ วันหนึ่งในชีวิตคุณ', 'คุณใช้ชีวิตอย่างที่เคยใช้มาตลอด']}
                        continue='/prologue1-transition'
                        specifier='prologue1'
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(Prologue1);
