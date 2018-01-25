/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class MoviesList extends Component {
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
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={movie.id}>
                <div className="b-movie" key={movie.id} >
                    <Link to={{
                        pathname: `/movie/${movie.id}`,
                    }}
                    >
                        <div className="b-poster">
                            <img className="b-poster__img" src={movie.mg} alt={movie.title} />
                        </div>
                        <div className="b-movie__title">
                            {movie.title}
                        </div>
                    </Link>
                </div>
            </div>
        ));
        return (
            <div className="b-moviesList">
                <header className="b-moviesList__header">
                    <span className="b-moviesList__today">Today Shown</span>
                    <span className="b-moviesList__date">{moment().format('D MMMM Y')}</span>
                </header>
                <div className="container">
                    <div className="row">
                        {poster}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state => ({ moviesList: state.moviesList }))(MoviesList);
