import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FadingComponent from '../Components/FadingComponents/FadingComponents';

class Nothing1 extends Component {
    state = {
        haveDoneEverything: '',
        marginTop: 0,
    };

    componentDidMount = () => {
        const choicesHeight = document.getElementById('haveDoneEverything').clientHeight;
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
            console.log(this.state);
        });
        this.changePageByAnswer(value);
    };

    changePageByAnswer = (ans) => {
        if (ans === 'ใช่') {
            this.props.history.push('/nothing2A');
        } else {
            this.props.history.push('/nothing2B');
        }
    };

    render() {
        return (
            <div className='d-flex flex-column container prologue-screen bg-9'>
                <div
                    id='haveDoneEverything'
                    className='d-flex align-self-center'
                    style={{ marginTop: this.state.marginTop }}
                >
                    <FadingComponent
                        texts={['น่าสนใจ แสดงว่าได้ทำในสิ่งที่อยากทำหมดแล้วสินะ']}
                        choices={[
                            { text: 'ใช่', value: 'ใช่' },
                            { text: 'ไม่ใช่', value: 'ไม่ใช่' },
                        ]}
                        choiceStyle='-white'
                        handleSelect={this.handleSelect}
                        name='haveDoneEverything'
                        specifier='nothing1'
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(Nothing1);
