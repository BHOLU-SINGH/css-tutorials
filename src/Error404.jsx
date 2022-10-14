import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return(
        <div className="error404">
            <h2>Sorry, <br/> This page doesn't exist</h2>
            <p>Go to <Link class="" to="/">Home page</Link></p>
        </div>
    );
}

export default Error404;