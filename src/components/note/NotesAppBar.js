import React from 'react'
import { useDispatch, useSelector } from "react-redux";

import { startSaveNote, startLoadinFile } from '../../actions/notes';

import Swal from "sweetalert2";

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
        if (note.body === '' || note.title === '' || note.url === undefined) {

            Swal.fire('¡Tittle, body and picture is required!', 'alert')
        } else { dispatch(startSaveNote(note)); }



    };





    return (
        <div className="notes__appbar">



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
