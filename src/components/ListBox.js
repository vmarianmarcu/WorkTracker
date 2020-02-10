import React from 'react';
import {ListBox} from 'primereact/listbox';

const LIistBox = ({ name, options, project }) => {

    return(
        <div className="p-listbox">
            {/* <div className="p-listbox-header">
                <div className="p-listbox-list-wrapper">
                    <div className="p-listbox-list">
                        <div className="p-listbox-item">
                            <ListBox optionLabel={name} options={project} multiple={true} />
                        </div>
                    </div>
                </div>
            </div> */}
            <span>
                {project.title}
            </span>

        </div>
    )
}
export default LIistBox;