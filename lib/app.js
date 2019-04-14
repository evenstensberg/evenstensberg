import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';


import Home from './home/home';
import About from './about/about';
import OSS from './open-source/open-source';
import Other from './other/other';
import WebpackUI from './ui/ui';

import './index.scss';


class App extends Component {
    render() {
        return(
            <div className="container">
                <Switch>
                        <Route exact path="/" render={(props) => <Home />} />
                            <Route
                                exact
                                path="/about"
                                render={props => <About />}
                                />
                                <Route
                                exact
                                path="/oss"
                                render={props => <OSS />}
                                />
                             {/*     <Route
                                exact
                                path="/other"
                                render={props => <Other />}
                                /> */}
                          {/*        <Route
                                exact
                                path="/ui"
                                render={props => <WebpackUI />}
                                /> */}
                        </Switch>
            </div>
        )
    }
}

export default App;