import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from "react-router-dom";
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';


export const LoginScreen = () => {

    const { loading } = useSelector(state => state.ui)

    const dispatch = useDispatch();


    const [formValues, handleImputChange] = useForm({
        email: 'pacual@gmail.com',
        password: '12345678'
    });

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPassword(email, password));
    };

    const handleGoogleLogin = (e) => {
        dispatch(startGoogleLogin())


    };




    return (
        <>
            <h3 className="auth__title">login</h3>
            <form onSubmit={handleLogin}>



                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__imput"
                    autoComplete="off"
                    value={email}
                    onChange={handleImputChange}
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__imput"
                    autoComplete="off"
                    value={password}
                    onChange={handleImputChange}
                />
                <button
                    className="btn btn-primary btn-block"
                    type="submit"
                    disabled={loading}
                >
                    Login
                </button>


                <div className="auth__social-networks">
                    <p>Login with social networks</p>
                    <div
                        className="google-btn"
                        onClick={handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link
                    className="link"
                    to="/auth/register">
                    Create new acount
                </Link>

            </form>



        </>
    )
}
