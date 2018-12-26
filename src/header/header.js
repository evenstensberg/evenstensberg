import React, {Component} from 'react';

import './header.scss';

class Header extends Component {
    render() {
        return(
            <nav className="header">
            <a href="/">Home</a>{' '}
            <a href="/portfolio">Portfolio</a>
            <a href="/oss">Open Source</a>
            <a href="/misc">Misc</a>
        </nav>
        )
    }
}


export default Header;