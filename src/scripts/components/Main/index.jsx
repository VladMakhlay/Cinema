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
import { auth } from '../../../../config/firebase/index';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false,
        };
        this.signOut = this.signOut.bind(this);
    }

    componentDidMount() {
        this.props.loadMovies();
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    isAuthenticated: true,
                });
            }
        });
    }


    signOut() {
        auth.signOut().then(() => {
            this.setState({
                isAuthenticated: false,
            });
        });
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
                                    <li>
                                        <NavLink
                                            to="/signup"
                                            activeStyle={{
                                                background: 'black',
                                                color: 'aquamarine',
                                            }}
                                        ><span className="glyphicon glyphicon-user" />
                                            Sign Up
                                        </NavLink>
                                    </li>
                                    <li>
                                        { this.state.isAuthenticated ?
                                            <NavLink to="/" onClick={this.signOut}>
                                                <span className="glyphicon glyphicon-log-out" />
                                                Logout
                                            </NavLink>
                                            :
                                            <NavLink
                                                to="/login"
                                                activeStyle={{
                                                    background: 'black',
                                                    color: 'aquamarine',
                                                }}
                                            ><span className="glyphicon glyphicon-log-in" />
                                                Login
                                            </NavLink>
                                        }

                                    </li>
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
