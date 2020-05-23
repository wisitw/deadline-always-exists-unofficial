import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FadingTextBulk from '../Components/FadingTextBulk/FadingTextBulk';

class Preface extends Component {
    constructor(props) {
        super(props);
        localStorage.clear();
        this.state = {};
    }

    render() {
        const bulkDiv = (
            <div className='introduction-font-style'>
                <img
                    src={process.env.PUBLIC_URL + '/iconlogo-18.png'}
                    alt='Deadline always exists'
                    className='introduction-logo'
                />
                <br />
                <p className='text-color-orange'>
                    ชิ้นงานนี้เป็นส่วนหนึ่งของ Senior Project
                    <br />
                    โครงการออกแบบเรขศิลป์ คณะศิลปกรรมศาสตร์
                    <br />
                    จุฬาลงกรณ์มหาวิทยาลัย
                </p>
                <p className='contrast-font-color'>
                    'Deadline is my inspiration' <br /> เดธไลน์จะทำให้เราลงมือทำอะไรได้ง่ายขึ้นเสมอ <br />
                    ชิ้นงานนี้จึงเกิดขึ้นเพื่อให้พวกเราที่อาศัยอยู่ในสังคมที่วุ่นวาย <br /> ได้มีพื้นที่ในการหยุด
                    แล้วคุยกับตัวเองถึงชีวิตที่ผ่านมา <br /> ผ่านมุมมองของเดธไลน์ที่ใหญ่ที่สุดของชีวิตนั่นก็คือ
                    'ความตาย' <br /> เพื่อคำตอบว่าในชีวิตหนึ่งก่อนต้องตาย อะไรคือสิ่งที่ต้องการจริง ๆ <br />
                </p>
                <p className='contrast-font-color'>
                    ขอบคุณทุกคนที่กดเข้ามา ไม่ว่าบังเอิญหรือตั้งใจ <br /> ตอนนี้ขอให้คุณค่อย ๆ
                    ปล่อยให้เวลาห้านาทีนี้ให้ผ่านไปอย่างช้า ๆ <br /> แล้วคุยกับตัวเองกัน
                </p>
                <p className='contrast-font-color' style={{ lineHeight:1.1 }}>
                    <small>เว็บไซต์นี้ เกิดจากความตั้งใจที่จะสนับสนุนด้านเทคโนโลยีให้กับผู้จัดทำ<br />ได้มีการแจ้งและบอกกล่าวเจ้าของผลงานแล้ว<br />มิได้มีเจตนาละเมิดลิขสิทธิ์หรือแสวงหากำไรจากผลงานดังกล่าว</small>    
                </p>
                <button className='mt-1 clear-btn text-right'>
                    <img
                        src={process.env.PUBLIC_URL + '/images/icon/iconlogo-12.png'}
                        alt='next'
                        className='next-icon'
                    />
                </button>
            </div>
        );
        return (
            <div className='d-flex justify-content-center container prologue-screen bg-1'>
                <div className='d-flex align-self-center'>
                    <FadingTextBulk
                        texts={[bulkDiv]}
                        continue='/welcome'
                        specifier='preface'
                        musicPlay='/musics/musics/1 (49bpm).mp3'
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(Preface);
