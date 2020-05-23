import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FadingComponents from '../Components/FadingComponents/FadingComponents';

class Story1 extends Component {
    state = { impressionBeforeCommunication: '', marginTop: 0 };

    componentDidMount = () => {
        const choicesHeight = document.getElementById('impressionBeforeCommunication').clientHeight;
        const screenHeight = window.innerHeight;
        let marginTop = 0.55 * screenHeight - choicesHeight;
        marginTop = marginTop > 0 ? marginTop : 0.5 * screenHeight - choicesHeight / 2;
        this.setState({ marginTop: marginTop });
    };

    handleSelect = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({ [name]: value });
        process.nextTick(() => {
            localStorage.setItem([name], value);
            this.props.history.push('/story2');
        });
    };

    render() {
        return (
            <div className='d-flex flex-column container prologue-screen bg-9'>
                <div
                    id='impressionBeforeCommunication'
                    className='d-flex align-self-center'
                    style={{ marginTop: this.state.marginTop }}
                >
                    <FadingComponents
                        texts={[
                            'ก่อนเริ่มบทสนทนาครั้งสุดท้าย\nระหว่างคุณกับยมฑูตจะเริ่มขึ้น',
                            'ความรู้สึกแรกของคุณเมื่อคิดถึงความตายคือ',
                        ]}
                        choices={[
                            { text: 'ตกใจ', value: 'ตกใจ' },
                            { text: 'กลัว', value: 'กลัว' },
                            { text: 'เฉย ๆ', value: 'เฉย ๆ' },
                            { text: 'งุนงง', value: 'งุนงง' },
                        ]}
                        handleSelect={this.handleSelect}
                        choiceStyle='-white'
                        name='impressionBeforeCommunication'
                        specifier='story1'
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(Story1);
