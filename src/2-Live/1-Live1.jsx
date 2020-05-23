import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FadingClickSingleLine from '../Components/FadingClickSingleLine/FadingClickSingleLine';

class Live1 extends Component {
    state = {
        whatHaveYouBeenDoing: '',
        marginTop: 0,
    };

    componentDidMount = () => {
        const choicesHeight = document.getElementById('live2').clientHeight;
        const screenHeight = window.innerHeight;
        let marginTop = 0.53 * screenHeight - choicesHeight;
        marginTop = marginTop > 0 ? marginTop : 0.5 * screenHeight - choicesHeight / 2;
        this.setState({ marginTop: marginTop });
        try {
            const element = document.getElementById('live2');
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
        });
    };

    handleOnSubmit = (event) => {
        event.preventDefault();
        if (this.state.whatHaveYouBeenDoing) this.props.history.push('/live2');
        else alert('โปรดใส่ข้อมูลให้ครบ');
    };

    render() {
        const formText = (
            <form className='d-flex flex-column' onSubmit={this.handleOnSubmit}>
                <label>แล้วที่ผ่านมาใช้เวลาไปกับการทำอะไรอยู่ล่ะ</label>
                <textarea
                    value={this.state.whatHaveYouBeenDoing}
                    className='textarea-black no-resize textarea-text-center text-center'
                    placeholder='พิมพ์คำตอบของคุณที่นี่'
                    name='whatHaveYouBeenDoing'
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
                <form id='live2' className='d-flex flex-column text-24' onSubmit={this.handleOnSubmit}>
                    <label>แล้วที่ผ่านมาทำอะไรอยู่ล่ะ</label>
                    <textarea
                        value={this.state.whatHaveYouBeenDoing}
                        name='whatHaveYouBeenDoing'
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
                <div className='d-flex justify-content-center container prologue-screen bg-9'>
                    <div className='d-flex' style={{ marginTop: this.state.marginTop }}>
                        <FadingClickSingleLine texts={['หืม ...', formText]} specifier='live2' keysNotText={[2]} />
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Live1);
