import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import loadMovies from '../../actions/moviesList';

class MoviesList extends Component {
    componentDidMount() {
        this.props.loadMovies();
    }

    render() {
        let { movies } = this.props.moviesList;
        const today = moment().format();
        movies = movies.filter((movie) => {
            let res;
            if (moment(movie.start_date, 'DD-MM-YYYY').isSameOrBefore(today) &&
                moment(movie.end_date, 'DD-MM-YYYY').isSameOrAfter(today)) {
                res = movie;
            }
            return res;
        });
        const poster = movies.map(movie => (
            <div className="b-movie" key={movie.id} >
                <div className="b-movie__poster">
                    <img src={movie.mg} alt={movie.title} />
                </div>
                <div className="b-movie__title">
                    {movie.title}
                </div>
            </div>
        ));
        return (
            <div className="b-moviesList">
                <header className="b-moviesList__header">
                    <span className="b-moviesList__today">Today Shown</span>
                    <span className="b-moviesList__date">{moment().format('D MMMM Y')}</span>
                </header>
                <div className="b-moviesList__body">
                    {poster}
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({ moviesList: state.moviesList }),
    { loadMovies },
)(MoviesList);
