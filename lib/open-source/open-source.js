import React, {Component} from 'react';
import ImgCard from './Img-card';
import ImgCard2 from './Img-card-2';
import "./open-source.scss";

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