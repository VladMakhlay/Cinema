import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';

import loadMovies from '../../actions/moviesList';
import routes from '../../routes';
import { listItemNames } from '../../constants/index';


class Main extends Component {
    constructor() {
        super();
        this.state = {
            active: '',
        };
    }

    componentDidMount() {
        this.props.loadMovies();
        this.act();
    }

    act(e) {
        this.setState({ active: e });
    }
    render() {
        const list = listItemNames.map(item => (
            <li
                key={item.id}
                className={this.state.active === item.id ? 'active' : ''}
                onClick={this.act.bind(this, item.id)}
            >
                <Link to={item.path}>{item.name}</Link>
            </li>
        ));
        return (
            <Router>
                <section className="b-main">
                    <header className="b-header">
                        <div className="container-fluid">
                            <nav className="navbar navbar-inverse ">
                                <div className="container-fluid">
                                    <div className="navbar-header">
                                        <a className="navbar-brand navbar-brand" href="/">Cinema</a>
                                    </div>
                                    <ul className="nav navbar-nav">
                                        {list}
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

export default connect(
    state => ({ moviesList: state.moviesList }),
    { loadMovies },
)(Main);
