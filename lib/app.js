import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import Blog from './blog/blog';
import About from './about/about';

import BlogPost from './blog/blogpost';

import Other from './other/other';

import './index.scss';


class App extends Component {
    render() {
        return(
            <div className="container">
                <Switch>
                        <Route exact path="/" render={(props) => <Blog />} />
                              {/*    <Route
                                exact
                                path="/:id"
                                render={props => <BlogPost {...props} />}
                                /> */}
                                <Route
                                exact
                                path="/about"
                                render={props => <About />}
                                />
                        </Switch>
            </div>
        )
    }
}

export default App;