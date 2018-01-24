/* eslint-disable prefer-const,max-len */

import React, { Component } from 'react';
import moment from 'moment';
import showDays from '../../constants/consts';

class MovieDesc extends Component {
    useProps() {
        return this.props.location.state.movie;
    }

    render() {
        const movie = this.useProps();
        console.log(this.props);
        let days = showDays.filter((entity) => {
            let dayOfShow;
            if (entity.day.isSameOrAfter(moment(movie.start_date, 'DD-MM-YYYY')) &&
                entity.day.isSameOrBefore(moment(movie.end_date, 'DD-MM-YYYY'))) {
                dayOfShow = entity;
            }
            return dayOfShow;
        });
        const showTime = days.map(day => (
            <div className="b-showTime" key={day.id}>
                <div className="b-showTime__day">
                    {day.day.format('ddd, DD')}
                </div>
                <div className="b-showTime__time">
                    <span>{movie.title}</span>
                </div>
            </div>
        ));
        return (
            <div className="b-selectedM">
                <div className="b-ticketBook">
                    <div className="b-ticketBook__infoText">
                        For booking a ticket(s), please select a date below
                    </div>
                </div>
                <div className="b-movieDesc">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                                <section className="b-info">
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

export default MovieDesc;
