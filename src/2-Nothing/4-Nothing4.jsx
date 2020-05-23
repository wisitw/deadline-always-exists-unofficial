import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FadingClickSingleLine from '../Components/FadingClickSingleLine/FadingClickSingleLine';

class Nothing4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marginTop: 0,
        };
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
                เหมือนจะง่ายนะ
                <br />
                แต่ก็ยากจังเลย การขอบคุณตัวเองเนี่ย
            </div>
        );
        return (
            <div className='d-flex flex-column container prologue-screen bg-9'>
                <div
                    id='nothing4LastDialogue'
                    className='d-flex align-self-center'
                    style={{ marginTop: this.state.marginTop }}
                >
                    <FadingClickSingleLine
                        texts={[
                            'คงจะดีนะ',
                            'ถ้าเราได้มีชีวิตอยู่ต่อเพื่อขอบคุณตัวเองในทุก ๆ วัน',
                            text,
                            'แต่ถ้าทำได้คงดีมากเลยเนอะ',
                        ]}
                        continue='/conclusion'
                        specifier='nothing4'
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(Nothing4);
