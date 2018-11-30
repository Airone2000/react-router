import React from 'react';
import {Link, Route} from 'react-router-dom';

const Sujet = ({match}) => {
  return (<div>{match.params.id}</div>);
};

const SubSite = ({match, ...rest}) => {

  const props = {
    color: 'red',
    size: '12px'
  };

  return (
    <div>
      <ul>
        <li>
          <Link {...props} to={`${match.path}/sujet-1`}>Sujet 1</Link>
        </li>
        <li>
          <Link to={`${match.path}/sujet-2`}>Sujet 2</Link>
        </li>
        <li>
          <Link to={`${match.path}/sujet-3`}>Sujet 3</Link>
        </li>
      </ul>
      <Route path={`${match.path}/:id`} component={Sujet} />
    </div>
  );
};

export default SubSite;