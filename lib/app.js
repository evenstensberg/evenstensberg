import React, {Component, lazy, Suspense} from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import './index.scss';

const Blog = lazy(() => import('./blog/blog'));
const Fitness = lazy(() => import('./fitness/fitness'));

@withRouter
class App extends Component {
    render() {
        return(
            <div className="container">
                <Suspense fallback={<span>loading...</span>}>
                <Switch>
                        <Route exact path="/" render={(props) => <Blog />} />
                        <Route exact path="/fitness" render={(props) => <Fitness />} />
                        </Switch>
                        </Suspense>
            </div>
        )
    }
}

export default App;