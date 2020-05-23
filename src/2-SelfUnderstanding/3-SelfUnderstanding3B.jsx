import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FadingClickSingleLine from '../Components/FadingClickSingleLine/FadingClickSingleLine';

class SelfUnderstanding3B extends Component {
    constructor(props) {
        super(props);
        const haveWhatYouWantTodo = localStorage.getItem('haveWhatYouWantTodo');
        const responseText =
            haveWhatYouWantTodo === 'มี' ? (
                <div>
                    มันน่าจะดีนะ
                    <br />
                    ถ้าเธอจะมีชีวิตอยู่เพื่อรู้สึกดีแบบนั้นอีก
                </div>
            ) : (
                <div>
                    มันน่าจะดีนะ
                    <br />
                    ถ้าเธอจะมีชีวิตอยู่เพื่อค้นหาว่าอะไรจะทำให้เธอมีความสุข
                </div>
            );
        this.state = {
            responseText: responseText,
        };
    }

    render() {
        return (
            <div className='d-flex justify-content-center container prologue-screen bg-9'>
                <div className='d-flex align-self-center'>
                    <FadingClickSingleLine
                        texts={[
                            this.state.responseText,
                            'ถ้ายังมีชีวิต ก็ยังมีความเป็นไปได้อีกหลายอย่างรออยู่นะ',
                            'คงจะดีถ้าได้รู้ว่าตัวเองเป็นใครและอยากทำอะไรบนโลกนี้',
                        ]}
                        continue='/conclusion'
                        specifier='self-understanding-3B'
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(SelfUnderstanding3B);
