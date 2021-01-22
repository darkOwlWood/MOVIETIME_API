import React, { useState } from 'react';
import '../assets/styles/components/FormCard.scss';

import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getIsLog, getErrorCode } from '../moviesRedux/moviesSlice';
import { loginUser } from '../moviesRedux/moviesThunk';

const Login = () => {

    const dispatch = useDispatch();
    const isLog = useSelector(getIsLog);
    const errorCode = useSelector(getErrorCode);
    const [formData, setFormData] = useState({ email: '', password: '' });

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
                            placeholder="Contraseña..."
                            onChange={event => setFormData({ ...formData, password: event.target.value })}
                        />

                        {
                            errorCode?
                            <div className="form-card__item form-card__item--error">
                                {
                                    errorCode === 401 ?
                                    <p>El usuario o contraseña son incorrectos.</p>
                                    : <p>Ha ocurrido un error en el servidor, favor de intentar mas tarde.</p>
                                }
                            </div>
                            :<></>
                        }

                        <div className="form-card__item form-card__item--send">
                            <button onClick={handleClick} >Entrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;