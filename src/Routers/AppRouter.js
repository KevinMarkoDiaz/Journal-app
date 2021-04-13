import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { firebase } from "../firebase/firebaseConfig";
import { login } from '../actions/auth';
import { PrivateRouter } from './PrivateRouter';
import { PublicRoute } from './PublicRoute';
import { loadNotes } from '../hellpers/loadNotes';
import { setNotes } from '../actions/notes';



export const AppRouter = () => {
    const dispatch = useDispatch()
    const [gloLoading, setgloLoading] = useState(true)
    const [inLogin, setinLogin] = useState(false)

    useEffect(() => {
        setgloLoading(false)
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user?.uid) {

                dispatch(login(user.uid, user.displayName))
                setinLogin(true)

                const notes = await loadNotes(user.uid);
                dispatch(setNotes(notes));

            } else {
                setinLogin(false)
            }

        })

    }, [dispatch, gloLoading, inLogin])


    if (gloLoading) {
        return <h1>Loading...</h1>
    }

    return (


        <Router>

            <Switch>
                <PublicRoute

                    path='/auth'
                    component={AuthRouter}
                    isAuthenticated={inLogin}

                />


                <PrivateRouter
                    exact
                    path='/'
                    component={JournalScreen}
                    isAuthenticated={inLogin}

                />

                <Redirect to='/auth/register' />

            </Switch>



        </Router>


    )
}
