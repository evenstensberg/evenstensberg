import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import Blog from './blog/blog';

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
                        </Switch>
            </div>
        )
    }
}

export default App;