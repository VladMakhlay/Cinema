/* eslint-disable prefer-const,max-len */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import moment from 'moment';
import './movieDesc.scss';

class MovieDesc extends Component {
    render() {
        let { movies } = this.props.moviesList;
        const { id } = this.props.match.params;
        let chosenMovies = movies.filter(movie => movie.id === Number(id));
        const selectedMovie = chosenMovies.map(movie => (
            <section className="b-info" key={movie.id}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="b-poster--movieDesc">
                                <img className="b-poster__img" src={movie.mg} alt={movie.title} />
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-6 col-xs-12">
                            <div className="b-mainInfo">
                                <h1 className="b-mainInfo__head">{movie.title}</h1>
                                <p><b>director: </b>{movie.director}</p>
                                <p><b>genre: </b>{movie.genre}</p>
                                <p><b>cast: </b>{movie.cast}</p>
                                <div className="b-description">
                                    <div className="b-description__desc">
                                        {movie.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        ));
        const timing = chosenMovies.map((movie) => {
            const today = moment().format();
            const firstDay = moment(movie.show_days[0], 'DD-MM-YYYY');
            if (moment(movie.show_days[0], 'DD-MM-YYYY').isSameOrBefore(today) &&
                moment(movie.show_days[movie.show_days.length - 1], 'DD-MM-YYYY').isSameOrAfter(today)) {
                return movie.show_time.map(unit => (
                    <div className="b-timeTable__timeUnit" key={unit}>
                        {unit}
                    </div>
                ));
            }
            return (
                <div className="b-timeTable__premiere" key={movie.id}>
                    <span>
                        Premiere will be on :
                        <b className="b-timeTable__premiere--date">
                            {firstDay.format('dddd, MMMM Do YYYY')}
                        </b>
                    </span>
                </div>
            );
        });

        return (
            <div className="b-selectedM">
                <div className="b-ticketBook">
                    <div className="b-ticketBook__infoText">
                        For booking a ticket(s), please select a time below
                    </div>
                </div>
                <div className="b-movieDesc">
                    {selectedMovie}
                </div>
                <div className="b-timeTable">
                    {timing}
                </div>
            </div>
        );
    }
}

export default connect(state => ({ moviesList: state.moviesList }))(MovieDesc);
