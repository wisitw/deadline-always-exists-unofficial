import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FadingComponents from '../Components/FadingComponents/FadingComponents';

class Flower1 extends Component {
    constructor(props) {
        super(props);
        this.state = { flower: '', choices: [], marginTop: 0 };
        this.intervalHandler = 1;
    }

    componentDidMount = () => {
        // const haveDoneEverything = localStorage.getItem('haveDoneEverything');
        const regretNotDoing = localStorage.getItem('regretNotDoing').split(':')[1];
        const showIfDone = regretNotDoing && regretNotDoing === 'nothing';
        let choices;
        if (showIfDone)
            choices = [
                { text: 'ทานตะวัน', value: 'Sunflower' },
                { text: 'ลิลลี่', value: 'Lilly' },
                { text: 'กุหลาบ', value: 'Rose' },
                { text: 'กล้วยไม้', value: 'Kluymai' },
                { text: 'คาร์เนชั่น', value: 'Carnation' },
                { text: 'ไฮเดรนเยีย', value: 'Hydenyear' },
                { text: 'สแตสติส', value: 'Stattis' },
            ];
        else
            choices = [
                { text: 'ทานตะวัน', value: 'Sunflower' },
                { text: 'ลิลลี่', value: 'Lilly' },
                { text: 'เมล็ด', value: 'Seed' },
                { text: 'กุหลาบ', value: 'Rose' },
                { text: 'กล้วยไม้', value: 'Kluymai' },
                { text: 'คาร์เนชั่น', value: 'Carnation' },
                { text: 'ไฮเดรนเยีย', value: 'Hydenyear' },
            ];
        this.setState({ choices: choices });
        process.nextTick(() => {
            this.intervalHandler = setInterval(() => {
                let choicesHeight = document.getElementById('flower').clientHeight;
                let screenHeight = window.innerHeight;
                let marginTop = 0.35 * screenHeight;
                console.log(screenHeight, choicesHeight);
                marginTop =
                    marginTop + choicesHeight < screenHeight ? marginTop : 0.5 * screenHeight - choicesHeight / 2;
                this.setState({ marginTop: marginTop });
            }, 100);
        });
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
            this.props.history.push(`/flower2`);
        });
    };

    render() {
        return (
            <div className='d-flex flex-column container prologue-screen bg-13'>
                <div id='flower' className='d-flex align-self-center' style={{ marginTop: this.state.marginTop }}>
                    <FadingComponents
                        texts={['ข้างนอกหน้าต่างมีดอกไม้อยู่หนึ่งดอก', 'คุณคิดว่าดอกไม้นั้นคือดอกอะไร']}
                        choices={this.state.choices}
                        handleSelect={this.handleSelect}
                        choiceStyle='-white'
                        name='flower'
                        specifier='flower'
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(Flower1);
