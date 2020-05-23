import React, { Component } from 'react';
import anime from 'animejs';
import { withRouter } from 'react-router-dom';

class Logo extends Component {
    constructor(props) {
        super(props);
        localStorage.clear();
        this.state = {};
        this.animeJS = 0;
    }

    componentDidMount = () => {
        this.animeJS = anime.timeline();
        this.animeJS.add({
            targets: `.logo-logo`,
            duration: 2000,
            opacity: 1,
            easing: 'linear',
            complete: () => {},
        });
        this.animeJS.add({
            targets: `.logo-logo`,
            duration: 1500,
            opacity: 1,
            easing: 'linear',
            complete: () => {},
        });
        this.animeJS.add({
            targets: `.logo-logo`,
            duration: 1500,
            opacity: 0,
            easing: 'linear',
            complete: () => {
                this.props.history.push('/warning');
            },
        });
    };

    render() {
        return (
            <div className='d-flex justify-content-center container prologue-screen'>
                <div className='d-flex align-self-center'>
                    <img
                        src={process.env.PUBLIC_URL + '/iconlogo-18.png'}
                        alt='Deadline always exists'
                        className='logo-logo opacity-0'
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(Logo);
