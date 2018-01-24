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
                <section className="b-main">
                    <header className="b-header">
                        <div className="container">
                            <nav className="navbar navbar-inverse ">
                                <div className="container-fluid">
                                    <div className="navbar-header">
                                        <Link className="navbar-brand navbar-brand" to="/">Cinema</Link>
                                    </div>
                                    <ul className="nav navbar-nav">
                                        <li><Link to="/today">Today Playing</Link></li>
                                        <li><Link to="/soon">Coming Soon</Link></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </header>
                    <div className="b-content">
                        {routes.map(route => <Route key={route.id} {...route} />)}
                    </div>
                    <div className="b-footer" />
                </section>
            </Router>
        );
    }
}

export default Main;
