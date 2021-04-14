import Swal from "sweetalert2";

import { db } from "../firebase/firebaseConfig";
import { types } from "../types/types";
import { startLoadFileUrl } from "../hellpers/startLoadFileUrl";


export const startNewNote = () => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth;

        const newNote = {

            title: '',
            body: '',
            date: new Date().getTime()

        }

        const doc = await db.collection(`${uid}/journal/notes`).add(newNote);

        dispatch(activeNote(doc.id, newNote))
        dispatch(addNewNote(doc.id, newNote))


    }
};

export const activeNote = (id, note) => ({
    type: types.notesActive,
    payload: {


        id,
        ...note
    }



});

export const addNewNote = (id, note) => ({

    type: types.notesAddNew,
    payload: {
        id,
        ...note
    }

});

export const setNotes = (notes) => ({

    type: types.notesLoad,
    payload: notes

})

export const startSaveNote = (note) => {

    return async (dispatch, getState) => {

        const { uid } = getState().auth;

        if (!note.url) {
            delete note.url;
        }


        const noteToFirestore = { ...note };

        delete noteToFirestore.id;

        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore)


        dispatch(reloadNote(note.id, noteToFirestore))
        Swal.fire('Saved', note.title, 'success')

    }





};


export const reloadNote = (id, note) => ({


    type: types.notesUpdate,
    payload: {
        id,
        note: {
            id,
            ...note
        }
    }
})


export const startLoadinFile = (file) => {
    return async (dispatch, getState) => {

        const { active: noteActive } = getState().notes;

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }
        })

        const fileUrl = await startLoadFileUrl(file);

        noteActive.url = fileUrl;
        dispatch(startSaveNote(noteActive));

        Swal.close();

    };

};


export const startDeleteNote = (id) => {
    return async (dispatch, getState) => {

        const uid = getState().auth.uid;

        await db.doc(`${uid}/journal/notes/${id}`).delete();


        dispatch(deleteNote(id))

    };

};


export const deleteNote = (id) => ({

    type: types.notesDelete,
    payload: id

})



export const notesLogout = (uid) => ({

    type: types.notesLogoutCleanin,
    payload: uid


});