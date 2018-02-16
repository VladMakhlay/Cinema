import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './comingSoon.scss';


class ComingSoon extends Component {
    render() {
        const { movies } = this.props.moviesList;
        const comingSoonMovies = [];
        const today = moment().format();
        Object.keys(movies).filter((key) => {
            const movie = movies[key];
            if (moment(movie.show_days[0], 'DD-MM-YYYY').isAfter(today)) {
                comingSoonMovies.push(movie);
            }
            return comingSoonMovies;
        });
        const poster = comingSoonMovies.map(movie => (
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
            <div className="b-moviesList b-moviesList--comingSoon">
                <header className="b-moviesList__header ">
                    <span className="b-moviesList__soon">Coming Soon</span>
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

export default connect(state => ({ moviesList: state.moviesList }))(ComingSoon);

