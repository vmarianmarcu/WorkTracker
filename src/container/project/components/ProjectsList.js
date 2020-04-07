import React from 'react';
import { Panel } from 'primereact/panel';
import ListBox from 'components/ListBox';
import DeleteButton from 'components/DeleteButton';

const ProjectList = () => (
    <div className="user-list-content">
        <Panel header={`Project list`} toggleable={true}>
            <ListBox />
            <DeleteButton />
        </Panel>
    </div>
)
export default ProjectList;
