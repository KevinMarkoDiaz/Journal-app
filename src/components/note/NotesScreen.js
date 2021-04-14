import React, { useEffect, useRef } from 'react'
import { NotesAppBar } from './NotesAppBar'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { activeNote, startDeleteNote } from '../../actions/notes'

import moment from "moment";

export const NotesScreen = () => {


    const dispatch = useDispatch()

    const { active: note } = useSelector(state => state.notes);

    const [formValues, handleImputChange, reset] = useForm(note);

    const { title, body, id, date } = formValues;

    const activeId = useRef(note.id)
    const noteDate = moment(date)

    useEffect(() => {

        if (note.id !== activeId.current) {

            reset(note)
            activeId.current = note.id
        }

    }, [note, reset])


    useEffect(() => {

        dispatch(activeNote(formValues.id, { ...formValues }))
    }, [formValues, dispatch])




    const handleDelete = () => {
        dispatch(startDeleteNote(id))

    };



    return (
        <div className="notes__main-content">
            <div className="notes__appbar2">
                <div
                    className="brain animate__animated animate__heartBeat animate__animated animate__slower  animate__infinite	"></div><span>{

                        noteDate.format('LL')}</span></div>
            <NotesAppBar />
            <div className="notes__content">

                <input

                    placeholder="What is your idea?"
                    className="notes__title-input"
                    autoComplete="off"
                    name='title'
                    value={title}
                    onChange={handleImputChange}

                />

                <textarea
                    className="note__textarea"
                    placeholder="raise your idea ..."
                    value={body}
                    name='body'

                    onChange={handleImputChange}


                >   </textarea>

                {


                    (note.url)
                    &&
                    (<div >
                        <img className="notes__image animate__animated animate__fadeInLeft"
                            src={note.url}
                            alt="imagen"

                        />

                    </div>)
                }




            </div>


            <button
                className="btn btn-danger"
                onClick={handleDelete}


            >
                Delete

</button>
        </div>
    )
}
