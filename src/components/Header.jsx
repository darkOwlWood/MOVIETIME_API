import React from 'react';
import '../assets/styles/components/Header.scss';

import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, getIsLog } from '../slices/moviesSlice';
import logo from '../assets/static/logo.png'
import user from '../assets/static/usuario.png'

import { Link } from 'react-router-dom';

const Header = ({label}) => {

    const dispatch = useDispatch();
    const userIsLog = useSelector(getIsLog); 

    return (
        <div className="header">
            <div className="header__item">
                <Link to="/"><img src={logo} alt="logo de pagina"/></Link>
            </div>
            <div className="header__item">
                <p className="header__title">
                    { label }
                </p>
            </div>
            <div className="header__item">
                <img src={user} alt="imagen de usuario"/>
                <div className="header__options">
                    {
                        userIsLog?
                        <ul>
                            <li><Link to="/Home">Peliculas</Link></li>
                            <li onClick={() => dispatch(logoutUser())}><Link to="/">Cerrar session</Link></li>
                        </ul>
                        :<ul>
                            <li><Link to="/login">Ingresar</Link></li>
                            <li><Link to="/register">Registrarse</Link></li>
                        </ul>
                    }
                </div>
            </div>
        </div>
    );
}

export default Header;