import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import FadingComponents from '../Components/FadingComponents/FadingComponents';

class Prologue6p2 extends Component {
    state = {
        personWhoCries: '',
    };

    handleOnChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({ [name]: value });
        process.nextTick(() => {
            localStorage.setItem([name], value);
            console.log(this.state);
        });
    };

    handleOnSubmit = (event) => {
        this.props.history.push('/prologue6transition');
    };

    render() {
        const form = (
            <form className='d-flex flex-column prologue6-fading-text' onSubmit={this.handleOnSubmit}>
                <label>เสียงร้องไห้นั้นเป็นของใคร</label>
                <textarea value={this.state.personWhoCries} name='personWhoCries' onChange={this.handleOnChange} />
                <button className='mt-1 h-100' type='submit'>
                    confirm
                </button>
            </form>
        );
        return (
            <div className='d-flex flex-column justify-content-center container prologue-screen'>
                <div className='d-flex align-self-center bg-7_2'>
                    <FadingComponents components={[form]} specifier='prologue6-2' />
                </div>
            </div>
        );
    }
}

export default withRouter(Prologue6p2);
