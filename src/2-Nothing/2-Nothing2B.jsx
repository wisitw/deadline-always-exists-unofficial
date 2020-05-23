import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FadingComponents from '../Components/FadingComponents/FadingComponents';

class Nothing2B extends Component {
    constructor(props) {
        super(props);
        this.state = { regretNotDoing: '', marginTop: 0 };
        this.intervalHandler = 1;
    }

    componentDidMount = () => {
        this.intervalHandler = setInterval(() => {
            const choicesHeight = document.getElementById('regretNotDoing').clientHeight;
            const screenHeight = window.innerHeight;
            let marginTop = 0.83 * screenHeight - choicesHeight;
            marginTop = marginTop > 0 ? marginTop : 0.5 * screenHeight - choicesHeight / 2;
            marginTop = marginTop + choicesHeight < screenHeight ? marginTop : 0.5 * screenHeight - choicesHeight / 2;
            this.setState({ marginTop: marginTop });
        }, 100);
    };

    componentWillUnmount = () => {
        clearInterval(this.intervalHandler);
        this.intervalHandler = 0;
    };

    handleSelect = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({ [name]: value });
        process.nextTick(() => {
            console.log(this.state);
            localStorage.setItem([name], value);
            const continueUrl = localStorage.getItem('regretNotDoing').split(':')[0];
            this.props.history.push(`/${continueUrl}`);
        });
    };

    render() {
        return (
            <div className='d-flex flex-column container prologue-screen bg-11'>
                <div
                    id='regretNotDoing'
                    className='d-flex align-self-center'
                    style={{ marginTop: this.state.marginTop }}
                >
                    <FadingComponents
                        texts={['แล้วยังเหลืออะไรอีกล่ะ']}
                        choices={[
                            { text: 'ความสัมพันธ์กับเพื่อน/ครอบครัว', value: 'relationships:relationships' },
                            { text: 'ความรัก', value: 'relationships:love' },

                            { text: 'ความฝัน', value: 'dreams:dreams' },
                            { text: 'อุดมการณ์', value: 'dreams:ideology' },

                            { text: 'เหตุการณ์ในอดีค', value: 'background-history:background-history' },

                            {
                                text: 'ยังไม่รู้จักตัวเอง ไม่มีความฝันเลย',
                                value: 'self-understanding:self-understanding',
                            },

                            { text: 'ยังไม่ได้ใช้ชีวิต', value: 'live:live' },
                        ]}
                        handleSelect={this.handleSelect}
                        choiceStyle='-white-small'
                        name='regretNotDoing'
                        specifier='nothing2B'
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(Nothing2B);
