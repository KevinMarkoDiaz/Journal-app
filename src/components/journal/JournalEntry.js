import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer" >

            <div
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVWFpB-Qo685ouG6gxuwMDhvYjQM0L1y4BxUvfdso-RofO_gproDtoao0e_TN5bC3YoyI&usqp=CAU)'
                }}

            >
            </div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo día
                    
                </p>
                <p className="journal__entry-content">
                         sdfskakdjjfjjjjjjjjjjjjjjjjjjjjjj
         
                </p> 
            </div>
            <div className="journal__entry-date-box">
<span>Monday</span>
<h4>28</h4>
            </div>

        </div>
    )
}
