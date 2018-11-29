import React from 'react';
import Menu from './Menu';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';

const App = () => (
  <Router>
    <React.Fragment>
      <div className="app">
        <Menu />
        <hr />
      </div>

      <Route path="/" component={Home} />
    </React.Fragment>
  </Router>
);

export default App;