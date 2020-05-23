import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import anime from 'animejs';

class FadingClickSingleLine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 1,
            continue: '#',
            stopInstructionAnimation: false,
        };
    }

    componentDidMount() {
        anime({
            targets: `#instruction-click`,
            duration: 1000,
            opacity: 0,
            direction: 'alternate',
            loop: true,
            easing: 'easeOutQuad',
            update: (anim) => {
                if (this.state.stopInstructionAnimation && anim.progress === 100) {
                    anim.pause();
                }
            },
        });

        const specifier = this.props.specifier;
        anime({
            targets: `#${specifier}-fixed.${specifier}-fading-text-click`,
            duration: 1500,
            opacity: 1,
            easing: 'linear',
        });
    }

    handleOnClick = async () => {
        if (this.props.musicPlay && this.state.key === this.props.playKey) {
            const musicPlayer = document.getElementById('appMusicPlayer');
            musicPlayer.src = this.props.musicPlay;
            await musicPlayer.load();
            await musicPlayer.play();
            console.log('music is played', musicPlayer.src);
        }

        const key = this.state.key;
        const specifier = this.props.specifier;
        const timeline = anime.timeline();

        if (this.state.key === this.props.texts.length) {
            timeline.add({
                targets: `#${specifier}-fixed.${specifier}-fading-text-click`,
                duration: 500,
                opacity: 0,
                easing: 'linear',
            });
        } else {
            timeline.add({
                targets: `#${specifier}-fixed.${specifier}-fading-text-click`,
                duration: 500,
                opacity: 0,
                easing: 'linear',
                complete: (anim) => {
                    this.setState({ key: key + 1 });
                },
            });
        }

        if (this.state.key === this.props.texts.length) {
            if (this.props.blackOut) {
                let fadeOutVolume = 1;
                if (!this.props.fadeOutWithMusic) {
                    fadeOutVolume = setInterval(() => {
                        const decrement = 1 / 10;
                        const musicPlayer = document.getElementById('appMusicPlayer');
                        console.log((musicPlayer.volume, Math.max(0, musicPlayer.volume - decrement)));
                        musicPlayer.volume = Math.max(0, musicPlayer.volume - decrement);
                    }, Math.floor(this.props.blackOut / 10));
                }
                anime({
                    targets: `#blackOutDiv`,
                    endDelay: this.props.blackOut,
                    duration: this.props.blackOut,
                    background: '#000',
                    direction: 'alternate',
                    easing: 'linear',
                    loop: false,
                    complete: () => {
                        clearInterval(fadeOutVolume);
                        fadeOutVolume = 0;
                        this.props.history.push(this.props.continue);
                    },
                });
            } else this.props.history.push(this.props.continue);
        } else {
            const delayBefore =
                this.props.delayBefore && key + 1 in this.props.delayBefore ? this.props.delayBefore[key + 1] : 0;
            timeline.add({
                targets: `#${specifier}-fixed.${specifier}-fading-text-click`,
                duration: delayBefore,
                opacity: 0,
                easing: 'linear',
            });
            timeline.add({
                targets: `#${specifier}-fixed.${specifier}-fading-text-click`,
                duration: 1000,
                opacity: 1,
                easing: 'linear',
            });
        }
        if (!this.state.stopInstructionAnimation) this.setState({ stopInstructionAnimation: true });
    };

    styleFromPropsHandler = (key) => {
        return this.props.styles && key in this.props.styles ? this.props.styles[key] : {};
    };

    render() {
        const specifier = this.props.specifier;
        const texts = this.props.texts;

        return (
            <div
                className='text-center text-24'
                onClick={
                    this.props.keysNotText && this.props.keysNotText.indexOf(this.state.key) !== -1
                        ? () => {}
                        : this.handleOnClick
                }
            >
                <div
                    className={`${specifier}-fading-text-click opacity-0`}
                    id={`${specifier}-fixed`}
                    style={this.styleFromPropsHandler(this.state.key)}
                >
                    {texts[this.state.key - 1]}
                </div>
                {this.props.withInstuction && <div id='instruction-click'>กดที่กลางหน้าจอเพื่ออ่าน</div>}
                <button
                    onClick={this.handleOnClick}
                    id='skip-button'
                    className='skip-button'
                    style={{
                        display:
                            this.props.keysNotText && this.props.keysNotText.indexOf(this.state.key) !== -1
                                ? 'none'
                                : 'block',
                    }}
                >
                    SKIP
                </button>
            </div>
        );
    }
}

export default withRouter(FadingClickSingleLine);
