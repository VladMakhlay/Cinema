import React, { Component } from 'react';

import './welcome.scss';
import MoviesList from '../MoviesList';

class Welcome extends Component {
    render() {
        return (
            <section className="b-welcome">
                <div className="b-greeting">
                    <span className="gold">Welcome</span>
                </div>
                <MoviesList />
            </section>
        );
    }
}

export default Welcome;
