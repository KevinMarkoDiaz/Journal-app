import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NotesScreen = () => {
    return (
        <div className="notes__main-content">

            <NotesAppBar />
            <div className="notes__content">

                <input
                    type="text"
                    placeholder="some asome title"
                    className="notes__title-input"

                    autoComplete="off"

                />

                <textarea
                    className="note__textarea"
                    placeholder="whats happened today"


                >   </textarea>

                <div >
                    <img className="notes__image"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR007W76DqJGUqIpluLxEzUPdMG8dcDV1nsxA&usqp=CAU"
                        alt="imagen"
                    />

                </div>





            </div>

        </div>
    )
}
