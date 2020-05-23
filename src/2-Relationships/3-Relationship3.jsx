import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FadingClickSingleLine from '../Components/FadingClickSingleLine/FadingClickSingleLine';

class Relationship3 extends Component {
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
            <div className='d-flex container prologue-screen bg-9'>
                <div
                    id='relationshipLastDialogue'
                    className='d-flex mx-auto'
                    style={{ marginTop: this.state.marginTop }}
                >
                    <FadingClickSingleLine
                        texts={['ถ้ายังมีชีวิต แล้วได้มีโอกาสพูดประโยคนี้เองคงดีนะ']}
                        continue='/conclusion'
                        specifier='relationship3'
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(Relationship3);
