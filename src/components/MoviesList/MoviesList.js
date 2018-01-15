import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import loadMovies from '../../actions/moviesList';
// import axios from 'axios';

class MoviesList extends Component {
    // constructor(props) {
    //     super(props);
    // this.state = {
    //     movies: [],
    // };
    // this.loadMovies = this.loadMovies.bind(this);
    // }
    componentDidMount() {
        // this.loadMovies();
        this.props.loadMovies();
    }

    // loadMovies() {
    //     axios.get('http://demo4787444.mockable.io/posters')
    //         .then((response) => {
    //             this.setState({ movies: response.data });
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }

    render() {
        const { movies } = this.props.moviesList;
        const poster = movies.map(movie => (
            <div className="b-movie" key={movie.id} >
                <div className="b-movie__poster">
                    <img src={movie.mg} alt={movie.title} />
                </div>
                <div className="b-movie__title">
                    {movie.title}
                </div>
            </div>
        ));
        return (
            <div className="b-moviesList">
                <header className="b-moviesList__header">
                    <span className="b-moviesList__today">Today Shown</span>
                    <span className="b-moviesList__date">{moment().format('D MMMM YYYY')}</span>
                </header>
                <div className="b-moviesList__body">
                    {poster}
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({ moviesList: state.moviesList }),
    { loadMovies },
)(MoviesList);
