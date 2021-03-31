import React from 'react'
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {
    return (
        <aside className="journal-sidebar">

            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span> Kevin diaz</span>
                </h3>


                <button className="btn"
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
