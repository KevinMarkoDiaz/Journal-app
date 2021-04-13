import React from 'react'
import { useDispatch, useSelector } from "react-redux";

import { startSaveNote, startLoadinFile } from '../../actions/notes';




export const NotesAppBar = () => {

    const handlePicutureSave = () => {
        document.querySelector('#fileLoad').click()
    };


    const handleImputOnChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            dispatch(startLoadinFile(file))
        }
    };





    const { active: note } = useSelector(state => state.notes)

    const dispatch = useDispatch()
    const handleSave = () => {

        dispatch(startSaveNote(note));

    };


    return (
        <div className="notes__appbar">
            <span>28 de agosto 2021</span>


            <input
                type='file'
                id='fileLoad'
                style={{ display: 'none' }}
                onChange={handleImputOnChange}
                name='file'

            />


            <div>
                <button
                    onClick={handlePicutureSave}
                    className="btn">
                    Picture
                 </button>
                <button

                    onClick={handleSave}
                    className="btn">
                    Save
                 </button>
            </div>
        </div>
    )
};
