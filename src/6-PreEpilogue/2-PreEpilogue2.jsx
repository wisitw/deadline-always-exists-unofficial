import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FadingClickSingleLine from '../Components/FadingClickSingleLine/FadingClickSingleLine';

class PreEpilogue2 extends Component {
    constructor(props) {
        super(props);
        this.state = { marginTop: 0 };
    }

    componentDidMount = () => {
        if (this.props.location.search) {
            let marginTop = parseInt(this.props.location.search.split('=')[1]);
            this.setState({ marginTop });
        }
    };

    render() {
        const text = (
            <div>
                โอ้
                <br />
                คำถามนี้ไม่ต้องตอบฉันหรอก
            </div>
        );
        return (
            <div className='d-flex flex-column container prologue-screen bg-9' id='blackOutDiv'>
                <div className='d-flex align-self-center' style={{ marginTop: this.state.marginTop }}>
                    <FadingClickSingleLine
                        texts={[
                            text,
                            'คำตอบนี้ไม่ใช่คำตอบที่ฉันต้องรู้',
                            'แต่เป็นคำตอบที่เธอควรรู้',
                            'ตอนนี้ชีวิตกำลังรอให้เธอกลับไปใช้อยู่',
                            'ไว้ถึงเวลาค่อยมาคุยกันใหม่นะ',
                        ]}
                        blackOut={1500}
                        continue='/pre-epilogue2transition'
                        specifier='pre-epilogue2'
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(PreEpilogue2);
