import React from 'react'
import { useSelector } from 'react-redux'
import { NotesScreen } from '../note/NotesScreen'
import { NothingtSelected } from './NothingtSelected'
import { Sidebar } from './Sidebar'


export const JournalScreen = () => {

    const { active } = useSelector(state => state.notes)



    return (
        <div className="journal__main-content animate__animated animate__fadeIn animate__faster">
            <div className="divZindex"><Sidebar /></div>

            <main className="zindex">

                {
                    (active)
                        ? (<NotesScreen />)
                        : (<NothingtSelected />)

                }


            </main>

        </div>
    )
}
