import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FadingComponent from '../Components/FadingComponents/FadingComponents';

class SelfUnderstanding1 extends Component {
    state = {
        haveWhatYouWantTodo: '',
    };

    handleSelect = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({ [name]: value });
        process.nextTick(() => {
            localStorage.setItem([name], value);
            if (value === 'มี') this.props.history.push('/self-understanding3A1');
            else this.props.history.push('/self-understanding2B');
        });
    };

    render() {
        return (
            <div className='d-flex justify-content-center container prologue-screen bg-11-4-1_2'>
                <div className='d-flex align-self-center'>
                    <FadingComponent
                        texts={[
                            'ถ้าไม่พูดถึงเรื่องเงิน หรือข้อจำกัดในชีวิต',
                            'เธอมีสิ่งที่อยากทำ',
                            'หรือชีวิตแบบที่อยากใช้อยู่มั้ย',
                        ]}
                        choices={[
                            { text: 'มี', value: 'มี' },
                            { text: 'ไม่มี', value: 'ไม่มี' },
                        ]}
                        name='haveWhatYouWantTodo'
                        choiceStyle='-white'
                        handleSelect={this.handleSelect}
                        specifier='self-understanding-1-2'
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(SelfUnderstanding1);
