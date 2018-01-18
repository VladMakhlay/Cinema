/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';
import routes from '../../routes/index';


class Main extends Component {
    render() {
        return (
            <Router>
                <div className="main">
                    <div className="main__header">
                        <nav className="navbar navbar-inverse navbar-fixed-top">
                            <div className="container-fluid container-fluid--cuprum">
                                <div className="navbar-header">
                                    <a className="navbar-brand navbar-brand--gold-36" href="#">Cinema</a>
                                </div>
                                <ul className="nav navbar-nav">
                                    <li><Link to="/">Today Playing</Link></li>
                                    <li><Link to="/soon">Coming Soon</Link></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="main__content">
                        {routes.map(route => <Route key={route.id} {...route} />)}
                    </div>
                </div>
            </Router>
        );
    }
}

export default Main;
