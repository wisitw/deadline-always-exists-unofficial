import React, { Component } from 'react';
import anime from 'animejs';
import { withRouter } from 'react-router-dom';

class FadingTextBulk extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 0,
            skipDisplay: 'block',
        };
        this.animeJS = {};
    }

    componentDidMount() {
        this.animeJS = anime.timeline();
        this.animeJS.add({
            targets: `.${this.props.specifier}-fading-text-bulk`,
            duration: 1500,
            opacity: 1,
            easing: 'linear',
            complete: () => {
                this.setState({ skipDisplay: 'none' });
            },
        });
    }

    handleOnClick = () => {
        if (this.props.musicPlay) {
            const musicPlayer = document.getElementById('appMusicPlayer');
            if (musicPlayer.src === this.props.musicPlay && musicPlayer.paused) {
                musicPlayer.play();
            } else if (musicPlayer.src !== this.props.musicPlay && !musicPlayer.paused) {
                musicPlayer.pause();
            }
            if (musicPlayer.src !== this.props.musicPlay) {
                console.log('Different music', musicPlayer.src, this.props.musicPlay);
                musicPlayer.src = this.props.musicPlay;
                musicPlayer.load();
                musicPlayer.play();
            }
        }
        if (this.props.fadeout) {
            anime({
                targets: `.${this.props.specifier}-fading-text-bulk`,
                duration: 1500,
                opacity: 0,
                easing: 'linear',
                complete: () => {
                    this.props.history.push(this.props.continue);
                },
            });
        } else {
            this.props.history.push(this.props.continue);
        }
    };

    showTextFromProps = () => {
        const texts = this.props.texts;
        let k = 0;
        return texts.map((text) => {
            k++;
            return <div key={k}>{text}</div>;
        });
    };

    handleOnSkip = () => {
        this.setState({ skipDisplay: 'none' });
        this.animeJS.seek(this.animeJS.duration);
    };

    render() {
        return (
            <div className='text-center d-flex flex-column text-24'>
                <div className='text-center' onClick={this.handleOnClick}>
                    <div className={`${this.props.specifier}-fading-text-bulk opacity-0`}>
                        {this.showTextFromProps()}
                    </div>
                </div>
                <button onClick={this.handleOnClick} id='skip-button' className='skip-button'>
                    CONTINUE
                </button>
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

export default withRouter(FadingTextBulk);
