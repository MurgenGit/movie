import React from 'react';

import MainMoviePage from './pages/Main'
import TopRated from './pages/TopRated'
import Popular from './pages/Popular'
import Upcoming from './pages/Upcoming'
import TopBar from './components/TopBar'
import { Switch, Route,BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <TopBar />
      
      <Switch>
        <Route path="/" component={MainMoviePage} exact/>
        <Route path="/top-rated" component={TopRated} />
        <Route path="/upcoming" component={Upcoming} />
        <Route path="/popular" component={Popular} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
