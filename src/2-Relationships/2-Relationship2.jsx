import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FadingComponent from '../Components/FadingComponents/FadingComponents';

class Relationship2 extends Component {
    state = {
        messageToMissedOne: '',
        marginTop: 0,
    };

    componentDidMount = () => {
        const choicesHeight = document.getElementById('messageToMissedOne').clientHeight;
        const screenHeight = window.innerHeight;
        let marginTop = 0.5 * screenHeight - choicesHeight;
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
        const choicesHeight = document.getElementById('messageToMissedOne').clientHeight;
        if (this.state.messageToMissedOne)
            this.props.history.push(`/relationship3?marginTop=${this.state.marginTop + choicesHeight / 2}`);
        else alert('โปรดใส่ข้อมูลให้ครบ');
    };

    render() {
        const form = (
            <form className='d-flex flex-column' onSubmit={this.handleOnSubmit}>
                <label>
                    ถ้าย้อนเวลากลับไปได้
                    <br />
                    คุณอยากบอกกับเขาว่า
                </label>
                <textarea
                    className='textarea-black no-resize textarea-text-center text-center'
                    placeholder='พิมพ์คำตอบของคุณที่นี่'
                    value={this.state.messageToMissedOne}
                    name='messageToMissedOne'
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
            <div className='d-flex flex-column container prologue-screen bg-11-1-1'>
                <div
                    id='messageToMissedOne'
                    className='d-flex align-self-center'
                    style={{ marginTop: this.state.marginTop }}
                >
                    <FadingComponent components={[form]} specifier='relationship2' />
                </div>
                <div className='d-flex align-self-center'></div>
            </div>
        );
    }
}

export default withRouter(Relationship2);
