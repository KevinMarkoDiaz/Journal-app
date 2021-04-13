import React from 'react'
import { JournalEntries } from './JournalEntries'
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from '../../actions/auth';
import { startNewNote, notesLogout } from '../../actions/notes';

export const Sidebar = () => {

    const { name } = useSelector(state => state.auth)

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(startLogout())
        dispatch(notesLogout())
    };

    const handleAddNote = () => {
        dispatch(startNewNote())
    };

    return (
        <aside className="journal-sidebar">

            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span>{name} </span>
                </h3>


                <button
                    className="btn"
                    onClick={handleLogout}

                >Logout</button>

            </div>

            <div className="journal__new-entry"
                onClick={handleAddNote}
            >
                <i className="far fa-calendar-plus fa-5x" />
                <p>New Entry</p>
            </div>

            <JournalEntries />

        </aside>
    )
}
