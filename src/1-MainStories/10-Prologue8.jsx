import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FadingClickSingleLine from '../Components/FadingClickSingleLine/FadingClickSingleLine';

class Prologue8 extends Component {
    state = {};
    render() {
        return (
            <div className='d-flex justify-content-center container prologue-screen bg-9'>
                <div className='d-flex align-self-center'>
                    <FadingClickSingleLine
                        texts={['ข้างตัวคุณมียมฑูตยืนรออยู่']}
                        continue='/story1'
                        specifier='prologue8'
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(Prologue8);
