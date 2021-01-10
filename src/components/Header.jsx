import React from 'react';
import '../assets/styles/components/Header.scss';

import logo from '../assets/static/logo.png'
import user from '../assets/static/usuario.png'

const Header = ({label,isHome}) => {
    return (
        <div className="header">
            <div className="header__item">
                <img src={logo} alt="logo de pagina"/>
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
                            <li>Info personal</li>
                            <li>Cerrar session</li>
                        </ul>
                        :<ul>
                            <li>Ingresar</li>
                            <li>Registrarse</li>
                        </ul>
                    }
                </div>
            </div>
        </div>
    );
}

export default Header;