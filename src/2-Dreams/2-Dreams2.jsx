import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FadingComponent from '../Components/FadingComponents/FadingComponents';

class Dreams2 extends Component {
    state = {
        messageToPersonWhoDoesWhatYouDream: '',
        marginTop: 0,
    };

    componentDidMount = () => {
        const choicesHeight = document.getElementById('messageToPersonWhoDoesWhatYouDream').clientHeight;
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
        if (this.state.messageToPersonWhoDoesWhatYouDream)
            this.props.history.push(`/dreams3?marginTop=${this.state.marginTop}`);
        else alert('โปรดใส่ข้อมูลให้ครบ');
    };

    render() {
        const form = (
            <form className='d-flex flex-column' onSubmit={this.handleOnSubmit}>
                <label>
                    ถ้าตอนนี้มีคนคาดหวังจะทำ/ได้เห็นสิ่งนี้เหมือนกับคุณ
                    <br />
                    ในฐานะคนที่จะไม่อยู่ทำแล้ว คุณอยากให้กำลังใจเขาว่า
                </label>
                <textarea
                    value={this.state.messageToPersonWhoDoesWhatYouDream}
                    className='textarea-black no-resize textarea-text-center text-center'
                    placeholder='พิมพ์คำตอบของคุณที่นี่'
                    name='messageToPersonWhoDoesWhatYouDream'
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
            <div className='d-flex flex-column container prologue-screen bg-11-2-1_2'>
                <div
                    id='messageToPersonWhoDoesWhatYouDream'
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

export default withRouter(Dreams2);
