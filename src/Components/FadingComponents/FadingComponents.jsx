import React, { Component } from 'react';
import anime from 'animejs';
import '../FadingChoice.css';

class FadingComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 0,
            skipDisplay: 'block',
        };
        this.animeJS = anime.timeline();
        this.delay = 500;
        this.duration = 2000;
        this.musics = {
            music1: '/musics/musics/rain.mp3',
            music2: '/musics/musics/wave.mp3',
            music3: '/musics/musics/wind.mp3',
        };
    }

    componentDidMount() {
        this.animeJS.add({
            targets: `.${this.props.specifier}-fading-component`,
            duration: this.duration,
            opacity: 1,
            easing: 'linear',
            delay: anime.stagger(1000),
            complete: () => {
                this.setState({ skipDisplay: 'none' });
            },
        });
    }

    componentWillUnmount = () => {
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = 0;
        }
    };

    handleOnSkip = () => {
        this.setState({ skipDisplay: 'none' });
        this.animeJS.seek(this.animeJS.duration);
    };

    showTextFromProps = () => {
        const texts = this.props.texts;
        let k = 0;
        return (
            texts &&
            texts.map((t) => {
                const text = t;
                k++;
                return <div key={k}>{text}</div>;
            })
        );
    };

    showComponentFromProps = () => {
        const comps = this.props.components;
        let k = 0;
        return (
            comps &&
            comps.map((c) => {
                k++;
                return <div key={k}>{c}</div>;
            })
        );
    };

    handleOnClick = (event) => {
        //Check with iPhone first
        if (this.props.musicPlay) {
            // const music = event.target.value;
            const musicPlayer = document.getElementById('appMusicPlayer');
            if (!musicPlayer.paused) {
                musicPlayer.pause();
            }
            // musicPlayer.src = this.musics[music];
            musicPlayer.src = this.props.musicPlay;
            musicPlayer.load();
            musicPlayer.play();
        }
        this.props.handleSelect(event);
    };

    showChoiceFromProps = () => {
        const choices = this.props.choices;
        let k = 0;
        return (
            choices &&
            choices.map((choice) => {
                const text = choice.text;
                const value = choice.value;
                k++;
                return (
                    <button
                        className={
                            this.props.choiceStyle
                                ? `fading-choice my-1 choice-btn${this.props.choiceStyle}`
                                : `fading-choice my-1 choice-btn`
                        }
                        value={value}
                        onClick={this.handleOnClick}
                        name={this.props.name}
                        key={k}
                    >
                        {text}
                    </button>
                );
            })
        );
    };

    render() {
        return (
            <div className='text-center d-flex flex-column text-24'>
                <div className={`${this.props.specifier}-fading-component opacity-0`}>
                    {this.showComponentFromProps()}
                </div>
                <div className={`${this.props.specifier}-fading-component opacity-0 text-center d-flex flex-column`}>
                    {this.showTextFromProps()}
                </div>
                <div className={`${this.props.specifier}-fading-component opacity-0 text-center d-flex flex-column`}>
                    {this.showChoiceFromProps()}
                </div>
                <button
                    onClick={this.handleOnSkip}
                    id='skip-button'
                    className='skip-button'
                    style={{ display: this.state.skipDisplay }}
                >
                    SKIP
                </button>
            </div>
        );
    }
}

export default FadingComponent;
