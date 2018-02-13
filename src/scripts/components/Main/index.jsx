import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
} from 'react-router-dom';
import firebase from 'firebase';

import loadMovies from '../../actions/moviesList';
import routes from '../../routes';
import './main.scss';
import DB_CONFIG from '../../../../config/firebase/index';

class Main extends Component {
    constructor(props) {
        super(props);
        this.app = firebase.initializeApp(DB_CONFIG);
        this.db = this.app.database().ref().child('takenSeats');
    }
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
