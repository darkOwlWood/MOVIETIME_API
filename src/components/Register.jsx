import React, { useState } from 'react';
import '../assets/styles/components/FormCard.scss';

import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {

    const [formData, setFormData] = useState({});
    const [errorData, setErrorData] = useState({ type: '', message: '' });
    const [isRegistered, setIsRegistered] = useState(false);

    const validateFormData = () => {
        //ALL FIELDS
        const fillTest = Object.keys(formData).
            filter(prop => formData[prop].length)
        if (fillTest.length < 6) {
            setErrorData({ type: 'Missing fields.', message: 'You need to fill all the fields.' });
            return false;
        }

        //LENGTH>>
        const longTest = Object.keys(formData)
            .map(prop => prop === 'email' ? formData[prop].length >= 40 : formData[prop].length >= 20)
            .reduce((count, val) => count + val)
        if (longTest) {
            setErrorData({ type: 'Too many characters.', message: 'You have entered too many characters in a field, the email can have only 40 and the other fields only 20.' });
            return false;
        }

        //CHECK EMAIL
        if (!/([A-Za-z0-9]|-|_)+@[A-Za-z]+\.(com|net)/.test(formData['email'])) {
            setErrorData({ type: 'Invalid email.', message: 'Please enter a valid email format.' });
            return false;
        }

        //NO WEIRD CHARACTERS
        const nameRegex = new RegExp(/^([A-Za-z]\s*)+$/);
        if (!nameRegex.test(formData['username']) && !nameRegex.test(formData['middle_name']) && !nameRegex.test(formData['last_name'])) {
            setErrorData({ type: 'No special characters.', message: 'The name, last name and second surname can\'t contain special characters.' });
            return false;
        }

        //PASSWORDS IGUALES
        if (formData.password !== formData.password_repeat) {
            setErrorData({ type: 'Invalid password.', message: 'The passwords doesn\'t match. ' });
            return false;
        }

        setErrorData({ type: '', message: '' });
        return true;
    }

    const handleClick = async () => {

        try {
            if (validateFormData()) {
                const { password_repeat, ...userData } = formData;
                const resp = await axios.post(`http://localhost:8088/authserver/signin`, { ...userData }, { withCredentials: true });
                delete formData.password;
                setIsRegistered(true);
            }
        } catch (err) {
            setErrorData(err.response.status === 409 ?
                { type: 'Email already in use.', message: 'The email you entered is already in use by another user.' }
                : { type: 'Server error.', message: 'There was a error in the server, please, try it later.' });
        }
    }

    return (
        <div className="register">
            <div className="form-card">
                {
                    !isRegistered ?
                        <>
                            <div className="form-card__item">
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Name..."
                                    onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                                />
                                <input
                                    type="text"
                                    name="middle_name"
                                    placeholder="Last name..."
                                    onChange={(event) => setFormData({ ...formData, middle_name: event.target.value })}
                                />
                                <input
                                    type="text"
                                    name="last_name"
                                    placeholder="Second surname..."
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
                                    placeholder="Password..."
                                    onChange={(event) => setFormData({ ...formData, password: event.target.value })}
                                />
                                <input
                                    type="password"
                                    name="password__repeat"
                                    placeholder="Repeat password..."
                                    onChange={(event) => setFormData({ ...formData, password_repeat: event.target.value })}
                                />
                            </div>

                            <div className="form-card__item form-card__item--error">
                                <p>{errorData.type}</p>
                                <p>{errorData.message}</p>
                            </div>

                            <div className="form-card__item form-card__item--send">
                                <button onClick={handleClick}>Send</button>
                            </div>
                        </>
                        :
                        <>
                            <div className="form-card__item form-card__item--redirect">
                                <p>The user was successful register, please, enter to the API <Link to="/login">Login</Link></p>
                            </div>
                        </>
                }
            </div>
        </div>
    );
}

export default Register;