import React, { Component } from 'react';

function createEmail(data) {
    const route_map = {
        relationships: 'ความสัมพันธ์',
        love: 'ความรัก',
        dreams: 'ความฝัน',
        ideology: 'อุดมการณ์',
        'background-history': 'เหตุการณ์ในอดีต',
        'self-understanding': 'ยังไม่รู้จักตัวเอง ไม่มีความฝันเลย',
        live: 'ยังไม่ได้ใช้ชีวิต',
        nothing: 'ไม่มี',
    };

    const regretNotDoingQ = 'เรื่องที่รู้สึกติดค้าง หรือว่าเสียดาย';
    const regretNotDoing = data.regretNotDoing;
    const regretNotDoingA = route_map[regretNotDoing.split(':')[1]];
    const route = regretNotDoing.split(':')[0];

    // const username = data.name;
    const age = data.age;
    const music_map = {
        music1: 'เพลงที่ทำให้คิดถึงฤดูฝน',
        music2: 'เพลงที่ให้ความรู้สึกของทะเล',
        music3: 'เพลงที่ให้ความรู้สึกของภูเขา',
    };

    let questions = [
        { youAreDoing: 'คุณยังนอนไม่หลับ คุณกำลังทำ...' },
        { todoTomorrow: 'สิ่งที่คุณตั้งใจจะทำในวันพรุ่งนี้' },
        { personWhoCries: 'เสียงร้องไห้ของคนที่คุณรักมากที่สุด' },
        { impressionBeforeCommunication: 'ความรู้สึกแรกเมื่อคุณคิดถึงความตาย' },
        { music: 'เพลงที่คุณเลือก' },
        { hadFun: `สนุกกับชีวิต ${age} ปีที่ผ่านมาหรือเปล่า` },
    ];
    let html = `
    <tr>
        <td>${regretNotDoingQ}</td>
        <td>${regretNotDoingA}</td>
    </tr>`;
    if (route === 'relationships') {
        questions = questions.concat([
            { missedOne: 'ตอนนี้คุณกำลังคิดถึงใคร' },
            { messageToMissedOne: 'ถ้าย้อนเวลากลับไปได้ คุณอยากบอกกับเขาว่า' },
        ]);
    } else if (route === 'dreams') {
        questions = questions.concat([
            { thingExpectedToDo: 'สิ่งที่คุณคาดหวังจะเห็น/ได้ทำในอนาคตคืออะไร' },
            {
                messageToPersonWhoDoesWhatYouDream:
                    'ถ้าตอนนี้มีคนคาดหวังจะทำ/ได้เห็นสิ่งนี้เหมือนกับคุณ ในฐานะคนที่จะไม่อยู่ทำแล้ว คุณอยากให้กำลังใจเขาว่า',
            },
        ]);
    } else if (route === 'background-history') {
        questions = questions.concat([
            { whyStillClingingOn: 'ทำไมคุณถึงรู้สึกติดค้างกับเรื่องนี้ซะล่ะ' },
            {
                messageToPastSelf: 'แล้วถ้าย้อนเวลากลับไปได้ อยากบอกกับตัวเองว่าอะไรละ',
            },
        ]);
    } else if (route === 'self-understanding') {
        questions = questions.concat([
            { haveWhatYouWantTodo: 'มีสิ่งที่อยากทำหรือชีวิตที่เธออยากใช้/มีสิ่งที่ทำให้มีความสุข' },
            { whatYouWantTodo: 'สิ่งที่อยากทำหรือชีวิตที่เธออยากใช้/สิ่งที่ทำให้ฉันมีความสุข' },
        ]);
    } else if (route === 'live') {
        questions = questions.concat([
            { whatHaveYouBeenDoing: 'แล้วที่ผ่านมาใช้เวลาไปกับการทำอะไรอยู่ล่ะ' },
            { pityForTime: 'แล้วถ้าวันนี้ต้องตาย เสียดายเวลาที่ผ่านมาหรือเปล่า' },
            { liveFor: 'แล้วถ้าเลือกได้ อยากมีชีวิตต่อเพื่อทำอะไรล่ะ' },
        ]);
    } else if (route === 'nothing') {
        questions = questions.concat([
            { mostLikedMoment: 'เล่าโมเม้นต์ที่ชอบที่สุดในช่วงชีวิตที่ผ่านมาให้ฟังหน่อยสิ' },
            { thankYouself: 'จากชีวิตที่ผ่านมา อยากขอบคุณตัวเองเรื่องอะไรบ้าง' },
        ]);
    }
    questions = questions.concat([{ flower: 'ดอกไม้ที่คุณเลือก' }]);
    for (let i = 0; i < questions.length; i++) {
        let q = questions[i];
        console.log(Object.keys(q)[0]);
        if (Object.keys(q)[0] in data) {
            if (Object.keys(q)[0] === 'music' && data[Object.keys(q)[0]] in music_map) {
                html += `
                    <tr>
                        <td>${Object.values(q)[0]}</td>
                        <td>${music_map[data[Object.keys(q)[0]]]}</td>
                    </tr>`;
            } else {
                html += `
                    <tr>
                        <td>${Object.values(q)[0]}</td>
                        <td>${data[Object.keys(q)[0]]}</td>
                    </tr>`;
            }
        }
    }
    let htmlTemplate = `
            <table style="width: 100%;">
                <tr>
                    <th>คำถาม</th>
                    <th>คำตอบ</th>
                </tr>
                ${html}
            </table>
`;
    return htmlTemplate;
}

class Email extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
        };
        this.data = {};
        for (let [key, value] of Object.entries(localStorage)) {
            this.data[key] = value;
        }
    }
    componentDidMount = () => {
        this.setState({ username: this.data.name });
    };
    print = () => {
        window.print();
    };
    render() {
        return (
            <div>
                <div id='divcontents' style={{ fontSize: '1em' }}>
                    <div>
                        <img
                            className='w-100'
                            src='/images/banner/banner-01.jpg'
                            alt='banner'
                        />
                    </div>
                    <div className='container'>
                        <div className='text-center mb-4'>{`สวัสดี ${this.state.username} ขอบคุณที่สนใจโปรเจ็คของเรา!`}</div>
                        <div className='text-center'>หากอยากรู้เพิ่มเติม</div>
                        <div className='w-100 text-center px-auto'>
                            <a
                                target='_blank'
                                rel='noopener noreferrer'
                                href='https://www.facebook.com/Deadline-Always-Exists-103727901353329/?modal=admin_todo_tour'
                            >
                                <img
                                    src='/images/icon/iconnnn-25.png'
                                    alt='Facebook Page'
                                    className='menu-icon'
                                />
                                ไปที่ Facebook ของโครงการ
                            </a>
                        </div>
                        <div className='w-100'>
                            <a
                                target='_blank'
                                rel='noopener noreferrer'
                                href='https://issuu.com/deadlinealwaysexists-books/docs/fbelements-03'
                            >
                                <img
                                    src='/images/icon/another-project.png'
                                    alt='Other Projects'
                                    className='w-100 py-2'
                                />
                            </a>
                        </div>
                        <br />
                        <div id='results' dangerouslySetInnerHTML={{ __html: createEmail(this.data) }}></div>
                        <div>
                            <button onClick={this.print}>บันทึกผล</button>
                        </div>
                        <div>
                            สำหรับคนที่ใช้ iPhone คุณสามารถ Save เป็น PDF ได้<br></br>ด้วยการ Screenshot > Full Page{' '}
                            <a
                                target='_blank'
                                href='https://www.macrumors.com/how-to/save-a-safari-web-page-a-pdf-ios/'
                                rel='noopener noreferrer'
                            >
                                ดูเพิ่มเติม
                            </a>
                        </div>
                    </div>
                </div>
                <iframe
                    id='ifmcontentstoprint'
                    title='print-result'
                    style={{ height: '0px', width: '0px', position: 'absolute' }}
                ></iframe>
            </div>
        );
    }
}

export default Email;
