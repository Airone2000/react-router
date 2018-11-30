import React from 'react';

function Login({onConnected, ...rest}) {

  return (
    <div>
      <h1>Login</h1>
      <button onClick={onConnected}>
        Click to connect
      </button>
    </div>
  );
}

export default Login;