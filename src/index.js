import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { hot } from 'react-hot-loader';


import Home from './home/home';
import Portfolio from './portfolio/portfolio';
import OSS from './open-source/open-source';
import Misc from './misc/misc';

import './index.scss';

class Routes extends Component {

    render() {
    return(
    <Router basename="/">
        <div className="container">
            <div>
            <nav className="header">
                <Link to="/">Home</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/oss">Open Source</Link>
                <Link to="/misc">Misc</Link>
            </nav>
                <div id="changeme" className={"cover-all"}>
                    <Switch>
                    <Route exact path="/" render={() => <Redirect to={'/home'} />} />
                        <Route
                            exact
                            path="/home"
                            render={props => <Home />}
                            />
                        <Route
                            exact
                            path="/portfolio"
                            render={props => <Portfolio />}
                            />
                            <Route
                            exact
                            path="/oss"
                            render={props => <OSS />}
                            />
                             <Route
                            exact
                            path="/misc"
                            render={props => <Misc />}
                            />
                    </Switch>
                </div>
            </div>
        </div>
    </Router>
    )
}
}

const mountNode = document.getElementById('root');

const App = hot(module)(Routes);
ReactDOM.render(<App />, mountNode);