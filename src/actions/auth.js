import Swal from 'sweetalert2'

import firebase from "firebase/app";
import { googleAuthProvider } from "../firebase/firebaseConfig";
import { types } from "../types/types";
import { finishLoading, starLoading } from "./ui";


export const startLoginEmailPassword = (email, password) => {


    return (dispatch) => {
        dispatch(starLoading());

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName))
                dispatch(finishLoading())
            }).catch(e => {
                dispatch(finishLoading())
                console.log(e)
                Swal.fire('Error', e.message, 'error')
            })



    }
};


export const startLoginWithPasswordEmailName = (name, email, password) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user.updateProfile({ displayName: name })
                dispatch(login(user.uid, user.displayName))

            })
            .catch(e => {
                return console.log(e)
            })
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {

        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName))
            });

    }
};


export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
};

export const startLogout = () => {
    return async (dispatch) => {

        await firebase.auth().signOut()
        dispatch(logout())
    }
}

export const logout = () => {
    return {
        type: types.logout

    }
};
