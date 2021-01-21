import React, { useState } from 'react';
import '../assets/styles/components/FormCard.scss';

import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getIsLog } from '../moviesRedux/moviesSlice';
import { loginUser } from '../moviesRedux/moviesThunk';

const Login = () => {

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const isLog = useSelector(getIsLog);

    const handleClick = () => dispatch(loginUser({ email, password }));

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
                            onChange={event => setEmail(event.target.value)}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Contraseña..."
                            onChange={event => setPassword(event.target.value)}
                        />
                        <div className="form-card__item form-card__item--send">
                            <button onClick={handleClick} >Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;