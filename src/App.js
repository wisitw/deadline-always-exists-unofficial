import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import './App.css';

import MusicPlayer from './Components/MusicPlayer/MusicPlayer';

import Instruction from './1-MainStories/0-Instruction';
import Warning from './1-MainStories/1-Warning';
import Preface from './1-MainStories/1-Preface';
import Welcome from './1-MainStories/2-Welcome';
import WelcomeTransition from './1-MainStories/2-WelcomeTransition';
import Instruction2 from './1-MainStories/2-Instruction2';
import Prologue1 from './1-MainStories/3-Prologue1';
import Prologue1Transition from './1-MainStories/3-Prologue1Transition';
import Prologue2 from './1-MainStories/4-Prologue2';
import Prologue2Transition2 from './1-MainStories/4-Prologue2Transition2';
import Prologue3 from './1-MainStories/5-Prologue3';
import Prologue5Transition1 from './1-MainStories/7-prologue5Transition1';
import Prologue5Transition2 from './1-MainStories/7-prologue5Transition2';
import Prologue5 from './1-MainStories/7-Prologue5';
import Prologue6 from './1-MainStories/8-Prologue6';
import Prologue6p2 from './1-MainStories/8-Prologue6p2';
import Prologue6Transition from './1-MainStories/8-Prologue6Transition';
import Prologue7 from './1-MainStories/9-Prologue7';
import Prologue8 from './1-MainStories/10-Prologue8';
import Story1 from './1-MainStories/12-Story1';
import Story2 from './1-MainStories/13-Story2';
import Story3 from './1-MainStories/14-Story3';
import Story4 from './1-MainStories/15-Story4';

import Relationship1 from './2-Relationships/1-Relationship1';
import Relationship2 from './2-Relationships/2-Relationship2';
import Relationship3 from './2-Relationships/3-Relationship3';

import Dreams1 from './2-Dreams/1-Dreams1';
import Dreams2 from './2-Dreams/2-Dreams2';
import Dreams3 from './2-Dreams/3-Dreams3';

import BackgroundHistory1 from './2-BackgroundHistory/1-BackgroundHistory1';
import BackgroundHistory2 from './2-BackgroundHistory/2-BackgroundHistory2';
import BackgroundHistory3 from './2-BackgroundHistory/3-BackgroundHistory3';

import SelUnderstanding1 from './2-SelfUnderstanding/1-SelfUnderstanding1';
import SelfUnderstanding1A from './2-SelfUnderstanding/1-SelfUnderstanding1A';
import SelfUnderstanding2B from './2-SelfUnderstanding/2-SelfUnderstanding2B';
import SelfUnderstanding2B1 from './2-SelfUnderstanding/2-SelfUnderstanding2B1';
import SelfUnderstanding3A from './2-SelfUnderstanding/3-SelfUnderstanding3A';
import SelfUnderstanding3B from './2-SelfUnderstanding/3-SelfUnderstanding3B';

import Live1 from './2-Live/1-Live1';
import Live2 from './2-Live/2-Live2';
import Live3 from './2-Live/3-Live3';
import Live4 from './2-Live/4-Live4';

import Nothing1 from './2-Nothing/1-Nothing1';
import Nothing2A from './2-Nothing/2-Nothing2A';
import Nothing2B from './2-Nothing/2-Nothing2B';
import Nothing3 from './2-Nothing/3-Nothing3';
import Nothing4 from './2-Nothing/4-Nothing4';

import PreEpilogue1 from './6-PreEpilogue/1-PreEpilogue1';
import PreEpilogue2 from './6-PreEpilogue/2-PreEpilogue2';
import PreEpilogue2Transition from './6-PreEpilogue/2-PreEpilogue2Transition';

import Epilogue1 from './7-Epilogue/1-Epilogue1';

import Conclusion from './4-Conclusion/1-Conclusion';

import Flower1 from './5-Flower/1-Flower1';
import Flower2 from './5-Flower/2-Flower2';
import Flower3 from './5-Flower/3-Flower3';
import PrefaceTransition from './1-MainStories/1-PrefaceTransition';
import Prologue2TransitionWork from './1-MainStories/4-Prologue2TransitionWork';
import Prologue2TransitionFoongsan from './1-MainStories/4-Prologue2TransitionFoongsan';
import Prologue2TransitionMiss from './1-MainStories/4-Prologue2TransitionMiss';
import Prologue2TransitionPhone from './1-MainStories/4-Prologue2TransitionPhone';
import Prologue2TransitionRelax from './1-MainStories/4-Prologue2TransitionRelax';
import Prologue7Transition from './1-MainStories/9-Prologue7Transition';
import Story3Transition from './1-MainStories/14-Story3Transition';
import Story2Transition2 from './1-MainStories/13-Story2Transition2';
import Story2Transition1 from './1-MainStories/13-Stroy2Transition1';
import Story2Transition3 from './1-MainStories/13-Story2Transition3';
import Story4Transition from './1-MainStories/15-Story4Transition';
import ConclusionTransition1 from './4-Conclusion/1-ConclusionTransition1';
import ConclusionTransition2 from './4-Conclusion/1-ConclusionTransition2';
import Epilogue2 from './7-Epilogue/2-Epilogue2';
import Epilogue3 from './7-Epilogue/3-Epilogue3';
import Epilogue3Back from './7-Epilogue/3-Epilogue3Back';
import PleaseShare from './7-Epilogue/2-PleaseShare';

import UseMobile from './UseMobile/UseMobile';
// import UsePortrait from './UseMobile/UsePortrait';
import Logo from './1-MainStories/0-Logo';
import Email from './Components/Email/Email';

import GA from './GA'

class App extends Component {
    state = {};
    constructor(props) {
        super(props);
        this.musicPlayer = new MusicPlayer();
    }

    play = () => {
        document.getElementById('appMusicPlayer').play();
    };

    render() {
        return (
            <div id='App'>
                <header id='App-header'>
                    <MediaQuery minDeviceWidth={1224}>
                        <UseMobile />
                    </MediaQuery>
                    {/* <MediaQuery maxDeviceWidth={480} orientation='landscape'>
                        <UsePortrait />
                    </MediaQuery> */}
                    <MediaQuery maxDeviceWidth={600}>
                        <Router>
                            { GA.init() && <GA.RouteTracker /> }

                            <Route exact path='/' component={Logo} />
                            <Route path='/warning' component={Warning} />
                            <Route path='/preface-transition' component={PrefaceTransition} />
                            <Route path='/preface' component={Preface} />
                            <Route path='/welcome-transition' component={WelcomeTransition} />
                            <Route path='/welcome' component={Welcome} />
                            <Route path='/instruction' component={Instruction2} />
                            <Route path='/instruction2' component={Instruction} />
                            <Route path='/prologue1' component={Prologue1} />
                            <Route path='/prologue1-transition' component={Prologue1Transition} />
                            <Route path='/prologue2' component={Prologue2} />
                            <Route path='/prologue2transition2' component={Prologue2Transition2} />
                            <Route path='/prologue2transition-work' component={Prologue2TransitionWork} />
                            <Route path='/prologue2transition-foongsan' component={Prologue2TransitionFoongsan} />
                            <Route path='/prologue2transition-miss' component={Prologue2TransitionMiss} />
                            <Route path='/prologue2transition-phone' component={Prologue2TransitionPhone} />
                            <Route path='/prologue2transition-relax' component={Prologue2TransitionRelax} />
                            <Route path='/prologue3' component={Prologue3} />
                            <Route path='/prologue5' component={Prologue5} />
                            <Route path='/prologue5transition1' component={Prologue5Transition1} />
                            <Route path='/prologue5transition2' component={Prologue5Transition2} />
                            <Route path='/prologue6' component={Prologue6} />
                            <Route path='/prologue6-2' component={Prologue6p2} />
                            <Route path='/prologue6transition' component={Prologue6Transition} />
                            <Route path='/prologue7' component={Prologue7} />
                            <Route path='/prologue7transition' component={Prologue7Transition} />
                            <Route path='/prologue8' component={Prologue8} />
                            <Route path='/story1' component={Story1} />
                            <Route
                                path='/story2'
                                render={(props) => <Story2 {...props} musicPlayer={this.musicPlayer} />}
                            />
                            <Route path='/story2transition1' component={Story2Transition1} />
                            <Route path='/story2transition2' component={Story2Transition2} />
                            <Route path='/story2transition3' component={Story2Transition3} />
                            <Route path='/story3' component={Story3} />
                            <Route path='/story3transition' component={Story3Transition} />
                            <Route path='/story4' component={Story4} />
                            <Route path='/story4transition' component={Story4Transition} />

                            <Route path='/relationships' component={Relationship1} />
                            <Route path='/relationship2' component={Relationship2} />
                            <Route path='/relationship3' component={Relationship3} />

                            <Route path='/dreams' component={Dreams1} />
                            <Route path='/dreams2' component={Dreams2} />
                            <Route path='/dreams3' component={Dreams3} />

                            <Route path='/background-history' component={BackgroundHistory1} />
                            <Route path='/background-history2' component={BackgroundHistory2} />
                            <Route path='/background-history3' component={BackgroundHistory3} />

                            <Route path='/self-understanding' component={SelUnderstanding1} />
                            <Route path='/self-understanding3A1' component={SelfUnderstanding1A} />
                            <Route path='/self-understanding2B' component={SelfUnderstanding2B} />
                            <Route path='/self-understanding3B1' component={SelfUnderstanding2B1} />
                            <Route path='/self-understanding3A' component={SelfUnderstanding3A} />
                            <Route path='/self-understanding3B' component={SelfUnderstanding3B} />

                            <Route path='/live' component={Live1} />
                            <Route path='/live2' component={Live2} />
                            <Route path='/live3' component={Live3} />
                            <Route path='/live4' component={Live4} />

                            <Route path='/nothing' component={Nothing1} />
                            <Route path='/nothing2A' component={Nothing2A} />
                            <Route path='/nothing2B' component={Nothing2B} />
                            <Route path='/nothing3' component={Nothing3} />
                            <Route path='/nothing4' component={Nothing4} />

                            <Route path='/conclusion' component={ConclusionTransition1} />
                            <Route path='/conclusion-transition2' component={ConclusionTransition2} />
                            <Route path='/conclusion1' component={Conclusion} />

                            <Route path='/flower' component={Flower1} />
                            <Route path='/flower2' component={Flower2} />
                            <Route path='/flower3' component={Flower3} />

                            <Route path='/pre-epilogue' component={PreEpilogue1} />
                            <Route path='/pre-epilogue2' component={PreEpilogue2} />
                            <Route path='/pre-epilogue2transition' component={PreEpilogue2Transition} />

                            <Route path='/epilogue' component={Epilogue1} />
                            <Route path='/epilogue2' component={Epilogue2} />
                            <Route path='/epilogue3back' component={Epilogue3Back} />
                            <Route path='/please-share' component={PleaseShare} />
                            <Route path='/epilogue3' component={Epilogue3} />
                            <Route path='/email' component={Email} />
                        </Router>
                    </MediaQuery>
                </header>
                <audio src='/musics/musics/1 (49bpm).mp3' id='appMusicPlayer' loop />
            </div>
        );
    }
}

export default App;
