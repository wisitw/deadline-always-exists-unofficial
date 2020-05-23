import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FadingClickSingleLine from '../Components/FadingClickSingleLine/FadingClickSingleLine';

class Live3 extends Component {
    state = { marginTop: 0 };

    componentDidMount = () => {
        const screenHeight = window.innerHeight;
        let marginTop = 0.4 * screenHeight;
        marginTop = marginTop > 0 ? marginTop : 0.5 * screenHeight;
        this.setState({ marginTop: marginTop });
    };

    render() {
        const text = (
            <div>
                น่าจะดีถ้าได้มีชีวิตอยู่ต่อ
                <br />
                เพื่อใช้ชีวิตของตัวเองบ้าง
            </div>
        );
        return (
            <div className='d-flex flex-column container prologue-screen bg-9'>
                <div className='d-flex align-self-center' style={{ marginTop: this.state.marginTop }}>
                    <FadingClickSingleLine texts={['ดีจังนะ', text]} continue='/conclusion' specifier='live4' />
                </div>
            </div>
        );
    }
}

export default withRouter(Live3);
