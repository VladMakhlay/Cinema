import React, { Component } from 'react';

import MoviesList from '../MoviesList/index';

class Welcome extends Component {
    render() {
        return (
            <section className="b-welcome">
                <div className="b-greeting">
                    <span className="gold"><b>Welcome</b></span>
                </div>
                <MoviesList />
            </section>
        );
    }
}

export default Welcome;
