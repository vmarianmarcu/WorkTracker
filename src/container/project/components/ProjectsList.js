import React from 'react';
import { Panel } from 'primereact/panel';
import ListBox from 'components/ListBox';
import DeleteButton from 'components/DeleteButton';

const ProjectList = ({ value, options }) => (
    <div className="user-list-content">
        <Panel header={`Project list`} toggleable={true}>
            <ListBox className="project-list" value={value} options={options} />
            <DeleteButton className={`delete-project p-button-danger`}/>
        </Panel>
    </div>
)
export default ProjectList;
