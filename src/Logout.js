import React from 'react';
import {withRouter} from 'react-router-dom';


const Logout = withRouter(({connected, onLogout, ...rest}) => {

  if(connected) {
    return (
      <button onClick={() => {
        onLogout();

        // Redirect to home
        rest.history.push('/');
      }}>Logout</button>
    );
  }
  else {
    return <strong>You're not connected</strong>;
  }

});



export default Logout;