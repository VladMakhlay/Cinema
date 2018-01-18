import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import loadMovies from '../../actions/moviesList';


class ComingSoon extends Component {
    componentDidMount() {
        this.props.loadMovies();
    }

    render() {
        let { movies } = this.props.moviesList;
        const today = moment().format();
        movies = movies.filter((movie) => {
            let res;
            if (moment(movie.start_date, 'DD-MM-YYYY').isAfter(today)) {
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
            <div className="b-moviesList b-moviesList--comingSoon">
                <header className="b-moviesList__header b-moviesList__header--comingSoon">
                    <span className="b-moviesList__soon">Coming Soon</span>
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
)(ComingSoon);

