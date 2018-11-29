import React from 'react';
import Menu from './Menu';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import AboutMe from './AboutMe';
import AboutContact from './AboutContact';
import SubSite from './SubSite';

const App = () => (
  <Router>
    <React.Fragment>
      <div className="app">
        <Menu />
        <hr />
      </div>

      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/about/me" component={AboutMe} />
      <Route path="/about/contact" component={AboutContact} />
      <Route path="/more" component={SubSite} />
    </React.Fragment>
  </Router>
);

export default App;