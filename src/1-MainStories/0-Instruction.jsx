import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FadingTextBulk from '../Components/FadingTextBulk/FadingTextBulk';

class Instruction extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const img = (
            <img
                src={process.env.PUBLIC_URL + '/images/icon/touch.gif'}
                className='fit-screen'
                alt='Touch to continue'
            />
        );
        return (
            <div className='d-flex justify-content-center container prologue-screen'>
                <div className='d-flex align-self-center bg-black'>
                    <FadingTextBulk texts={[img]} continue='/welcome-transition' specifier='instruction' fadeout />
                </div>
            </div>
        );
    }
}

export default withRouter(Instruction);
