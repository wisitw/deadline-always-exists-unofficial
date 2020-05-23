import React, { Component } from 'react';
import anime from 'animejs';
import { withRouter } from 'react-router-dom';

class Instruction2 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.animeJS = 0;
    }

    componentDidMount = () => {
        this.animeJS = anime.timeline();
        this.animeJS.add({
            targets: `.hidetoolbar`,
            duration: 500,
            opacity: 1,
            easing: 'linear',
            complete: () => {},
        });
        this.animeJS.add({
            targets: `.hidetoolbar`,
            duration: 6500,
            opacity: 1,
            easing: 'linear',
            complete: () => {},
        });
        this.animeJS.add({
            targets: `.hidetoolbar`,
            duration: 1500,
            opacity: 0,
            easing: 'linear',
            complete: () => {
                this.props.history.push('/instruction2');
            },
        });
    };

    render() {
        return (
            <div className='d-flex  container prologue-screen' style={{ backgroundColor: '#0b0c0b' }}>
                <div className='d-flex flex-column align-self-center'>
                    <div className='text-24' style={{ color: 'white' }}>
                        <div className='d-flex justify-content-center text-center hidetoolbar'>
                            สำหรับคนที่ใช้ iPhone
                            <br /> รบกวนกด Hide Tool Bar
                            <br /> เพื่อเพิ่มอรรถรสในการรับชมด้วยนะคะ
                        </div>
                    </div>
                    <div className='d-flex flex-column'>
                        <img
                            src={process.env.PUBLIC_URL + '/images/hidetoolbar/hidetoolbar.gif'}
                            alt='Hidetool before playing'
                            style={{ width: '95%', height: 'auto', margin: 'auto auto' }}
                            className='hidetoolbar opacity-0'
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Instruction2);
