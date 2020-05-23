import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FadingComponent from '../Components/FadingComponents/FadingComponents';

class Relationship1 extends Component {
    state = {
        thingExpectedToDo: '',
        marginTop: 0,
    };

    componentDidMount = () => {
        const choicesHeight = document.getElementById('thingExpectedToDo').clientHeight;
        const screenHeight = window.innerHeight;
        let marginTop = 0.53 * screenHeight - choicesHeight;
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
        if (this.state.thingExpectedToDo) this.props.history.push('/dreams2');
        else alert('โปรดใส่ข้อมูลให้ครบ');
    };

    render() {
        const form = (
            <form className='d-flex flex-column' onSubmit={this.handleOnSubmit}>
                <label>สิ่งที่คุณคาดหวังจะเห็น/ได้ทำในอนาคตคืออะไร</label>
                <textarea
                    value={this.state.thingExpectedToDo}
                    className='textarea-black no-resize textarea-text-center text-center'
                    placeholder='พิมพ์คำตอบของคุณที่นี่'
                    name='thingExpectedToDo'
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
            <div className='d-flex flex-column  container prologue-screen bg-11-2-1_2'>
                <div
                    id='thingExpectedToDo'
                    className='d-flex align-self-center'
                    style={{ marginTop: this.state.marginTop }}
                >
                    <FadingComponent components={[form]} specifier='dreams1' />
                </div>
            </div>
        );
    }
}

export default withRouter(Relationship1);
