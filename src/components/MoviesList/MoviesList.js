/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import '../../scss/style.scss';

class MoviesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: ['seven', 2, 'hulk', 4, 5, 'go', 7, 'no retreat no surrender', 1, 4, 'die hard', 5, 'long kiss goodnight'],
        };
    }
    render() {
        const { movies } = this.state;
        const poster = movies.map((movie, index) => (
            <div className="movie" key={index}>
                <div className="movie__poster" />
                <div className="movie__title">
                    {movie}
                </div>
            </div>
        ));
        return (
            <div className="moviesList">
                <div className="moviesList__header">
                    <span className="moviesList__title">Today Shown</span>
                </div>
                <div className="moviesList__body">
                    {poster}
                </div>
            </div>
        );
    }
}

export default MoviesList;
