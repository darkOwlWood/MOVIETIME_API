import React, { useState } from 'react';
import '../assets/styles/components/FormCard.scss';

import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {

    const [formData, setFormData] = useState({});
    const [errorData, setErrorData] = useState({ type: '', message: '' });
    const [isRegistered, setIsRegistered] = useState(false);

    const validateFormData = () => {
        //QUE ESTEN TODOS
        const fillTest = Object.keys(formData).
            filter(prop => formData[prop].length)
        if (fillTest.length < 6) {
            setErrorData({ type: 'Faltan campos.', message: 'Es nesesario llenar todos los campos del formulario.' });
            return false;
        }

        //LONGITUD
        const longTest = Object.keys(formData)
            .map(prop => prop === 'email' ? formData[prop].length >= 40 : formData[prop].length >= 20)
            .reduce((count, val) => count + val)
        if (longTest) {
            setErrorData({ type: 'Demaciados caracteres.', message: 'La longitud maxima del email es de 40 caracteres, todos los demas campos tienen un limite de 20 caracteres.' });
            return false;
        }

        //QUE SEA CORREO
        if (!/([A-Za-z0-9]|-|_)+@[A-Za-z]+\.(com|net)/.test(formData['email'])) {
            setErrorData({ type: 'Correo invalido.', message: 'El formato del correo no es valido, ingrese un correo valido.' });
            return false;
        }

        //NO CARACTERES RAROS DONDE NO
        const nameRegex = new RegExp(/^([A-Za-z]\s*)+$/);
        if (!nameRegex.test(formData['username']) && !nameRegex.test(formData['middle_name']) && !nameRegex.test(formData['last_name'])) {
            setErrorData({ type: 'Caracteres inusuales.', message: 'El nombre y apellidos no puede contener caracteres raros ni numeros, solo letras.' });
            return false;
        }

        //PASSWORDS IGUALES
        if (formData.password !== formData.password_repeat) {
            setErrorData({ type: 'Contraseña invalida.', message: 'Las contraseñas no coinciden.' });
            return false;
        }

        setErrorData({ type: '', message: '' });
        return true;
    }

    const handleClick = async () => {

        try {
            if (validateFormData()) {
                const { password_repeat, ...userData  } = formData;
                const resp = await axios.post(`http://localhost:8088/authserver/signin`, { ...userData }, { withCredentials: true });
                delete formData.password;
                setIsRegistered(true);
            }
        } catch (err) {
            setErrorData(err.response.status === 409 ?
                { type: 'Correo Repetido.', message: 'El correo ingresado ya esta siendo usado por otro usuario' }
                : { type: 'Error en el servidor.', message: 'Ah ocurrido un error en el servidor, porfavor intente mas tarde' });
        }
    }

    return (
        <div className="register">
            <div className="form-card">
                {
                    !isRegistered?
                    <>
                        <div className="form-card__item">
                            <input
                                type="text"
                                name="username"
                                placeholder="Nombres..."
                                onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                            />
                            <input
                                type="text"
                                name="middle_name"
                                placeholder="Apellido Paterno..."
                                onChange={(event) => setFormData({ ...formData, middle_name: event.target.value })}
                            />
                            <input
                                type="text"
                                name="last_name"
                                placeholder="Apellido Materno..."
                                onChange={(event) => setFormData({ ...formData, last_name: event.target.value })}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email..."
                                onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Contraseña..."
                                onChange={(event) => setFormData({ ...formData, password: event.target.value })}
                            />
                            <input
                                type="password"
                                name="password__repeat"
                                placeholder="Repetir Contraseña..."
                                onChange={(event) => setFormData({ ...formData, password_repeat: event.target.value })}
                            />
                        </div>

                        <div className="form-card__item form-card__item--error">
                            <p>{errorData.type}</p>
                            <p>{errorData.message}</p>
                        </div>

                        <div className="form-card__item form-card__item--send">
                            <button onClick={handleClick}>Enviar</button>
                        </div>
                    </>
                    :
                    <>
                        <div className="form-card__item form-card__item--redirect">
                            <p>El usuario ha sido registrado exisotsamente, por favor ingrese a la plataforma, <Link to="/login">Ingresar</Link></p>
                        </div>
                    </>
                }
            </div>
        </div>
    );
}

export default Register;