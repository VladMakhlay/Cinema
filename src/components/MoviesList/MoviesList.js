import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';

class MoviesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
        };
        this.loadMovies = this.loadMovies.bind(this);
        // this.fullDescription = this.fullDescription.bind(this);
    }
    componentDidMount() {
        this.loadMovies();
    }

    loadMovies() {
        axios.get('http://demo4787444.mockable.io/posters')
            .then((response) => {
                this.setState({ movies: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const { movies } = this.state;
        const poster = movies.map(movie => (
            <div className="movie" key={movie.id} >
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
                <header className="moviesList__header">
                    <span className="moviesList__today">Today Shown</span>
                    <span className="moviesList__date">{moment().format('D MMMM YYYY')}</span>
                </header>
                <div className="moviesList__body">
                    {poster}
                </div>
            </div>
        );
    }
}

export default MoviesList;
