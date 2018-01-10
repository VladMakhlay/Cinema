/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import '../../scss/style.scss';
import MoviesList from '../MoviesList/MoviesList';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <div className="main__header">
                    <nav className="navbar navbar-inverse navbar-fixed-top">
                        <div className="container-fluid container-fluid--cuprum">
                            <div className="navbar-header">
                                <a className="navbar-brand navbar-brand--gold-36" href="#">Cinema</a>
                            </div>
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#">Today Playing</a></li>
                                <li><a href="#">All the Pictures</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="main__content">
                    <MoviesList />
                </div>
            </div>
        );
    }
}

export default Main;
