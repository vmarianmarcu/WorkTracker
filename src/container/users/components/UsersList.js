import React from 'react';
import { Panel } from 'primereact/panel';
import ListBox from 'components/ListBox';
import DeleteUser from './DeleteUser';

const UserList = () => (
    <div className="user-list-content">
        <Panel header={`User list`} toggleable={true}>
            <ListBox />
            <DeleteUser />
        </Panel>
    </div>
)
export default UserList;
