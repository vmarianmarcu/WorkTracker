import React from 'react';
import { Panel } from 'primereact/panel';
import ListBox from 'components/ListBox';
import DeleteButton from 'components/DeleteButton';

const UserList = ({ registredUsers }) => (
    <div className="user-list-content">
        <Panel header={`User list`} toggleable={true}>
            <ListBox value={registredUsers.payload} filter={true} filterPlaceholder="Search" options={registredUsers.payload} />
            <DeleteButton className={`p-button-danger`} />
        </Panel>
    </div>
)
export default UserList;

