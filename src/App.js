import React from 'react';

import MainMoviePage from './pages/Main'
import TopRated from './pages/TopRated'
import Popular from './pages/Popular'
import Upcoming from './pages/Upcoming'
import MoviePage from './pages/singleMoviePage/MoviePage'
import TopBar from './components/TopBar'
import Footer from './components/Footer'
import { Switch, Route,BrowserRouter as Router } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <div className="app">
      <Router>
        <TopBar className="top-bar" />
        
        <Switch>
          <Route path="/" exact component={MainMoviePage} />
          <Route path="/top-rated" component={TopRated} />
          <Route path="/movie/:id" component={MoviePage} />
          <Route path="/upcoming" component={Upcoming} />
          <Route path="/popular" component={Popular} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
