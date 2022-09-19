import React from 'react';
import { Link } from 'react-router-dom';
import Data from './Data';

const SignUp = () => {
  return(
    <div className="form">
      <form action="#" method="post" autoComplete='off'>
        <h1>SignUp Form</h1>
        <p className='tagline'>Connect with us by sharing your details</p>
        <div className="name">
          <Data type="text" placeholder="First Name" />
          <Data type="text" placeholder="Last Name" />
        </div>
        <Data type="email" placeholder="Email Address" />
        <Data type="password" placeholder="Password" />
        <Data type="password" placeholder="Confirm password" />
        <p className='confirmation'>
        <input type="checkbox" required /> <span>I have read and agreed with the <Link to="/tc">TC</Link></span></p>
        <div className="btns">
          <button className='btn'>SignUp</button>
        </div>
        <p>Have an account? <Link to="/">login here</Link></p>
      </form>
    </div>
  );
};

export default SignUp;