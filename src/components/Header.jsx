import React from 'react';
import '../assets/styles/components/Header.scss';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getIsLog } from '../moviesRedux/moviesSlice';
import { logoutUser } from '../moviesRedux/moviesThunk';

import logo from '../assets/static/logo.png'
import user from '../assets/static/usuario.png'


const Header = ({label}) => {

    const dispatch = useDispatch();
    const userIsLog = useSelector(getIsLog); 

    return (
        <div className="header">
            <div className="header__item">
                <Link to="/"><img src={logo} alt="page logo"/></Link>
            </div>
            <div className="header__item">
                <p className="header__title">
                    { label }
                </p>
            </div>
            <div className="header__item">
                <img src={user} alt="user picture"/>
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