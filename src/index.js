import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { hot } from 'react-hot-loader';


import Home from './home/home';
import Portfolio from './portfolio/portfolio';
import Header from './header/header';
import OSS from './open-source/open-source';
import Misc from './misc/misc';

import './index.scss';

class Routes extends Component {

    render() {
        const isHomeNavy = !!~window.location.pathname.indexOf('home') || window.location.pathname === '/';
    return(
    <Router basename="/">
        <div className="container">
            <div>
                <Header />
                <div className={(isHomeNavy ? "cover-all-navy" : "cover-all")}>
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