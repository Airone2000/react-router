import React from 'react';
import {Redirect} from 'react-router-dom';

const About = ({match, ...rest}) => (
  <Redirect to={{
    pathname: `${match.path}/me`,
    state: { from: rest.location},
    hallo: 'ok'
  }} />
);

export default About;