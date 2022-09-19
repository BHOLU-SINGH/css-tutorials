import React from 'react';
import { Link } from 'react-router-dom';
import Data from './Data';

const Login = () => {
  return(
    <div className="form">
      <form action="#" method="post" autoComplete='off'>
        <h1>Login Form</h1>
        <p className='tagline'>You can reach us anytime</p>
        <Data type="email" placeholder="Email Address" />
        <Data type="password" placeholder="Password" />
        <div className="btns">
          <button className='btn'>Login</button>
        </div>
        {/* <p className="forget-pass"><Link to="/">Forget password</Link></p> */}
        <p>Don't have an account? <Link to="/signup">signup here</Link></p>
      </form>
    </div>
  );
}

export default Login;