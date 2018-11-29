import React from 'react';
import {Link} from 'react-router-dom';

const Menu = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">
        About
        <ul>
          <li>
            <Link to="/about/me">About me</Link>
          </li>
          <li>
            <Link to="/about/contact">Contact</Link>
          </li>
        </ul>
      </Link>
    </li>
  </ul>
);

export default Menu;