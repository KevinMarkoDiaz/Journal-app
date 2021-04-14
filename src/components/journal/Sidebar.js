import React, { useState } from 'react'
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


    const [estadoSidebar, setstate] = useState(true)

    const handleChangeStateSidebar = () => {
        if (estadoSidebar === true) { setstate(false) } else { setstate(true) }

    };

    if (estadoSidebar === true) {
        return (<aside className="journal-sidebar animate__animated animate__fadeInDownBig animate__faster "  >
            <div className="contBtnSidebar" > <span
                onClick={handleChangeStateSidebar}
                className="nav-var fas fa-bars" id="btn-menu"></span></div>



            <div className="journal__sidebar-navbar">
                <div
                    className="journal__sidebar-logo"

                ></div>
                <h3 >
                    <i className="fas fa-clipboard-list"></i>
                    <span>  {name} </span>
                </h3>


                <div
                    className="btn "
                    onClick={handleLogout}

                >Logout</div>

            </div>

            <div className="journal__new-entry"
                onClick={handleAddNote}
            >
                <i className="far fa-calendar-plus fa-5x" />
                <p>New idea</p>
            </div>

            <JournalEntries />

        </aside>
        )
    } else {
        return (<div className="contBtnSidebar animate__animated animate__fadeInUpBig animate__faster" > <span
            onClick={handleChangeStateSidebar}
            className="nav-var fas fa-bars " id="btn-menu"></span></div>


        )
    }






}






