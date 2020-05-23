import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FadingClickSingleLine from '../Components/FadingClickSingleLine/FadingClickSingleLine';

class BackgroundHistory2 extends Component {
    state = {
        messageToPastSelf: '',
    };

    handleOnChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({ [name]: value });
        process.nextTick(() => {
            localStorage.setItem([name], value);
            console.log(this.state);
        });
    };

    handleOnSubmit = (event) => {
        event.preventDefault();

        if (this.state.messageToPastSelf) this.props.history.push('/background-history3');
        else alert('โปรดใส่ข้อมูลให้ครบ');
    };

    render() {
        const formText = (
            <form className='d-flex flex-column' onSubmit={this.handleOnSubmit}>
                <label>
                    แล้วถ้าย้อนเวลากลับไปได้
                    <br />
                    อยากบอกกับตัวเองว่าอะไรละ
                </label>
                <textarea
                    className='textarea-black no-resize textarea-text-center text-center'
                    placeholder='พิมพ์คำตอบของคุณที่นี่'
                    value={this.state.messageToPastSelf}
                    name='messageToPastSelf'
                    onChange={this.handleOnChange}
                />
                <button className='mt-1 clear-btn text-right' type='submit'>
                    <img
                        src={process.env.PUBLIC_URL + '/images/icon/iconlogo-12.png'}
                        alt='next'
                        className='next-icon'
                    />
                </button>
            </form>
        );
        return (
            <div className='d-flex justify-content-center container prologue-screen bg-11-3-1'>
                <div className='d-flex align-self-center'>
                    <FadingClickSingleLine
                        texts={[formText]}
                        continue='/background-history3'
                        specifier='background-history-2'
                        keysNotText={[1]}
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(BackgroundHistory2);
