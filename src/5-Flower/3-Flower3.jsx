import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FadingClickSingleLine from '../Components/FadingClickSingleLine/FadingClickSingleLine';

class Flower3 extends Component {
    state = { marginTop: 0 };

    componentDidMount = () => {
        const choicesHeight = document.getElementById('ifCanLiveWhatForDummy').clientHeight;
        const screenHeight = window.innerHeight;
        let marginTop = 0.53 * screenHeight - choicesHeight;
        console.log(choicesHeight);
        marginTop = marginTop > 0 ? marginTop : 0.5 * screenHeight - choicesHeight / 2;
        this.setState({ marginTop: marginTop });
        try {
            const element = document.getElementById('ifCanLiveWhatForDummy');
            element.parentNode.removeChild(element);
        } catch (error) {}
    };

    textByHaveDoneEverything = () => {
        // const haveDoneEverything = localStorage.getItem('haveDoneEverything');
        const regretNotDoing = localStorage.getItem('regretNotDoing').split(':')[1];
        // return haveDoneEverything === 'ใช่'
        return regretNotDoing === 'nothing'
            ? [
                  'ดูเหมือนดอกไม้ดอกนี้จะบานแล้วนะ',
                  <div>
                      แต่เชื่อมั้ย
                      <br />
                      มันยังคงบานได้มากกว่านี้อีก
                  </div>,
                  'ยังอยากให้เธอหมั่นรดน้ำพรวนดินมันต่อไปนะ',
              ]
            : [
                  'ดูเหมือนดอกไม้ดอกนี้จะยังไม่บานนะ',
                  <div>
                      ถ้ายังมีโอกาสล่ะก็
                      <br />
                      ยังอยากเห็นดอกไม้ดอกนี้ผลิบานอยู่นะ
                  </div>,
              ];
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

    render() {
        return (
            <div>
                <form id='ifCanLiveWhatForDummy' className='d-flex flex-column' onSubmit={this.handleOnSubmit}>
                    <label>
                        ถ้าได้มีชีวิตอยู่ต่อ
                        <br />
                        อยากใช้ชีวิตที่เหลือต่อจากนี้เพื่ออะไรล่ะ
                    </label>
                    <textarea className='textarea-black no-resize textarea-text-center' name='ifCanLiveWhatFor' />
                    <button className='mt-1 clear-btn text-right' type='submit'>
                        <img
                            src={process.env.PUBLIC_URL + '/images/icon/iconlogo-12.png'}
                            alt='next'
                            className='next-icon'
                        />
                    </button>
                </form>
                <div className='d-flex flex-column container prologue-screen bg-9'>
                    <div className='d-flex align-self-center' style={{ marginTop: this.state.marginTop }}>
                        <FadingClickSingleLine
                            texts={this.textByHaveDoneEverything()}
                            specifier='flower3'
                            continue='/pre-epilogue'
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Flower3);
