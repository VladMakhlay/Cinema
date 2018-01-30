/* eslint-disable prefer-const,max-len */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import showDays from '../../constants';
import './movieDesc.scss';

class MovieDesc extends Component {
    render() {
        let { movies } = this.props.moviesList;
        const { id } = this.props.match.params;
        let chosenMovies = movies.filter(movie => movie.id === Number(id));
        const selectedMovie = chosenMovies.map(movie => (
            <section className="b-info" key={movie.id}>
                <div className="b-poster--movieDesc">
                    <img className="b-poster__img" src={movie.mg} alt={movie.title} />
                </div>
                <div className="b-mainInfo">
                    <h1 className="b-mainInfo__head">{movie.title}</h1>
                    <p><b>director: </b>{movie.director}</p>
                    <p><b>genre: </b>{movie.genre}</p>
                    <p><b>cast: </b>{movie.cast}</p>
                </div>
                <div className="b-description">
                    <div className="b-description__desc">
                        {movie.description}
                    </div>
                </div>
            </section>
        ));
        const showTime = chosenMovies.map((movie) => {
            let days = showDays.filter((entity) => {
                let dayOfShow;
                if (entity.day.isSameOrAfter(moment(movie.start_date, 'DD-MM-YYYY')) &&
                    entity.day.isSameOrBefore(moment(movie.end_date, 'DD-MM-YYYY'))) {
                    dayOfShow = entity;
                }
                return dayOfShow;
            });
            if (days.length) {
                return days.map(day => (
                    <div className="b-showTime" key={day.id}>
                        <div className="b-showTime__day">
                            {day.day.format('ddd, DD')}
                        </div>
                        <div className="b-showTime__time">
                            <span>{movie.title}</span>
                        </div>
                    </div>
                ));
            }
            return (
                <div className="b-notToday" key={movie.id}>
                    <h1>Coming Soon</h1>
                </div>
            );
        });

        return (
            <div className="b-selectedM">
                <div className="b-ticketBook">
                    <div className="b-ticketBook__infoText">
                        For booking a ticket(s), please select a date below
                    </div>
                </div>
                <div className="b-movieDesc">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                                {selectedMovie}
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                <div className="b-timeTable">
                                    {showTime}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state => ({ moviesList: state.moviesList }))(MovieDesc);
