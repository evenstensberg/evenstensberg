import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import Blog from './blog/blog';

import BlogPost from './blog/blogpost';

import './index.scss';

@withRouter
class App extends Component {
    componentDidUpdate() {
        window.location.reload();
    }
    render() {
        return(
            <div className="container">
                <Switch>
                        <Route exact path="/" render={(props) => <Blog />} />
                            <Route
                                exact
                                path="posts/:id"
                                render={props => <BlogPost {...props} />}
                                />
                        </Switch>
            </div>
        )
    }
}

export default App;