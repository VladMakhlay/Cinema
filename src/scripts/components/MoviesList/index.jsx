/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './moviesList.scss';
// import APP from '../../../../config/firebase';

class MoviesList extends Component {
    render() {
        const { movies } = this.props.moviesList;
        const todayMovies = [];
        const today = moment().format();
        Object.keys(movies).filter((key) => {
            const movie = movies[key];
            if (moment(movie.show_days[Object.keys(movie.show_days)[0]], 'DD-MM-YYYY').isSameOrBefore(today) &&
                moment(movie.show_days[movie.show_days.length - 1], 'DD-MM-YYYY').isSameOrAfter(today)) {
                todayMovies.push(movie);
            }
            return todayMovies;
        });

        // movies = movies.filter((movie) => {
        //     let res;
        //     if (moment(movie.show_days[0], 'DD-MM-YYYY').isSameOrBefore(today) &&
        //         moment(movie.show_days[movie.show_days.length - 1], 'DD-MM-YYYY')
        // .isSameOrAfter(today)) {
        //         res = movie;
        //     }
        //     return res;
        // });
        const poster = todayMovies.map(movie => (
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={movie.id}>
                <div className="b-movie" key={movie.id} >
                    <Link to={{
                        pathname: `/movie/${movie.id}`,
                    }}
                    >
                        <div className="b-poster">
                            <img className="b-poster__img" src={movie.mg} alt={movie.zone} />
                        </div>
                        <div className="b-movie__title">
                            {movie.zone}
                        </div>
                    </Link>
                </div>
            </div>
        ));
        return (
            <div className="b-moviesList">
                <div className="container">
                    <header className="b-moviesList__header">
                        <span className="b-moviesList__today">Today Shown</span>
                        <span className="b-moviesList__date">{moment().format('D MMMM Y')}</span>
                    </header>
                    <div className="row">
                        {poster}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state => ({ moviesList: state.moviesList }))(MoviesList);
