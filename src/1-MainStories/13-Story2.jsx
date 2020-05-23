import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FadingComponents from '../Components/FadingComponents/FadingComponents';

class Story2 extends Component {
    constructor(props) {
        super(props);
        this.state = { music: '', marginTop: 0 };
    }

    componentDidMount = () => {
        const choicesHeight = document.getElementById('music').clientHeight;
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
            this.props.history.push('/story2transition1');
        });
    };

    render() {
        return (
            <div className='d-flex flex-column container prologue-screen bg-9'>
                <div id='music' className='d-flex align-self-center' style={{ marginTop: this.state.marginTop }}>
                    <FadingComponents
                        texts={['ก่อนที่เราจะเริ่มคุยกัน', 'คุณอยากฟังเพลงแบบไหนในวันสุดท้ายของชีวิตของคุณดี']}
                        choices={[
                            { text: 'เพลงที่ทำให้คิดถึงฤดูฝน', value: 'music1' },
                            { text: 'เพลงที่ให้ความรู้สึกของทะเล', value: 'music2' },
                            { text: 'เพลงที่ให้ความรู้สึกของภูเขา', value: 'music3' },
                        ]}
                        handleSelect={this.handleSelect}
                        choiceStyle='-white'
                        name='music'
                        specifier='story2'
                        musicPlay='/musics/effects/beforePlay.mp4'
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(Story2);
