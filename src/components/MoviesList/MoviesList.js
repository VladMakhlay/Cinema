/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import axios from 'axios';

class MoviesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
        };
        this.loadMovies = this.loadMovies.bind(this);
    }
    componentDidMount() {
        this.loadMovies();
    }

    loadMovies() {
        axios.get('http://demo4787444.mockable.io/')
            .then((response) => {
                this.setState({ movies: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        console.log(this.state.movies);

        const { movies } = this.state;
        const poster = movies.map(movie => (
            <div className="movie" key={movie.id}>
                <div className="movie__poster">
                    <img src={movie.mg} alt={movie.title} />
                </div>
                <div className="movie__title">
                    {movie.title}
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
