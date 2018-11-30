import React from 'react';
import {Route, Link} from 'react-router-dom';

const Menu = () => (
  <Route>
    {({match}) => {
      return (
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/more">Subsite</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
              <ul>
                <li>
                  <Link to="/about/me">About me</Link>
                </li>
                <li>
                  <Link to="/about/contact">Contact</Link>
                </li>
              </ul>
          </li>
          <li>
            <Link to="/backend">Secured page</Link>
          </li>
        </ul>
      );
    }}

  </Route>
);

export default Menu;