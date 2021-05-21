import React, { Component } from 'react';
import requestParams from '../API/Api';
import { Link } from 'react-router-dom';
import axios from 'axios';


class HomePage extends Component {
    state = {
        films: [],
    };

    async componentDidMount() {
        const response = await axios.get(`${requestParams.MAIN_URL}/trending/all/day?api_key=${requestParams.API_KEY}`);
        console.log(response.data.results)
        this.setState({ films: response.data.results })
    }

    render() {
        // console.log(this.props.match.url);
        return (
            <>
                <h2>Trending today</h2>
                <ul>
                    {this.state.films.map((film => (
                        <li key={film.id}>
                            <Link to={`/movies/${film.id}`}>{film.original_title || film.name || film.title}</Link>
                        </li>
                    )))}
                </ul>
            </>
                
        );
    }
}



export default HomePage;