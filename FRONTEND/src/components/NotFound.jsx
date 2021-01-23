import React from 'react';
import '../assets/styles/components/NotFound.scss';

import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found">
            <div className="not-found__return">
                    <Link to="/Home"><button>Return to Home</button></Link>
            </div>
            <div className="not-found__info">
                <h1 className="not-found__code rubberBand">404</h1>
                <h3 className="not-found__message">The page you are looking for doesn't exist.</h3>
            </div>
        </div>
    );
};

export default NotFound;