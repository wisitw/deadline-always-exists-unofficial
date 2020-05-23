import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FadingComponent from '../Components/FadingComponents/FadingComponents';

class Nothing3 extends Component {
    state = {
        thankYouself: '',
        marginTop: 0,
    };

    componentDidMount = () => {
        const choicesHeight = document.getElementById('thankYouself').clientHeight;
        const screenHeight = window.innerHeight;
        let marginTop = 0.55 * screenHeight - choicesHeight;
        marginTop = marginTop > 0 ? marginTop : 0.5 * screenHeight - choicesHeight / 2;
        this.setState({ marginTop: marginTop });
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
        const choicesHeight = document.getElementById('thankYouself').clientHeight;
        if (this.state.thankYouself)
            this.props.history.push(`/nothing4?marginTop=${this.state.marginTop + choicesHeight / 2}`);
        else alert('โปรดใส่ข้อมูลให้ครบ');
    };

    render() {
        const form = (
            <form className='d-flex flex-column' onSubmit={this.handleOnSubmit}>
                <label>
                    จากชีวิตที่ผ่านมา
                    <br />
                    อยากขอบคุณตัวเองเรื่องอะไรบ้าง
                </label>
                <textarea
                    value={this.state.mostLikedMoment}
                    className='textarea-black no-resize textarea-text-center text-center'
                    placeholder='พิมพ์คำตอบของคุณที่นี่'
                    name='thankYouself'
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
            <div className='d-flex flex-column container prologue-screen bg-11-6-1_4'>
                <div id='thankYouself' className='d-flex align-self-center' style={{ marginTop: this.state.marginTop }}>
                    <FadingComponent components={[form]} specifier='nothing3' />
                </div>
            </div>
        );
    }
}

export default withRouter(Nothing3);
