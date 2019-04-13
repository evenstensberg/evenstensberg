import React, {Component} from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';


import Home from './home/home';
import About from './about/about';
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
                            {/* <Route
                                exact
                                path="/about"
                                render={props => <About />}
                                /> */}
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