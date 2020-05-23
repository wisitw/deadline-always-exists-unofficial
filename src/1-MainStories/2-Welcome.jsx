import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FadingComponents from '../Components/FadingComponents/FadingComponents';

class Welcome extends Component {
    state = {
        name: '',
        age: '',
    };
    componentDidMount = () => {
        window.scrollTo(0, 1);
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
        if (this.state.name && this.state.age) this.props.history.push('/instruction');
        else alert('โปรดใส่ข้อมูลให้ครบ');
    };

    render() {
        const form = (
            <form className='d-flex flex-column' onSubmit={this.handleOnSubmit}>
                <img
                    src={process.env.PUBLIC_URL + '/iconlogo-18.png'}
                    alt='Deadline always exists'
                    className='introduction-logo'
                />
                <div className='font-italic d-flex flex-column text-color-orange'>
                    ยินดีต้องรับสู่แบบจำลองความตาย
                    <br />
                    ที่จะชวนคุณมาย้อนคุยกับตัวเองสั้น ๆ
                </div>
                <label className='text-left'>
                    ชื่อ
                    <br />
                    <div className='text-small-label'>(กรุณากรอกชื่อเป็นภาษาอังกฤษ ห้ามเว้นวรรค หรือใส่สัญลักษณ์)</div>
                </label>
                <input
                    className='textarea-white no-resize textarea-text-center-welcome outline-none'
                    type='text'
                    pattern='[a-zA-Z]*'
                    value={this.state.name}
                    name='name'
                    onChange={this.handleOnChange}
                />
                <label className='text-left'>อายุ</label>
                <input
                    className='textarea-white no-resize textarea-text-center-welcome outline-none'
                    type='number'
                    pattern='[0-9]*'
                    inputMode='numeric'
                    value={this.state.age}
                    name='age'
                    onChange={this.handleOnChange}
                />
                <label className='text-small-label text-color-orange text-right'>
                    <img
                        src={process.env.PUBLIC_URL + '/images/icon/iconlogo-17.png'}
                        alt='sound on'
                        className='small-icon'
                    />{' '}
                    เปิดเสียงเพื่ออรรถรสในการเล่น
                </label>

                <button className='mt-5 clear-btn' type='submit'>
                    <img
                        src={process.env.PUBLIC_URL + '/images/icon/iconlogo-12.png'}
                        alt='next'
                        className='next-icon'
                    />
                </button>
            </form>
        );

        return (
            <div className='d-flex flex-column justify-content-center container prologue-screen bg-1'>
                <div className='d-flex align-self-center'>
                    <FadingComponents components={[form]} specifier='welcome' />
                </div>
            </div>
        );
    }
}

export default withRouter(Welcome);
