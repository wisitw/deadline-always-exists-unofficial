import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FadingTextBulk from '../Components/FadingTextBulk/FadingTextBulk';

class Flower2 extends Component {
    constructor(props) {
        super(props);

        //TODO - Logic for setting postcard to clickable picture loaded from dir
        const quote_map = {
            ideology: {
                quote:
                    '"พอคิดว่าต้องตายโดยไม่เห็นสังคมเปลี่ยนอย่างที่หวังก็รู้สึกผิดนิด ๆ สุดท้ายเราก็เป็นผู้ใหญ่ที่เอาความฝัน\nที่ตัวเองทำไม่ได้ไปฝากไว้กับเยาวชนรุ่นต่อไปอีกแล้ว"',
                by: 'พม, Deadline always exists',
            },
            'background-history': {
                quote:
                    '"ที่ผ่านมาผมชอบตัดสินใจเลือกทางเดิน\nที่จะทำให้ผมเสียใจภายหลังเสมอ\nถ้าเลือกได้ก็อยากรักตัวเองบ้าง\nแคร์คนอื่นได้แต่คิดถึงความรู้สึกตัวเองบ้าง"',
                by: 'โลมา, Deadline always exists',
            },
            'self-understanding': {
                quote:
                    '"วันนี้เธออยากทำอะไร สิ่งที่อยากทำจริง ๆ\nไม่ใช่ทำเพื่อความต้องการของคนอื่น หรือต้องทำ ...\nคำถามนี้เราตอบไม่ได้เลยนะ พอนั่งคิดอยู่นานก็พึ่งรู้ว่า\nเสียงในหัวเรามันเบากว่าเสียงคนอื่นเสมอ"',
                by: 'พม, Deadline always exists',
            },
            love: {
                quote:
                    '"เราอยากตายลงแบบที่รู้ว่ามีใครรักเรา\nแล้วเราเองก็เสียดายเหลือเกิน\nที่ต้องแยกจากเขาด้วยความตาย\nจะมีมั้ยนะชีวิตนี้ .. หวังว่าจะมีก็แล้วกัน"',
                by: 'แมค, Deadline always exists',
            },
            live: {
                quote: '"ยังตายไม่ได้หรอก ชีวิตพึ่งเริ่มต้นเท่านั้น"',
                by: 'พี่กวาง, Deadline always exists',
            },
            dreams: {
                quote:
                    '"เราจะไม่ตาย คนที่ทำสิ่งนี้ได้มีแค่เราเท่านั้น\nมันเป็นสิ่งสำคัญที่เราต้องอยู่\nอยู่เพื่อเป็นที่พึ่งของใครซักคน\nอยู่เพื่อตอบคำถามที่เราตั้งไว้ตอนแรกว่าเราจะทำได้มั้ย"',
                by: 'เติร์ด Tilly Birds, Deadline always exists',
            },
            relationships: {
                quote:
                    '"เราอยากตายลงแบบที่รู้ว่ามีใครรักเรา\nแล้วเราเองก็เสียดายเหลือเกิน\nที่ต้องแยกจากเขาด้วยความตาย\nจะมีมั้ยนะชีวิตนี้ .. หวังว่าจะมีก็แล้วกัน"',
                by: 'แมค, Deadline always exists',
            },
            nothing: {
                quote:
                    '"ไม่จำเป็นต้องชอบ แต่ต้องขอบคุณทุก ๆ วันที่ผ่านมา\nทั้งวันที่สุขและวันที่เศร้า\nเพราะมันทำให้เธอเติบโตเป็นคนที่ดีและน่ารักกับคนอื่น\nทำให้เธอเป็นคนเวอร์ชั่นนี้ในปัจจุบัน\nเรียนรู้จากมันและเติบโตจากมัน"',
                by: 'ปอปอ, Deadline always exists',
            },
        };

        // const haveDoneEverything = localStorage.getItem('haveDoneEverything');
        const flower = localStorage.getItem('flower');

        const regretNotDoing = localStorage.getItem('regretNotDoing').split(':')[1];
        // haveDoneEverything === 'ใช่' ? '' : 'Bud_'
        const imageDir = `${process.env.PUBLIC_URL}/images/flower/${
            regretNotDoing === 'nothing' ? '' : 'Bud_'
        }${flower}.gif`;
        this.quote = quote_map[regretNotDoing].quote;
        console.log(this.quote);
        this.by = quote_map[regretNotDoing].by;
        this.state = {
            style: {
                backgroundColor: 'transparent',
                backgroundImage: `url(${imageDir})`,
                backgroundSize: '100vw 100vh',
                backgroundRepeat: 'no-repeat',
            },
            marginTop: 0,
        };
    }

    componentDidMount = () => {
        // const choicesHeight = document.getElementById('quoteDiv').clientHeight;
        const screenHeight = window.innerHeight;
        let marginTop = 0.25 * screenHeight;
        console.log(marginTop);
        // marginTop = marginTop > 0 ? marginTop : 0.5 * screenHeight - choicesHeight / 2;
        this.setState({ marginTop: marginTop });
    };

    handleSelect = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({ [name]: value });
        process.nextTick(() => {
            console.log(this.state);
            localStorage.setItem([name], value);
            this.props.history.push(`/flower2`);
        });
    };

    handleClick = () => {
        this.props.history.push(`/flower3`);
    };

    render() {
        const byDiv = <div className='w-100 text-right mt-2'>{`- ${this.by}`}</div>;
        return (
            <div>
                <img
                    className='overlay fit-screen'
                    style={{ zIndex: 10 }}
                    src={`${process.env.PUBLIC_URL}/images/flower/Bg_Flower-1.png`}
                    alt='overlay'
                    onClick={this.handleClick}
                />
                <div className='d-flex flex-column container prologue-screen' style={this.state.style}>
                    <div
                        id='quoteDiv'
                        className='d-flex align-self-center'
                        style={{ marginTop: this.state.marginTop, zIndex: 11 }}
                    >
                        <FadingTextBulk texts={[`${this.quote}`, byDiv]} specifier='flower2' continue='/flower3' />
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Flower2);
