import React, { Component } from 'react';

// import Transition from '../Components/Transition/Transition';

class Prologue5Transition1 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.timeoutHandler = 1;
    }

    componentDidMount = () => {
        let img = new Image();
        img.src = process.env.PUBLIC_URL + '/images/background/6_2.gif';
        img.onload = () => {
            this.timeoutHandler = setTimeout(() => {
                this.props.history.push('/prologue5');
            }, 2000);
        };
    };

    componentWillUnmount = () => {
        clearTimeout(this.timeoutHandler);
        this.timeoutHandler = 0;
    };

    render() {
        return <div className='d-flex justify-content-center container prologue-screen bg-6_2'></div>;
    }
}

export default Prologue5Transition1;
