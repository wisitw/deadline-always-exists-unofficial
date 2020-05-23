import React, { Component, createRef } from 'react';
import { withRouter } from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';
import anime from 'animejs';

class Epilogue3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stopInstructionAnimation: false,
        };
        this.canvasRef = createRef();
        this.state = {
            canvasWidth: 0,
            canvasHeight: 0,
            preloadFont: 'd-inline',
            shareLink: '',
            shareDisplay: 'd-none',
            loading: true,
            canvasDisplay: 'd-none',
            menuDisplay: false,
            modalDisplay: 'd-none',
        };
        this.flower_to_file = {
            Sunflower: 'sunflower1',
            Lilly: 'lilly1',
            Seed: 'seed1',
            Rose: 'rose1',
            Kluymai: 'kluymai1',
            Carnation: 'carnation1',
            Hydenyear: 'hydenyear1',
            Stattis: 'statis1',
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
        this.closeModalListener = 1;
    }
    componentDidMount = () => {
        anime({
            targets: `#save-your-card`,
            duration: 500,
            opacity: 0.1,
            direction: 'alternate',
            loop: true,
            easing: 'easeOutQuad',
            update: (anim) => {
                if (this.state.stopInstructionAnimation && anim.progress === 0) {
                    anim.pause();
                }
            },
        });
        // this.updateWindowDimensions();
        const resultArray = Object.keys(localStorage).map(function (key) {
            return `${key}: ${localStorage.getItem(key)}`;
        });
        console.log(resultArray);
        fetch('https://deadline-always-exists.krist7599555.ml/append', {
            method: 'POST',
            body: JSON.stringify({ values: resultArray }),
            headers: { 'Content-Type': 'application/json' },
        });
        fetch('/append', {
            method: 'POST',
            body: JSON.stringify({ values: resultArray }),
            headers: { 'Content-Type': 'application/json' },
        });
        // window.addEventListener('resize', this.updateWindowDimensions);
        process.nextTick(() => {
            this.updateCanvas();
            this.setState({ preloadFont: 'd-none' });
            // this.share();
            this.setState({ shareDisplay: 'd-inline d-block' });
        });
    };
    componentWillUnmount = () => {
        window.removeEventListener(this.closeModalListener);
    };

    updateCanvas = () => {
        const ctx = this.canvasRef.current.getContext('2d');
        var imageObj1 = new Image();
        //TODO แก้ตรงนี้
        imageObj1.src = `${process.env.PUBLIC_URL}/images/card/${this.flower}.png`;
        console.log(imageObj1);
        imageObj1.onload = () => {
            const imgWidth = 751;
            const imgHeight = 1051;
            ctx.canvas.width = imgWidth;
            ctx.canvas.height = imgHeight;
            ctx.drawImage(imageObj1, 0, 0, imgWidth, imgHeight);

            const fontPercent = 0.075;
            const topPercent = 0.185;
            ctx.font = `bold ${fontPercent * imgHeight}px PSLxThaiCommon`;
            const textString = localStorage.getItem('name');
            const textWidth = ctx.measureText(textString).width;
            ctx.fillText(textString, imgWidth / 2 - textWidth / 2, topPercent * imgHeight);
            this.setState({ loading: false, canvasDisplay: 'd-block' });
        };
    };

    saveCanvas = () => {
        if (!document.getElementById('image-save')) {
            var d = this.canvasRef.current.toDataURL('image/png');
            var element = document.getElementById('image-holder');
            element.innerHTML += "<img id='image-save' width='100%' src='" + d + "' alt='from canvas'/>";
        }
        if (this.state.modalDisplay === 'd-none') this.setState({ modalDisplay: 'd-block' });
        else this.setState({ modalDisplay: 'd-none' });
    };

    closeModal = () => {
        this.setState({ modalDisplay: 'd-none' });
    };

    // share = async () => {
    //     console.log({
    //         name: localStorage.getItem('name'),
    //         flower: this.flower,
    //     });
    //     const regretNotDoing = localStorage.getItem('regretNotDoing').split(':')[1];
    //     this.flower = this.flower_map[regretNotDoing];
    //     let response = await fetch(`/generateThumbnail`, {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //             name: localStorage.getItem('name'),
    //             flower: this.flower,
    //         }),
    //     });
    //     let resJson = await response.json();
    //     console.log(resJson);
    //     if (resJson) {
    //         const data = resJson.data;
    //         localStorage.setItem('imageLink', data.imageLink);
    //         localStorage.setItem('shareLink', data.shareLink);
    //         this.setState({ shareLink: data.shareLink });
    //     }
    // };

    shareToFB = async () => {
        if (!this.state.shareLink) {
            this.setState({ loading: true });
            const regretNotDoing = localStorage.getItem('regretNotDoing').split(':')[1];
            const flower = this.flower_map[regretNotDoing];
            let response = await fetch(`https://deadline-always-exists.krist7599555.ml/generateThumbnail`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: localStorage.getItem('name'),
                    flower: flower,
                }),
            });
            let resJson = await response.json();
            console.log(resJson);
            if (resJson) {
                const data = resJson.data;
                localStorage.setItem('imageLink', data.imageLink);
                localStorage.setItem('shareLink', data.shareLink);
                this.setState({ shareLink: data.shareLink, loading: false });
                process.nextTick(() => {
                    prompt('กรุณา copy ลิงค์นี้เพื่อแชร์ทางสื่อต่าง ๆ', this.state.shareLink);
                });
            }
        } else {
            prompt('กรุณา copy ลิงค์นี้เพื่อแชร์ทางสื่อต่าง ๆ', this.state.shareLink);
        }
        // window.FB.ui(
        //     {
        //         method: 'share',
        //         href: this.state.shareLink,
        //     },
        //     function (response) {
        //         console.log(response);
        //     }
        // );
    };

    validateEmail(mail) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(mail).toLowerCase());
    }

    saveResult = async () => {
        // let email = prompt(
        //     'โปรดระบุ E-mail ของคุณ เราจะส่งคำตอบของคุณไปให้ หากไม่เจอโปรดลองเช็ค Junk Mail ของคุณ',
        //     'foo@example.com'
        // );
        // if (this.validateEmail(email) && email !== 'foo@example.com') {
        //     let data = {};
        //     for (let [key, value] of Object.entries(localStorage)) {
        //         data[key] = value;
        //     }
        //     let response = await fetch(`/mailer`, {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify({
        //             data: data,
        //             receiver: email,
        //         }),
        //     });
        //     alert('ระบบกำลังส่ง email ไปให้คุณ');
        //     let resJson = await response.json();
        //     console.log(resJson);
        //     if (resJson.response.includes('OK')) {
        //         alert('ลองเช็ค email ของคุณดู หากไม่เจอโปรดลองเช็คใน Junk Mail ดูก่อน');
        //     } else {
        //         alert(`เกิดข้อผิดพลาด ${resJson.response}`);
        //     }
        // } else {
        //     alert('โปรดใส่ email ให้ถูกต้อง');
        // }
    };

    summarizeLocalStorage = () => {
        const result = Object.keys(localStorage).map(function (key) {
            return [key + ' ' + localStorage.getItem(key)];
        });
        return result;
    };

    toggleMenu = () => {
        if (!this.state.stopInstructionAnimation) {
            this.setState({ stopInstructionAnimation: true });
        }
        this.setState({ menuDisplay: !this.state.menuDisplay });
    };

    render() {
        return (
            <div>
                <div
                    className={`modal ${this.state.modalDisplay}`}
                    // tabindex='-1'
                    style={{ zIndex: 20 }}
                    role='dialog'
                    aria-labelledby='exampleModalCenterTitle'
                    aria-hidden='true'
                >
                    <div className='modal-dialog modal-dialog-centered' role='document'>
                        <div className='modal-content' id='exampleModalCenter'>
                            <div className='modal-header'>
                                <h5 className='modal-title text-24' id='exampleModalLongTitle'>
                                    กดรูปค้างไว้เพื่อบันทึก
                                </h5>
                                <button
                                    type='button'
                                    className='close text-24'
                                    onClick={this.closeModal}
                                    aria-label='Close'
                                >
                                    <span aria-hidden='true'>&times;</span>
                                </button>
                            </div>
                            <div className='modal-body'>
                                <div id='image-holder' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-column container prologue-screen bg-card'>
                    <div className='d-flex flex-column  my-auto'>
                        <div
                            style={{ fontFamily: 'PSLxThaiCommon', margin: 'auto' }}
                            className={this.state.preloadFont}
                        >
                            กำลังประมวลผล
                        </div>
                        <BeatLoader css={this.override} size={15} color={'#9B9B9B'} loading={this.state.loading} />

                        <canvas
                            ref={this.canvasRef}
                            style={{ width: '85%', height: '85%' }}
                            className={`m-auto pt-5 ${this.state.canvasDisplay}`}
                        />

                        {this.state.menuDisplay && (
                            <div className={`menu p-3`} style={{ zIndex: 1 }}>
                                <div>
                                    <button className={`clear-btn text-24`} onClick={this.saveCanvas}>
                                        <img
                                            src={process.env.PUBLIC_URL + '/images/icon/iconnnn-22.png'}
                                            alt='Save'
                                            className='menu-icon mr-3'
                                        />
                                        บันทึกรูป
                                    </button>
                                </div>
                                <div>
                                    <button className={`clear-btn text-24`} onClick={this.shareToFB}>
                                        <img
                                            src={process.env.PUBLIC_URL + '/images/icon/iconnnn-23.png'}
                                            alt='Share'
                                            className='menu-icon mr-3'
                                        />
                                        แชร์ของที่ระลึกของคุณบน Facebook
                                    </button>
                                </div>
                                <div className={`clear-btn text-24`}>
                                    {/* <button className={`clear-btn text-24`} onClick={this.saveResult}> */}
                                    <a target='_blank' rel='noopener noreferrer' href='/email'>
                                        <img
                                            src={process.env.PUBLIC_URL + '/images/icon/iconnnn-22.png'}
                                            alt='Save My Answer'
                                            className='menu-icon mr-3'
                                        />
                                        บันทึกคำตอบทั้งหมดของฉัน
                                    </a>
                                    {/* </button> */}
                                </div>
                                <svg width='100vw' height='5' className='my-3 mx-3'>
                                    <rect
                                        width='80vw'
                                        height='5'
                                        style={{ fill: 'rgb(0, 0, 0)', strokeWidth: 3, stroke: 'rgb(0, 0, 0)' }}
                                    />
                                </svg>
                                <div className={`clear-btn text-24`}>
                                    <a
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        href='https://www.facebook.com/Deadline-Always-Exists-103727901353329/?modal=admin_todo_tour'
                                    >
                                        <img
                                            src={process.env.PUBLIC_URL + '/images/icon/iconnnn-25.png'}
                                            alt='Facebook Page'
                                            className='menu-icon mr-3'
                                        />
                                        ไปที่ Facebook ของโครงการ
                                    </a>
                                </div>
                                <div className={`clear-btn text-24`}>
                                    <a
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        href='https://issuu.com/deadlinealwaysexists-books/docs/fbelements-03'
                                    >
                                        <img
                                            src={process.env.PUBLIC_URL + '/images/icon/iconnnn-24.png'}
                                            alt='Other Projects'
                                            className='menu-icon mr-3'
                                        />
                                        ดูชิ้นงานอื่นของโปรเจ็คนี้ต่อ
                                    </a>
                                </div>
                                <svg width='100vw' height='5' className='my-3 mx-3'>
                                    <rect
                                        width='80vw'
                                        height='5'
                                        style={{ fill: 'rgb(0, 0, 0)', strokeWidth: 3, stroke: 'rgb(0, 0, 0)' }}
                                    />
                                </svg>
                                <button className={`clear-btn text-24`} onClick={this.toggleMenu}>
                                    <img
                                        src={process.env.PUBLIC_URL + '/images/icon/iconnnn-27.png'}
                                        alt='close'
                                        className='menu-icon mr-3'
                                    />
                                    Close
                                </button>
                            </div>
                        )}
                        <div
                            id='save-your-card'
                            className='d-flex flex-column justify-content-end float-bottom-right text-24'
                        >
                            <div className=''>
                                <button className={`clear-btn right-0`} onClick={this.toggleMenu}>
                                    <img
                                        src={process.env.PUBLIC_URL + '/images/icon/iconshare-28.png'}
                                        alt='save and share'
                                        className='width-50px'
                                    />
                                </button>
                            </div>
                            <div className=''>กดเพื่อบันทีกรูป</div>
                        </div>
                        <div className='text-24 float-bottom-left'>#DeadlineAlwaysExists</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Epilogue3);
