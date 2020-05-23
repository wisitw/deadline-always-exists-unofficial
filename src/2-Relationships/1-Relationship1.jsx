import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FadingComponent from '../Components/FadingComponents/FadingComponents';

class Relationship1 extends Component {
    state = {
        missedOne: '',
        marginTop: 0,
    };

    componentDidMount = () => {
        const choicesHeight = document.getElementById('missedOne').clientHeight;
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
        this.props.history.push('/relationship2');
    };

    render() {
        const form = (
            <form className='d-flex flex-column' onSubmit={this.handleOnSubmit}>
                <label>ตอนนี้กำลังคิดถึงใครอยู่</label>
                <textarea
                    className='textarea-black no-resize textarea-text-center text-center'
                    placeholder='พิมพ์คำตอบของคุณที่นี่'
                    value={this.state.missedOne}
                    name='missedOne'
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
                <div id='missedOne' className='d-flex align-self-center' style={{ marginTop: this.state.marginTop }}>
                    <FadingComponent components={[form]} name='missedOne' specifier='relationship1' />
                </div>
            </div>
        );
    }
}

export default withRouter(Relationship1);
