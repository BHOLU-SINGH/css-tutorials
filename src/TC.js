import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css";

const TC = () => {
  return(
    <div className="tc-container">
        <div className="tc">
            <h1>Our Terms & Conditions</h1>
            <p>1. We can store your data for making our services better.</p>
            <p>2. We can not share your data with third party company.</p>
            <p>3. Whenever you feels your account hacked, don't worry about your account, contact us, our team give you solution as possible.</p>
            <p><Link to="/signup">Go to signup page</Link></p>
        </div>
    </div>
  );
};

export default TC;