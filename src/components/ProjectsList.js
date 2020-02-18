import React from 'react';
import LIistBox from './ListBox';

const projectList = ({projects}) => {

        return(
            <div className="p-listbox-list">
                {/* {
                    projects.items && projects.items.map(project => {
                        return( */}
                            <LIistBox value={ projects.items } options={projects.items} />
                        {/* )
                    })

                } */}
            </div>
        )
    }
export default projectList