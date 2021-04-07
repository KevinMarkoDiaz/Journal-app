import React from 'react'
import { JournalEntries } from './JournalEntries'
import { useDispatch } from "react-redux";
import { startLogout } from '../../actions/auth';


export const Sidebar = () => {

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(startLogout())
    };


    return (
        <aside className="journal-sidebar">

            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span> Kevin diaz</span>
                </h3>


                <button
                    className="btn"
                    onClick={handleLogout}
                >Logout</button>

            </div>

            <div className="journal__new-entry">
                <i className="far fa-calendar-plus fa-5x" />
                <p>New Entry</p>
            </div>

            <JournalEntries />

        </aside>
    )
}
