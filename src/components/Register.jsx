import React,{ useState } from 'react';
import '../assets/styles/components/FormCard.scss';

import { useDispatch } from 'react-redux';
import { registerUser } from '../slices/moviesSlice';

const Register = () => {

    const dispatch = useDispatch();
    const [ formData, setFormData ] = useState({});

    const handleClick = () => {
        if(formData.password===formData.password_repeat){
            delete formData.password_repeat;
            dispatch(registerUser(formData));
        }
    }

    return (
        <div className="register">
            <div className="form-card">
                <div className="form-card__item">
                    <input
                        type="text"
                        name="username"
                        placeholder="Nombres..."
                        onChange={ (event) => setFormData({ ...formData, name:event.target.value }) }
                    />
                    <input
                        type="text"
                        name="middle_name"
                        placeholder="Apellido Paterno..."
                        onChange={ (event) => setFormData({ ...formData, middle_name:event.target.value }) }
                    />
                    <input
                        type="text"
                        name="last_name"
                        placeholder="Apellido Materno..."
                        onChange={ (event) => setFormData({ ...formData, last_name:event.target.value }) }
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email..."
                        onChange={ (event) => setFormData({ ...formData, email:event.target.value }) }
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Contraseña..."
                        onChange={ (event) => setFormData({ ...formData, password:event.target.value }) }
                    />
                    <input
                        type="password"
                        name="password__repeat"
                        placeholder="Repetir Contraseña..."
                        onChange={ (event) => setFormData({ ...formData, password_repeat:event.target.value }) }
                    />
                </div>
                <div className="form-card__item form-card__item--send">
                    <button onClick={handleClick}>Enviar</button>
                </div>
            </div>
        </div>
    );
}

export default Register;