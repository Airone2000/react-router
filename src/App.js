import React from 'react';
import Menu from './Menu';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Home from './Home';
import About from './About';
import AboutMe from './AboutMe';
import AboutContact from './AboutContact';
import SubSite from './SubSite';
import Backend from './Backend';
import Login from './Login';
import Logout from './Logout';


class App extends React.Component
{
  state = {
    connected: false
  };

  constructor(props) {
    super(props);

    this.signin = this.signin.bind(this);
    this.logout = this.logout.bind(this);
  }

  signin() {
    this.setState({
      connected: true
    });
  }

  logout() {
    this.setState({
      connected: false
    });
  }

  render() {
    
    return (
      <Router>
        <React.Fragment>
          <div className="app">
            <Logout onLogout={this.logout} connected={this.state.connected} />
            <Menu />
            <hr />
            <Route path="/" exact={true} component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/about/me" component={AboutMe} />
            <Route path="/about/contact" component={AboutContact} />
            <Route path="/more" render={(props) => <SubSite {...props} />} />
            <Route path="/login" render={(props) => {
              if(this.state.connected) {
                const redirectTo = props.location.state || {
                  pathname: '/'
                };
                return <Redirect to={redirectTo} />
              }
              else {
                return <Login {...props} onConnected={this.signin} />
              }
            }} />
            <Route path="/backend" render={(props) => {
              if(this.state.connected) {
                return <Backend />
              }
              return <Redirect to={{
                pathname: '/login',
                state: props.location
              }} />
            }} />
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;