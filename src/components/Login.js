import React from 'react';

const Login = () => {
    return (
        <div>
            <div className="login-welcome">
                <img src={require("../welcome-to.png")} alt='' id="welcome-to"/>
            </div>
            <div className="login-form">
                <h2 id="login-form-header">Log In or Sign Up</h2>
            </div>
        </div>
    )
}

export default Login;