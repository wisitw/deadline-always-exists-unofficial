import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FadingComponent from '../Components/FadingComponents/FadingComponents';

class Live2 extends Component {
    state = {
        pityForTime: '',
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

    handleSelect = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({ [name]: value });
        process.nextTick(() => {
            localStorage.setItem([name], value);
            console.log(this.state);
        });
        this.props.history.push('/live3');
    };

    render() {
        return (
            <div className='d-flex flex-column justify-content-center container prologue-screen bg-11-5-1'>
                <div className='d-flex align-self-center'>
                    <FadingComponent
                        texts={['แล้วถ้าวันนี้ต้องตาย เสียดายเวลาที่ผ่านมาหรือเปล่า']}
                        choices={[
                            { text: 'เสียดาย', value: 'เสียดาย' },
                            { text: 'ไม่เสียดาย', value: 'ไม่เสียดาย' },
                        ]}
                        handleSelect={this.handleSelect}
                        choiceStyle='-white'
                        name='pityForTime'
                        specifier='live2'
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(Live2);
