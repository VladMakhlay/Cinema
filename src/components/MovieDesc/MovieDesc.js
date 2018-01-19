import React, { Component } from 'react';

class MovieDesc extends Component {
    useProps() {
        return this.props.location.state.movie;
    }
    render() {
        const movie = this.useProps();
        console.log(movie);
        return (
            <div className="b-movieDesc">
                <article className="b-info">
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
                </article>
                <div className="b-timeTable" />
            </div>
        );
    }
}

export default MovieDesc;
