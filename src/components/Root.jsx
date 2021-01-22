import React from 'react';
import '../assets/styles/components/Root.scss';

const Root = () => {
    return (
        <div className="root">
            <div className="root__text">
                <h1>MOVIE TIME API</h1>
                <p>
                    This is a test API to select movies from a Catalogue and save them base on a user in a MongoDB cloud instance.
                    In order to you could use the API please register in it making hover over the user pic and then from the drop 
                    down menu selectign the option "signin". After that you could login with your email and password.
                </p>
            </div>
        </div>
    );
}

export default Root;