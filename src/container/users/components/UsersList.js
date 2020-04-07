import React from 'react';
import { Panel } from 'primereact/panel';
import ListBox from 'components/ListBox';
import DeleteButton from 'components/DeleteButton';

const UserList = () => (
    <div className="user-list-content">
        <Panel header={`User list`} toggleable={true}>
            <ListBox />
            <DeleteButton />
        </Panel>
    </div>
)
export default UserList;
