import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FadingClickSingleLine from '../Components/FadingClickSingleLine/FadingClickSingleLine';

class PreEpilogue1 extends Component {
    state = { ifCanLiveWhatFor: '', marginTop: 0 };

    componentDidMount = () => {
        const choicesHeight = document.getElementById('ifCanLiveWhatForDummy').clientHeight;
        const screenHeight = window.innerHeight;
        let marginTop = 0.53 * screenHeight - choicesHeight;
        console.log(choicesHeight);
        marginTop = marginTop > 0 ? marginTop : 0.5 * screenHeight - choicesHeight / 2;
        this.setState({ marginTop: marginTop });
        try {
            const element = document.getElementById('ifCanLiveWhatForDummy');
            element.parentNode.removeChild(element);
        } catch (error) {}
    };

    handleOnChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({ [name]: value });
        process.nextTick(() => {
            localStorage.setItem([name], value);
            console.log(this.state);
            if (value.length > 2) {
                this.props.history.push(`/pre-epilogue2?marginTop=${this.state.marginTop}`);
            }
        });
    };
    handleOnSubmit = (event) => {
        event.preventDefault();
        if (localStorage.getItem('ifCanLiveWhatFor'))
            this.props.history.push(`/pre-epilogue2?marginTop=${this.state.marginTop}`);
        else alert('โปรดใส่ข้อมูลให้ครบ');
    };
    render() {
        const formAuto = (
            <form className='d-flex flex-column' onSubmit={this.handleOnSubmit}>
                <label>
                    ถ้าได้มีชีวิตอยู่ต่อ
                    <br />
                    อยากใช้ชีวิตที่เหลือต่อจากนี้เพื่ออะไรล่ะ
                </label>
                <textarea
                    value={this.state.ifCanLiveWhatFor}
                    className='textarea-black no-resize textarea-text-center'
                    placeholder='พิมพ์คำตอบของคุณที่นี่'
                    name='ifCanLiveWhatFor'
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
            <div>
                <form id='ifCanLiveWhatForDummy' className='d-flex flex-column' onSubmit={this.handleOnSubmit}>
                    <label>
                        ถ้าได้มีชีวิตอยู่ต่อ
                        <br />
                        อยากใช้ชีวิตที่เหลือต่อจากนี้เพื่ออะไรล่ะ
                    </label>
                    <textarea
                        value={this.state.ifCanLiveWhatFor}
                        className='textarea-black no-resize textarea-text-center'
                        placeholder='พิมพ์คำตอบของคุณที่นี่'
                        name='ifCanLiveWhatFor'
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
                <div className='d-flex flex-column container prologue-screen bg-9'>
                    <div className='d-flex align-self-center' style={{ marginTop: this.state.marginTop }}>
                        <FadingClickSingleLine
                            texts={['คำถามสุดท้าย', formAuto]}
                            specifier='pre-epilogue1'
                            keysNotText={[2]}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(PreEpilogue1);
