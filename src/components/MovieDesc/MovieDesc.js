import React, { Component } from 'react';

class MovieDesc extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="b-movieDesc">
                <article className="b-info">
                    <div className="b-info__img" />
                    <div className="b-info__mainInfo" />
                    <div className="b-info__description" />
                </article>
                <div className="b-timeTable" />
            </div>
        );
    }
}

export default MovieDesc;
