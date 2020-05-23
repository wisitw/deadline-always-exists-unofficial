import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FadingClickSingleLine from '../Components/FadingClickSingleLine/FadingClickSingleLine';

class Prologue6 extends Component {
    state = {
        personWhoCries: '',
        formDisplay: '1',
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
        if (this.state.personWhoCries) {
            this.setState({ formDisplay: '0' });
            setTimeout(() => {
                this.props.history.push('/prologue6transition');
            }, 3500);
        } else alert('โปรดใส่ข้อมูลให้ครบ');
    };

    render() {
        const text = (
            <div>
                ระหว่างที่คุณหลับ
                <br />
                คุณฝันถึงเสียงร้องไห้ของใครบางคน
                <br />
                คุ้น ๆ ว่าจะเป็นเสียงร้องไห้ของคนที่คุณรักมากที่สุด
            </div>
        );
        const form = (
            <form
                className='d-flex flex-column prologue6-fading-text'
                onSubmit={this.handleOnSubmit}
                style={{ opacity: this.state.formDisplay }}
            >
                <label>เสียงร้องไห้นั้นเป็นของใคร</label>
                <textarea
                    value={this.state.personWhoCries}
                    className='textarea-grey no-resize textarea-text-center text-center'
                    placeholder='พิมพ์คำตอบของคุณที่นี่'
                    name='personWhoCries'
                    onChange={this.handleOnChange}
                />
                <button className='mt-1 clear-btn text-right' type='submit'>
                    <img
                        src={process.env.PUBLIC_URL + '/images/icon/iconlogo-13.png'}
                        alt='sound on'
                        className='next-icon'
                    />
                </button>
            </form>
        );
        return (
            <div className='d-flex flex-column justify-content-center container prologue-screen bg-7_2'>
                <div className='d-flex align-self-center'>
                    <FadingClickSingleLine
                        texts={[text, form]}
                        keysNotText={[2]}
                        continue='/prologue5'
                        specifier='prologue3'
                    />
                </div>
                <div className='d-flex align-self-center text-24'></div>
            </div>
        );
    }
}

export default withRouter(Prologue6);
