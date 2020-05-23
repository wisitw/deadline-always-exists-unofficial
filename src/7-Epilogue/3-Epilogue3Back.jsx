import React, { Component, createRef } from 'react';
import { withRouter } from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';

class Epilogue3Back extends Component {
    constructor(props) {
        super(props);
        this.canvasRef = createRef();
        this.state = {
            canvasWidth: 0,
            canvasHeight: 0,
            loading: true,
            preloadFont: 'd-inline',
            canvasDisplay: 'd-none',
        };
        this.flower_to_file = {
            Sunflower: 'sunflower',
            Lilly: 'lilly',
            Seed: 'seed',
            Rose: 'rose',
            Kluymai: 'kluymai',
            Carnation: 'carnation',
            Hydenyear: 'hydenyear',
            Stattis: 'statis',
        };
        this.override = `
            display: block;
            margin: auto auto;
            border-color: red;
        `;
        this.flower_map = {
            ideology: 'Sunflower',
            love: 'Rose',
            relationships: 'Hydenyear',
            live: 'Kluymai',
            dreams: 'Carnation',
            nothing: 'Stattis',
            'background-history': 'Lilly',
            'self-understanding': 'Seed',
        };
        // this.flower = this.flower_to_file[localStorage.getItem('flower')];
        const regretNotDoing = localStorage.getItem('regretNotDoing').split(':')[1];
        this.flower = this.flower_to_file[this.flower_map[regretNotDoing]];
    }
    componentDidMount() {
        this.updateCanvas();
        this.setState({ preloadFont: 'd-none' });
    }
    componentWillUnmount() {}
    updateCanvas = () => {
        const ctx = this.canvasRef.current.getContext('2d');
        var imageObj1 = new Image();
        imageObj1.src = `${process.env.PUBLIC_URL}/images/card/${this.flower}.png`;
        imageObj1.onload = () => {
            const imgWidth = 751;
            const imgHeight = 1051;
            ctx.canvas.width = imgWidth;
            ctx.canvas.height = imgHeight;
            ctx.drawImage(imageObj1, 0, 0, imgWidth, imgHeight);
            this.setState({ loading: false, canvasDisplay: 'd-block' });
        };
    };
    handleClick = () => {
        this.props.history.push('/please-share');
    };
    render() {
        return (
            <div className='d-flex flex-column container prologue-screen bg-card' onClick={this.handleClick}>
                <div className='d-flex flex-column my-auto'>
                    <div style={{ fontFamily: 'PSLxThaiCommon' }} className={this.state.preloadFont}>
                        ก
                    </div>
                    <BeatLoader css={this.override} size={15} color={'#9B9B9B'} loading={this.state.loading} />
                    <div className='text-24 text-center'>กดเพื่ออ่าน</div>
                    <canvas
                        ref={this.canvasRef}
                        style={{ width: '85%', height: '85%' }}
                        className={`mx-auto ${this.state.canvasDisplay}`}
                    />
                    <br />
                    <div className='text-24 float-bottom-left'>#DeadlineAlwaysExists</div>
                </div>
            </div>
        );
    }
}

export default withRouter(Epilogue3Back);
