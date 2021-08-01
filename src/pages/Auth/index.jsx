import React from 'react';
import {LoginForm, RegisterForm} from "../../components";
import { Route } from 'react-router-dom';
import "./Auth.scss"

const Auth = () => {
    return (
        <section className="auth">
            <div className="auth__content">
                <Route exact path={['/', '/login']} component={LoginForm} />
                <Route exact path="/signup" component={RegisterForm} />
            </div>
        </section>

);
};

export default Auth;