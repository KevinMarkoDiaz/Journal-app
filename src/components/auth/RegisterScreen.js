import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";

import { useForm } from '../../hooks/useForm';
import { removeError, setError } from '../../actions/ui';
import { startLoginWithPasswordEmailName } from '../../actions/auth';





export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const { msgError } = useSelector(state => state.ui);
    console.log(msgError
    )
    const [formValues, handleImputChange] = useForm({
        name: 'hernando',
        email: 'pacudi@gmail.es',
        password: '123456',
        password2: '123456'

    })
    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();


        if (isFormValid()) {
            dispatch(startLoginWithPasswordEmailName(name, email, password))
        };
    };

    const isFormValid = () => {

        if (name.trim().length === 0) {
            dispatch(setError('name is required'))
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setError('Email is not valid'))

            return false;
        } else if (password !== password2 || password.length < 5) {
            dispatch(setError('contraseña incorrecta'))

            return false;
        }



        dispatch(removeError());

        return true;
    };

    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form
                onSubmit={handleRegister}>

                {msgError &&

                    (<div className="auth__alert-error">
                        {msgError}
                    </div>)

                }





                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__imput"
                    autoComplete="off"
                    value={name}
                    onChange={handleImputChange}
                />


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
                    type="text"
                    placeholder="Password"
                    name="password"
                    className="auth__imput"
                    autoComplete="off"
                    value={password}
                    onChange={handleImputChange}
                />
                <input
                    type="text"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__imput"
                    autoComplete="off"
                    value={password2}
                    onChange={handleImputChange}
                />
                <button
                    className="btn btn-primary btn-block mb-5"
                    type="submit">
                    Register
                </button>



                <Link
                    className="link"
                    to="/auth/login">
                    Already registered?
                </Link>

            </form>



        </>
    )
}
