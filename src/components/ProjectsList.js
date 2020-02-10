import React from 'react';
import ListBox from './ListBox';

const projectList = ({projects}) => {

        return(
            <div className="project-list section">
                {
                    projects && projects.map(project => {
                        return(
                           <ListBox name="Projects" options={project} project={project} key={project.id} />
                        )
                    })
                }
            </div>
        )
    }
export default projectList