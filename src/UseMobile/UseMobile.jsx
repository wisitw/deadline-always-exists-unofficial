import React, { Component } from 'react';

class UseMobile extends Component {
    state = {};
    render() {
        return (
            <div className='d-flex justify-content-center fit-screen flex-column'>
                <div className='text-center d-flex flex-column text-24'>
                    <div>
                        <img
                            src={process.env.PUBLIC_URL + '/images/icon/icon-20.png'}
                            alt='Use mobile to continue'
                            className=''
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default UseMobile;
