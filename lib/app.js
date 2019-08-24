import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import Blog from './blog/blog';

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
                        </Switch>
            </div>
        )
    }
}

export default App;