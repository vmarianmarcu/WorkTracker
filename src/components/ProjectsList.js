import React from 'react';
import LIistBox from './ListBox';

const projectList = ({projects}) => {
        return(
            
            <div className="p-listbox-list">
                {
                    // projects.items && projects.items.map(project => {
                    //      return <LIistBox options={cities} />
                    // })
                    <LIistBox optionLabel="projects" />
                }
            </div>
        )
    }
export default projectList