import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FadingClickSingleLine from '../Components/FadingClickSingleLine/FadingClickSingleLine';

class Prologue3 extends Component {
    state = {
        todoTomorrow: '',
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
        if (this.state.todoTomorrow) this.props.history.push('/prologue5transition1');
        else alert('โปรดใส่ข้อมูลให้ครบ');
    };

    render() {
        const form = (
            <form className='d-flex flex-column prologue4-fading-text' onSubmit={this.handleOnSubmit}>
                <label>สิ่งที่คุณตั้งใจว่าจะทำในวันพรุ่งนี้คือ ...</label>
                <textarea
                    className='textarea-grey no-resize textarea-text-center text-center'
                    placeholder='พิมพ์คำตอบของคุณที่นี่'
                    value={this.state.todoTomorrow}
                    name='todoTomorrow'
                    onChange={this.handleOnChange}
                />
                <label className='text-small-label text-color-orange text-right'></label>
                <button className='mt-1 clear-btn text-right' type='submit'>
                    <img
                        src={process.env.PUBLIC_URL + '/images/icon/iconlogo-13.png'}
                        alt='next'
                        className='next-icon'
                    />
                </button>
            </form>
        );
        const text = (
            <div>
                ก่อนที่คุณจะหลับตา
                <br />
                มีความคิดหนึ่งดังขึ้นในหัวเพื่อเตือนตัวคุณเอง
            </div>
        );
        return (
            <div className='d-flex justify-content-center container prologue-screen bg-4_5 text-24'>
                <div className='d-flex align-self-center'>
                    <FadingClickSingleLine
                        texts={['นาฬิกาบอกเวลาตีหนึ่ง', 'เปลือกตาของคุณเริ่มหนักขึ้นเรื่อย ๆ', text, form]}
                        keysNotText={[4]}
                        continue='/prologue5transition1'
                        specifier='prologue3'
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(Prologue3);
