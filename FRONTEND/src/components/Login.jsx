import React, { useState, useLayoutEffect } from 'react';
import '../assets/styles/components/FormCard.scss';

import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getIsLog, getErrorCode } from '../moviesRedux/moviesSelector';
import { loginUser } from '../moviesRedux/moviesThunk';
import { cleanRequest } from '../moviesRedux/moviesSlice';

const Login = () => {

    const dispatch = useDispatch();
    const isLog = useSelector(getIsLog);
    const errorCode = useSelector(getErrorCode);
    const [formData, setFormData] = useState({ email: '', password: '' });


    useLayoutEffect(() => {
        dispatch(cleanRequest());
    },[]);

    const handleClick = () => dispatch(loginUser(formData));

    return (
        <>
            { isLog && <Redirect to='/home' />}
            <div className="login">
                <div className="form-card">
                    <div className="form-card__item">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email..."
                            onChange={event => setFormData({ ...formData, email: event.target.value })}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password..."
                            onChange={event => setFormData({ ...formData, password: event.target.value })}
                        />

                        {
                            errorCode?
                            <div className="form-card__item form-card__item--error">
                                {
                                    errorCode === 401 ?
                                    <p>The user or password aren't correct.</p>
                                    : <p>There was a error in the server, please, try it later.</p>
                                }
                            </div>
                            :<></>
                        }

                        <div className="form-card__item form-card__item--send">
                            <button onClick={handleClick} >Enter</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;