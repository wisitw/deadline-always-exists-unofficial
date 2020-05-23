import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FadingComponent from '../Components/FadingComponents/FadingComponents';

class SelfUnderstanding2B extends Component {
    state = {
        haveWhatYouWantTodo: '',
        texts: [],
    };

    handleSelect = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({ [name]: value });
        process.nextTick(() => {
            localStorage.setItem([name], value);
            if (value === 'มี') this.props.history.push('/self-understanding3B1');
            else this.props.history.push('/self-understanding3B');
        });
    };

    render() {
        return (
            <div className='d-flex justify-content-center container prologue-screen bg-smile'>
                <div className='d-flex align-self-center'>
                    <FadingComponent
                        texts={[
                            'งั้นเริ่มจากง่าย ๆ\nมีอะไร หรือใครในชีวิตที่ทำให้เธอมีมีความสุขบ้างมั้ย',
                            'จะเป็นความสุขเล็กน้อยแค่ไหนก็ไหนก็ได้นะ',
                        ]}
                        choices={[
                            { text: 'มี', value: 'มี' },
                            { text: 'ไม่มี', value: 'ไม่มี' },
                        ]}
                        name='haveWhatYouWantTodo'
                        choiceStyle='-white'
                        handleSelect={this.handleSelect}
                        specifier='self-understanding-2B'
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(SelfUnderstanding2B);
