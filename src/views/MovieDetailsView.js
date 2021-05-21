import React, { Component } from 'react';
import axios from 'axios';
import requestParams from '../API/Api';

class MovieDetails extends Component {
    state = {
        film: null,
        poster_path: null,
        backdrop_path: null,
        original_title: null,
        popularity: null,
        overview: null,
        genres: [],
    };

    async componentDidMount() {
        const {filmId} = this.props.match.params;
        const response = await axios.get(`${requestParams.MAIN_URL}/movie/${filmId}?api_key=${requestParams.API_KEY}`);
        this.setState({ ...response.data });
        // console.log(response.data);
    }

    render() {
        const imgSrc = `https:themoviedb.org/t/p/w300/${this.state.poster_path}`;
        return (
        <>
                <img src={imgSrc} alt='' />
                <h2>{this.state.original_title}</h2>
                <p>{this.state.popularity}</p>
                <h3>Overview</h3>
                <p>{this.state.overview}</p>
                <h3>Genres</h3>
                <p>{this.state.genres.map((genre) => (
                    <span key={genre.id}>{genre.name}</span>
                ))}</p>
        </>
        );
    }
}

export default MovieDetails;