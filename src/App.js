import React from 'react';
import './App.css';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './views/HomePageView';
import MoviesPage from './views/MoviesPageView';
import MovieDetails from './views/MovieDetailsView';


const App = () => (
  <div>
    <ul>
      <li>
        <NavLink exact to="/" className='NavLink' activeClassName='NavLink--active'>Home</NavLink>
      </li>
      <li>
        <NavLink exact to="/movies" className='NavLink' activeClassName='NavLink--active'>Movies</NavLink>
      </li>
    </ul>

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/movies/:filmId" component={MovieDetails}></Route>
      <Route exact path="/movies" component={MoviesPage} />
      <Route component={HomePage}/>
    </Switch>
  </div> 
);

export default App;
