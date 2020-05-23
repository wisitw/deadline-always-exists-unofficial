import React, { Component } from 'react';

import FadingClickSingleLine from '../Components/FadingClickSingleLine/FadingClickSingleLine';

class Conclusion extends Component {
    state = {};

    render() {
        return (
            <div className='d-flex flex-column justify-content-center container prologue-screen bg-11'>
                <div className='d-flex align-self-center'>
                    <FadingClickSingleLine
                        texts={['ลมพัดผ่านผ้าม่านเข้ามาในห้อง']}
                        continue='/flower'
                        specifier='conclusion'
                    />
                </div>
            </div>
        );
    }
}

export default Conclusion;
