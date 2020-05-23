import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FadingComponent from '../Components/FadingComponents/FadingComponents';

class SelfUnderstanding2B1 extends Component {
    state = {
        whatYouWantTodo: '',
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
        if (this.state.whatYouWantTodo) this.props.history.push('/self-understanding3B');
        else alert('โปรดใส่ข้อมูลให้ครบ');
    };

    render() {
        const formText = (
            <form className='d-flex flex-column' onSubmit={this.handleOnSubmit}>
                <label>สิ่งที่ทำให้ฉันมีความสุขคือ</label>
                <textarea
                    className='textarea-black no-resize textarea-text-center outline-none'
                    placeholder='พิมพ์คำตอบของคุณที่นี่'
                    // style={{ width: '85vw', lineHeight: 2 }}
                    value={this.state.whatYouWantTodo}
                    name='whatYouWantTodo'
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
            <div className='d-flex justify-content-center container prologue-screen bg-smile'>
                <div className='d-flex align-self-center'>
                    <FadingComponent components={[formText]} specifier='self-understanding-1' />
                </div>
            </div>
        );
    }
}

export default withRouter(SelfUnderstanding2B1);
