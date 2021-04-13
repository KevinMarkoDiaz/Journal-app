import React, { useEffect, useRef } from 'react'
import { NotesAppBar } from './NotesAppBar'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { activeNote, startDeleteNote } from '../../actions/notes'



export const NotesScreen = () => {


    const dispatch = useDispatch()

    const { active: note } = useSelector(state => state.notes);

    const [formValues, handleImputChange, reset] = useForm(note);

    const { title, body, id } = formValues;

    const activeId = useRef(note.id)

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

            <NotesAppBar />
            <div className="notes__content">

                <input
                    type="text"
                    placeholder="some asome tittle"
                    className="notes__title-input"
                    autoComplete="off"
                    name='title'
                    value={title}
                    onChange={handleImputChange}

                />

                <textarea
                    className="note__textarea"
                    placeholder="whats happened today"
                    value={body}
                    name='body'

                    onChange={handleImputChange}


                >   </textarea>

                {


                    (note.url)
                    &&
                    (<div >
                        <img className="notes__image"
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
