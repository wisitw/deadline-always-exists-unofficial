import React, { Component } from 'react';
import anime from 'animejs';
import { withRouter } from 'react-router-dom';

class Warning extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.animeJS = 0;
    }

    componentDidMount = () => {
        this.animeJS = anime.timeline();
        this.animeJS.add({
            targets: `.warning`,
            duration: 1500,
            opacity: 1,
            easing: 'linear',
            complete: () => {},
        });
        this.animeJS.add({
            targets: `.warning`,
            duration: 4500,
            opacity: 1,
            easing: 'linear',
            complete: () => {},
        });
        this.animeJS.add({
            targets: `.warning`,
            duration: 1500,
            opacity: 0,
            easing: 'linear',
            complete: () => {
                this.props.history.push('/preface-transition');
            },
        });
    };

    render() {
        return (
            <div
                className='d-flex  justify-content-center container prologue-screen'
                style={{ backgroundColor: '#0b0c0b' }}
            >
                <div className='d-flex flex-column align-self-center text-center text-24' style={{ color: 'white' }}>
                    <div className='opacity-0 warning'>
                        เว็ปนี้มีเนื้อหาเกี่ยวกับความตาย
                        <br /> ผู้มีอาการซึมเศร้าหรือภาวะซึมเศร้าควรหลีกเลี่ยง
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Warning);
