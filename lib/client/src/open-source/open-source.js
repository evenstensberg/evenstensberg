import React, {Component} from 'react';
import ImgCard from './Img-card';
import ImgCard2 from './Img-card-2';
import "./open-source.scss";

/* import webpackLogo from './webpacklogo.png';
import NasaLogo from './nasalogo.png'; */

/* import plugin1 from './plugin1.png';
import plugin2 from './plugin2.png';
import GoogleChrome from './google.jpeg'; */

class OSS extends Component {

    render() {
        return(
            <div className="oss">
                <ImgCard />
                <ImgCard2/>
            </div>
        )
    }
}

export default OSS;