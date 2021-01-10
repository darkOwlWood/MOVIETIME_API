import React from 'react';
import '../assets/styles/components/Header.scss';

import logo from '../assets/static/logo.png'
import user from '../assets/static/usuario.png'

import { Link } from 'react-router-dom';

const Header = ({label,isHome}) => {
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
                        isHome?
                        <ul>
                            <li><Link to="/Home">Peliculas</Link></li>
                            <li><Link to="/">Cerrar session</Link></li>
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