import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import './home.scss';
import avatar from './avatar.jpg'

import github from './github.png';
import medium from './medium.png';
import twitter from './twitter.png';

class Home extends Component {
    render() {
        return(
            <div className="container-mid-align">
            <div className="image-container shape">
            <img src={avatar} className="avatar-image curve-shape"/>
            <div className="outer-circle" />
            <div className="metadata">
                <h3 className="intro">Work in Progress!</h3>
                <a href="https://github.com/evenstensberg" target="_blank" rel="noopener noreferrer" className="hidden-gh"><img src={github} height="60" className="rounded gh" /></a>
                <a href="https://medium.com/@ev1stensberg" target="_blank" rel="noopener noreferrer" className="hidden-med"><img src={medium} height="60" className="rounded med" /></a>
                <a href="https://twitter.com/evenstensberg" target="_blank" rel="noopener noreferrer" className="hidden-tw"><img src={twitter} height="60" className="rounded tw"  /></a>
            </div>
            </div>
            </div>
        )
    }
}

export default Home;