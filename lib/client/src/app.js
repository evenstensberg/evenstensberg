import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Redirect, Link } from 'react-router-dom';


import Home from './home/home';
import Portfolio from './portfolio/portfolio';
import OSS from './open-source/open-source';
import Misc from './misc/misc';
import './index.scss';


class App extends Component {
    render() {
        return(
            <div className="container">
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
        )
    }
}

export default App;