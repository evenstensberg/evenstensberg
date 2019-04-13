import React, {Component} from 'react';
import Thing from './stepper';
import AppBar from './app-bar';

import './ui.scss';

class WebpackUI extends Component {
    render() {
        return(
            <div>   
                <AppBar/>
                <Thing/>
            </div>
        )
    }
}
export default WebpackUI;
