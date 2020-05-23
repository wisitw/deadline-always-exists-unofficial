import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FadingComponents from '../Components/FadingComponents/FadingComponents';

class Prologue2 extends Component {
    constructor(props) {
        super(props);
        this.state = { marginTop: 0 };
        this.transition_map = {
            'งาน/การบ้าน': '/prologue2transition-work',
            เล่นโซเชียลมีเดีย: '/prologue2transition-phone',
            ผ่อนคลายจากสิ่งที่เจอมาทั้งวัน: '/prologue2transition-relax',
            คิดถึงใครซักคน: '/prologue2transition-miss',
            กำลังฟุ้งซ่านจนนอนไม่หลับ: '/prologue2transition-foongsan',
        };
    }

    componentDidMount = () => {
        const choicesHeight = document.getElementById('youAreDoing').clientHeight;
        const screenHeight = window.innerHeight;
        let marginTop = 0.63 * screenHeight - choicesHeight;
        marginTop = marginTop > 0 ? marginTop : 0.5 * screenHeight - choicesHeight / 2;
        this.setState({ marginTop: marginTop });
    };

    handleSelect = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value });
        process.nextTick(() => {
            console.log(this.props.router);
            console.log(this.props.history);
            localStorage.setItem(name, value);
            this.props.history.push(this.transition_map[value]);
        });
    };

    render() {
        return (
            <div className='d-flex flex-column container prologue-screen bg-3'>
                <div id='youAreDoing' className='d-flex align-self-center' style={{ marginTop: this.state.marginTop }}>
                    <FadingComponents
                        texts={['อีกสิบห้านาทีจะตีหนึ่ง', 'แต่คุณยังคงนอนไม่หลับ', 'คุณกำลังทำ ...']}
                        choices={[
                            { text: 'งาน/การบ้าน', value: 'งาน/การบ้าน' },
                            { text: 'เล่นโซเชียลมีเดีย', value: 'เล่นโซเชียลมีเดีย' },
                            { text: 'ผ่อนคลายจากสิ่งที่เจอมาทั้งวัน', value: 'ผ่อนคลายจากสิ่งที่เจอมาทั้งวัน' },
                            { text: 'คิดถึงใครซักคน', value: 'คิดถึงใครซักคน' },
                            { text: 'กำลังฟุ้งซ่านจนนอนไม่หลับ', value: 'กำลังฟุ้งซ่านจนนอนไม่หลับ' },
                        ]}
                        choiceStyle='-black'
                        name='youAreDoing'
                        handleSelect={this.handleSelect}
                        specifier='prologue2'
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(Prologue2);
