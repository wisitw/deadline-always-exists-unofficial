import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FadingComponent from '../Components/FadingComponents/FadingComponents';

class Live3 extends Component {
    state = {
        liveFor: '',
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
        if (this.state.liveFor) this.props.history.push('/live4');
        else alert('โปรดใส่ข้อมูลให้ครบ');
    };

    render() {
        const form = (
            <form className='d-flex flex-column' onSubmit={this.handleOnSubmit}>
                <label>แล้วถ้าเลือกได้ อยากมีชีวิตต่อเพื่อทำอะไรล่ะ</label>
                <textarea
                    value={this.state.liveFor}
                    className='textarea-black no-resize textarea-text-center'
                    placeholder='พิมพ์คำตอบของคุณที่นี่'
                    name='liveFor'
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
            <div className='d-flex flex-column justify-content-center container prologue-screen bg-11-5-1'>
                <div className='d-flex align-self-center'>
                    <FadingComponent components={[form]} specifier='live3' />
                </div>
            </div>
        );
    }
}

export default withRouter(Live3);
