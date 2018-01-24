import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return (
            <section className="b-welcome">
                <div className="b-greeting">
                    <span><b className="gold">Cinema</b> salutes you</span>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <article className="b-about-us">
                                <h2>You are welcome to:</h2>
                                <ul>
                                    <li className="b-about-us__li">Know what movies we are showing, and all the info about them</li>
                                    <li className="b-about-us__li">Book a ticket(s) for today or for the next 7 days</li>
                                    <li className="b-about-us__li">Select special seats for couples and small companies</li>
                                    <li className="b-about-us__li">Know what pictures are coming soon</li>
                                </ul>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Welcome;
