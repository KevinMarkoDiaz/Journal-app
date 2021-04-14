import React from 'react'
import moment from "moment";
import { useDispatch } from 'react-redux';
import { activeNote } from "../../actions/notes";


export const JournalEntry = ({ id, date, title, body, url }) => {

    const dispatch = useDispatch()


    const handleNoteActive = () => {

        dispatch(activeNote(id, { date, title, body, url }))


    };

    const noteDate = moment(date)


    return (
        <div className="journal__entry pointer animate__animated animate__fadeIn"
            onClick={handleNoteActive} >

            <div className="journal__entry-pyc">




                {
                    url &&

                    <div
                        className="journal__entry-picture"
                        style={{

                            backgroundImage: `url(${url})`,

                        }}

                    >
                    </div>
                }  <h3 className="journal__entry-title">
                    {title}

                </h3>

            </div>
            <div className="journal__entry-date-box">
                <span>{

                    noteDate.format('dddd')


                }</span>
                <h4>   {
                    noteDate.format('ll')}  </h4>
            </div>

        </div >
    )
}
