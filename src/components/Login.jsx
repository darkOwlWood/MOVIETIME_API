import React from 'react';
import '../assets/styles/components/Login.scss';

import FormCard from './FormCard';

const Login = () => {
    return (
        <div className="login">
            <FormCard isLogin={true}/>
        </div>
    );
}

export default Login;