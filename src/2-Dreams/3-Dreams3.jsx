import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FadingClickSingleLine from '../Components/FadingClickSingleLine/FadingClickSingleLine';

class Dreams3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marginTop: 0,
        };
    }

    componentDidMount = () => {
        if (this.props.location.search) {
            let marginTop = parseInt(this.props.location.search.split('=')[1]);
            this.setState({ marginTop });
        }
    };

    render() {
        return (
            <div className='d-flex justify-content-center container prologue-screen bg-9'>
                <div className='d-flex ' style={{ marginTop: this.state.marginTop }}>
                    <FadingClickSingleLine
                        texts={[
                            'โอ้ นั่นเป็นคำพูดที่ดีนะ',
                            'เปล่า ฉันไม่ได้หมายถึงสำหรับคนอื่น',
                            'ฉันหมายถึงเป็นคำพูดที่ดีสำหรับตัวคุณเอง',
                        ]}
                        continue='/conclusion'
                        specifier='dreams3'
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(Dreams3);
