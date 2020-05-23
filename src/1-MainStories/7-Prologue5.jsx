import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FadingClickSingleLine from '../Components/FadingClickSingleLine/FadingClickSingleLine';

class Prologue5 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        let img = new Image();
        img.src = process.env.PUBLIC_URL + '/images/background/6.gif';
        img.onload = () => {};

        this.images = [];
        const number = '8_Cloed';
        for (let i = 1; i <= 10; i++) {
            this.images.push(`${process.env.PUBLIC_URL}/images/transition/${number}/${number}-${i}.png`);
        }
        Promise.all(
            this.images.map((img) => {
                return fetch(img, { method: 'GET' });
            })
        );
    }

    componentDidMount = () => {};

    render() {
        return (
            <div className='d-flex justify-content-center container prologue-screen bg-6'>
                <div className='d-flex align-self-center'>
                    <FadingClickSingleLine
                        texts={['แล้วคุณก็ผล็อยหลับไป']}
                        continue='/prologue5transition2'
                        specifier='prologue5'
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(Prologue5);
