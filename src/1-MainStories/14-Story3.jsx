import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FadingComponents from '../Components/FadingComponents/FadingComponents';

class Story3 extends Component {
    state = { hadFun: '', marginTop: 0 };

    componentDidMount = () => {
        const choicesHeight = document.getElementById('hadFun').clientHeight;
        const screenHeight = window.innerHeight;
        let marginTop = 0.54 * screenHeight - choicesHeight;
        marginTop = marginTop > 0 ? marginTop : 0.5 * screenHeight - choicesHeight / 2;
        this.setState({ marginTop: marginTop });
    };

    handleSelect = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({ [name]: value });
        process.nextTick(() => {
            console.log(this.state);
            localStorage.setItem([name], value);
            this.props.history.push('/story3transition');
        });
    };

    render() {
        const age = localStorage.getItem('age') ? localStorage.getItem('age') : 'NaN';
        return (
            <div className='d-flex flex-column container prologue-screen bg-9'>
                <div id='hadFun' className='d-flex align-self-center' style={{ marginTop: this.state.marginTop }}>
                    <FadingComponents
                        texts={[`เป็นยังไงบ้างชีวิต ${age} ปีที่ผ่านมา`, 'สนุกกับมันหรือเปล่า']}
                        choices={[
                            { text: 'สนุก', value: 'สนุก' },
                            { text: 'ไม่สนุก', value: 'ไม่สนุก' },
                        ]}
                        handleSelect={this.handleSelect}
                        choiceStyle='-white'
                        name='hadFun'
                        specifier='story3'
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(Story3);
