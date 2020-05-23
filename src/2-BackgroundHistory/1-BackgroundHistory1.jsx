import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FadingClickSingleLine from '../Components/FadingClickSingleLine/FadingClickSingleLine';

class BackgroundHistory1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            whyStillClingingOn: '',
            marginTop: 0,
        };
    }

    componentDidMount = () => {
        const choicesHeight = document.getElementById('whyStillClingingOnDummy').clientHeight;
        const screenHeight = window.innerHeight;
        let marginTop = 0.55 * screenHeight - choicesHeight;
        console.log(choicesHeight);
        marginTop = marginTop > 0 ? marginTop : 0.5 * screenHeight - choicesHeight / 2;
        this.setState({ marginTop: marginTop });
        try {
            const element = document.getElementById('whyStillClingingOnDummy');
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
        if (this.state.whyStillClingingOn) this.props.history.push('/background-history2');
        else alert('โปรดใส่ข้อมูลให้ครบ');
    };

    render() {
        const formText = (
            <form id='whyStillClingingOn' className='d-flex flex-column' onSubmit={this.handleOnSubmit}>
                <label>ทำไมคุณถึงรู้สึกติดค้างกับเรื่องนี้ซะล่ะ</label>
                <textarea
                    className='textarea-black no-resize textarea-text-center'
                    placeholder='พิมพ์คำตอบของคุณที่นี่'
                    value={this.state.whyStillClingingOn}
                    name='whyStillClingingOn'
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
                <form
                    id='whyStillClingingOnDummy'
                    className='d-flex flex-column text-24'
                    onSubmit={this.handleOnSubmit}
                >
                    <label>ทำไมคุณถึงรู้สึกติดค้างกับเรื่องนี้ซะล่ะ</label>
                    <textarea
                        className='textarea-black'
                        value={this.state.whyStillClingingOn}
                        name='whyStillClingingOn'
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
                <div className='d-flex container justify-content-center prologue-screen bg-9'>
                    <div className='d-flex' style={{ marginTop: this.state.marginTop }}>
                        <FadingClickSingleLine
                            texts={['อ่าา ...', 'ฉันไม่ค่อยเจอคนตอบแบบนี้เท่าไหร่', formText]}
                            continue='/background-history2'
                            specifier='background-history-1'
                            keysNotText={[3]}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(BackgroundHistory1);
