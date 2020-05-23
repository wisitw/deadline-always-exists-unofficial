import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FadingComponent from '../Components/FadingComponents/FadingComponents';

class SelfUnderstanding1A extends Component {
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
        if (this.state.whatYouWantTodo) this.props.history.push('/self-understanding3A');
        else alert('โปรดใส่ข้อมูลให้ครบ');
    };

    render() {
        const formText = (
            <form className='d-flex flex-column' onSubmit={this.handleOnSubmit}>
                <label>สิ่งที่อยากทำ หรือชีวิตที่เธออยากใช้คืออะไร</label>
                <textarea
                    className='textarea-black no-resize textarea-text-center text-center'
                    placeholder='พิมพ์คำตอบของคุณที่นี่'
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
            <div className='d-flex justify-content-center container prologue-screen bg-11-4-1_2'>
                <div className='d-flex align-self-center'>
                    <FadingComponent components={[formText]} specifier='self-understanding-1' />
                </div>
            </div>
        );
    }
}

export default withRouter(SelfUnderstanding1A);
