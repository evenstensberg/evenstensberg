import React, {Component} from 'react';

import "./open-source.scss";

import webpackLogo from './webpacklogo.png';
import NasaLogo from './nasalogo.png';

import plugin1 from './plugin1.png';
import plugin2 from './plugin2.png';
import GoogleChrome from './google.jpeg';

class OSS extends Component {

    render() {
        return(
            <div className="oss">
                <div className="oss-container">
                    <h2>webpack</h2>
                    <img className="logo-img" src={webpackLogo} height="40"/>
                    <p>I've been helping webpack out for a while and work is mostly related to the CLI of webpack. The Command Line Interface has been reworked and we have created an ecosystem for the CLI itself such that automation is easier, performance is easier integrated and webpack itself is easier to use.</p>
                </div>
                <div className="oss-container">
                    <h2>NASA</h2>
                    <img className="logo-img" src={NasaLogo} height="40"/>
                    <p>I've helped NASA with their Mission Control System. At the time I have created two plugins and done various of work with the project itself. Currently I am working on a Telemetry Implementation to view Rocket Trajectories visually based on telemetry data.</p>
                    <img src={plugin1} />
                    <img src={plugin2} />
                </div>
                <div className="oss-container">
                    <h2>Google Chrome</h2>
                    <img className="logo-img" src={GoogleChrome} height="40"/>
                    <p>Some of the work I've been helping Google Chrome with is related to the Open Source Library "Lighthouse". It measures and audits the performance of a given website.</p>
                </div>
            </div>
        )
    }
}

export default OSS;