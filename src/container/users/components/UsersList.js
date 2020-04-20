import React from 'react';
import { Panel } from 'primereact/panel';
import ListBox from 'components/ListBox';
import DeleteButton from 'components/DeleteButton';

const UserList = ({ registredUsers }) => (
    <div className="user-list-content">
        <Panel header={`User list`} toggleable={true}>
            <ListBox value={registredUsers} filter={true} filterPlaceholder="Search" options={registredUsers} />
            <DeleteButton />
        </Panel>
    </div>
)
export default UserList;

