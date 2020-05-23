import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

function arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));

    bytes.forEach((b) => (binary += String.fromCharCode(b)));

    return window.btoa(binary);
}

class Transition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            baseBackgroundColor: this.props.baseBackgroundColor ? this.props.baseBackgroundColor : 'white',
            total: this.props.total,
            number: this.props.number,
            spf: 250,
            curr: 0,
            frames: [],
        };
        this.timerHandler = 0;
        this.images = [];
        if (this.props.noS) {
            for (let i = 1; i <= this.props.total; i++) {
                const number = this.props.number;
                this.images.push(`${process.env.PUBLIC_URL}/images/transition/${number}/${number}-${i}.png`);
            }
        } else {
            for (let i = 1; i <= this.props.total; i++) {
                const number = this.props.number;
                this.images.push(`${process.env.PUBLIC_URL}/images/transition/${number}/${number}_S-${i}.png`);
            }
        }
        Promise.all(
            this.images.map((img) => {
                return fetch(img, { method: 'GET' }).then((response) => {
                    return response.arrayBuffer().then((buffer) => {
                        const base64Flag = 'data:image/png;base64,';
                        const imageStr = arrayBufferToBase64(buffer);
                        return base64Flag + imageStr;
                    });
                });
            })
        ).then((arr) => {
            this.setState({ images: arr });
            process.nextTick(() => {
                if (this.props.reverse) {
                    let curr = this.state.total;
                    this.timerHandler = setInterval(() => {
                        if (curr === 0) this.props.history.push(this.props.continue);
                        // if (this.state.images) this.setState({ image: this.state.images[curr] });
                        if (this.state.images) {
                            this.setState({ image: this.state.images[curr] });
                        }
                        curr -= 1;
                    }, this.state.spf);
                } else {
                    let curr = 0;
                    let repeat = 1;
                    if (this.props.repeat) {
                        repeat = this.props.repeat;
                    }
                    this.timerHandler = setInterval(() => {
                        if (this.props.changeBackgroundWhen && curr + 1 in this.props.changeBackgroundWhen) {
                            this.setState({ baseBackgroundColor: this.props.changeBackgroundWhen[curr + 1] });
                        }
                        if (curr === this.state.total) {
                            repeat -= 1;
                            if (repeat === 0) {
                                this.props.history.push(this.props.continue);
                            } else {
                                curr = 0;
                            }
                        }
                        if (this.state.images) {
                            this.setState({ image: this.state.images[curr] });
                        }
                        curr += 1;
                    }, this.state.spf);
                }
            });
        });
    }

    componentDidMount = () => {};
    componentWillUnmount = () => {
        if (this.timerHandler) {
            clearTimeout(this.timerHandler);
            this.timerHandler = 0;
        }
    };

    importAll = (r) => {
        return r.keys().map(r);
    };

    render() {
        return (
            <div
                id='placehere'
                style={{
                    backgroundColor: this.state.baseBackgroundColor,
                    backgroundImage: `url(${this.state.image})`,
                    backgroundSize: '100vw 100vh',
                    backgroundRepeat: 'no-repeat',
                }}
                className='fit-screen'
            ></div>
        );
    }
}

export default withRouter(Transition);
