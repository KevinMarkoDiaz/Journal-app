import React from 'react'
import { NotesScreen } from '../note/NotesScreen'
//import { NothingtSelected } from './NothingtSelected'
import { Sidebar } from './Sidebar'


export const JournalScreen = () => {
    return (
        <div className="journal__main-content">

            <Sidebar />
            <main>
                {/*<NothingtSelected />*/}

                <NotesScreen />

            </main>

        </div>
    )
}
