import React, { Component } from 'react';
import anime from 'animejs';
import { withRouter } from 'react-router-dom';

class PleaseShare extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.animeJS = 0;
    }

    componentDidMount = () => {
        this.animeJS = anime.timeline();
        this.animeJS.add({
            targets: `.please-share`,
            duration: 1500,
            opacity: 1,
            easing: 'linear',
            complete: () => {},
        });
        this.animeJS.add({
            targets: `.please-share`,
            duration: 6000,
            opacity: 1,
            easing: 'linear',
            complete: () => {},
        });
        this.animeJS.add({
            targets: `.please-share`,
            duration: 1500,
            opacity: 0,
            easing: 'linear',
            complete: () => {
                this.props.history.push('/epilogue3');
            },
        });
    };

    render() {
        return (
            <div className='d-flex justify-content-center container prologue-screen bg-black'>
                <div className='d-flex align-self-center'>
                    <div className='please-share text-24 text-center opacity-0' style={{ color: 'white' }}>
                        เสียงของคุณมีค่ากับเรา
                        <br />
                        ถ้าชอบรบกวนแชร์ต่อเป็นกำลังใจให้พวกเราด้วยนะคะ
                        <br />
                        ขอขอบคุณทุกคน ที่มาร่วมเป็นส่วนหนึ่งในเส้นทางก่อนเดดไลน์ด้วยกัน
                        <br />
                        <br />
                        <a
                            target='_blank'
                            rel='noopener noreferrer'
                            href='https://www.facebook.com/Deadline-Always-Exists-103727901353329/?modal=admin_todo_tour'
                        >
                            #DeadlineAlwaysExists
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(PleaseShare);
