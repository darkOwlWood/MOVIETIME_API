import React from 'react';
import '../assets/styles/components/FormCard.scss';

const FormCard = ({isLogin}) => {
    return (
        <div className="form-card">
            {
                !isLogin &&
                <div className="form-card__item form-card__item--register">
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Nombres..."
                    />
                    <input 
                        type="text" 
                        name="middle_name" 
                        placeholder="Apellido Paterno..."
                    />
                    <input 
                        type="text" 
                        name="last_name" 
                        placeholder="Apellido Materno..."
                    />
                </div>
            }
            <div className="form-card__item form-card__item--login">
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email..."
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Contraseña..."
                />
                { 
                    !isLogin && 
                    <input 
                        type="password" 
                        name="password__repeat" 
                        placeholder="Repetir Contraseña..."
                    />
                }
            </div>
            <div className="form-card__item form-card__item--send">
                <button>Enviar</button>
            </div>
        </div>
    );
}

export default FormCard;