import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FadingClickSingleLine from '../Components/FadingClickSingleLine/FadingClickSingleLine';

class BackgroundHistory3 extends Component {
    state = {
        messageToPastSelf: '',
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

    handleOnSubmit = (event) => {
        this.props.history.push('/conclusion');
    };

    render() {
        const areYouTired = (
            <div>
                เหนื่อยหรือเปล่า
                <br />
                การอยู่ต่อโดยแบกเรื่องข้างหลังไว้ตลอด
            </div>
        );

        return (
            <div className='d-flex justify-content-center container prologue-screen bg-9'>
                <div className='d-flex align-self-center'>
                    <FadingClickSingleLine
                        texts={[
                            areYouTired,
                            'อ่าา...',
                            'ไม่ได้จะบอกให้ลืมนะ',
                            'แต่ถ้าเหนื่อยมากก็อย่าลืมพักบ้างแล้วกัน',
                        ]}
                        continue='/conclusion'
                        specifier='background-history-3'
                        keysNotText={[]}
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(BackgroundHistory3);
