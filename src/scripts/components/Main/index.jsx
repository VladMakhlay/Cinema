import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
} from 'react-router-dom';

import loadMovies from '../../actions/moviesList';
import routes from '../../routes';
import './main.scss';

class Main extends Component {
    componentDidMount() {
        this.props.loadMovies();
    }

    render() {
        return (
            <Router>
                <section className="b-main">
                    <header className="b-header">
                        <nav className="navbar navbar-inverse ">
                            <div className="container-fluid">
                                <div className="navbar-header">
                                    <NavLink
                                        className="navbar-brand navbar-brand"
                                        to="/"
                                        activeClassName="active"
                                    >Cinema
                                    </NavLink>
                                </div>
                                <ul className="nav navbar-nav">
                                    <li>
                                        <NavLink
                                            to="/today"
                                            activeStyle={{
                                                background: 'black',
                                                color: 'aquamarine',
                                            }}
                                        >
                                            Today Playing
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/soon"
                                            activeStyle={{
                                                background: 'black',
                                                color: 'aquamarine',
                                            }}
                                        >Coming Soon
                                        </NavLink>
                                    </li>
                                </ul>
                                <ul className="nav navbar-nav navbar-right">
                                    <li><a href="#"><span className="glyphicon glyphicon-user" /> Sign Up</a></li>
                                    <li><a href="#"><span className="glyphicon glyphicon-log-in" /> Login</a></li>
                                </ul>
                            </div>
                        </nav>
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

export default connect(
    state => ({ moviesList: state.moviesList }),
    { loadMovies },
)(Main);
