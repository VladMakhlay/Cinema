import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';


class ComingSoon extends Component {
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
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={movie.id}>
                <div className="b-movie" key={movie.id} >
                    <div className="b-poster">
                        <img className="b-poster__img" src={movie.mg} alt={movie.title} />
                    </div>
                    <div className="b-movie__title">
                        {movie.title}
                    </div>
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

