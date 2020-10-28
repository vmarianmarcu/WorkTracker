import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import Input from 'components/Input';

const DataUserTable = ({ registredUsers }) => {

    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [user, setUser] = useState(null);
    const [displayDialog, setDisplayDialog] = useState(false);

    let newUser = false;

    const onSave = () => {
        let _users = [...users];
        if (newUser)
            _users.push(user)
        else
            _users[findSelectedUserIndex()] = user

        setUsers(users);
        setSelectedUser(null);
        setUser(null);
        setDisplayDialog(false);

    }

    const onDelete = () => {
        let index = findSelectedUserIndex();

        setUsers(users.filter((val, i) => i !== index));
        setSelectedUser(null);
        setUser(null);
        setDisplayDialog(false);

    }

    const findSelectedUserIndex = () => {
        return users.indexOf(selectedUser)
    }

    const updateProperty = (property, value) => {
        user[property] = value;
        setUser(user);
    }

    const onUserSelect = (e) => {
        newUser = false;

        setUser(Object.assign({}, e.data));
        setDisplayDialog(true);
    }

    const header = <div className="p-clearfix">Users</div>;

    const dialogFooter = <div className="ui-dialog-buttonpane p-clearfix">
        <Button label="Delete" icon="pi pi-times" onClick={onDelete} />
        <Button label="Save" icon="pi pi-check" onClick={onSave} />
    </div>;

    return (
        <div className="table-section">
            <DataTable
                // value={users}
                value={registredUsers.payload}
                paginator={true}
                rows={11}
                header={header}
                selectionMode="single"
                selection={selectedUser}
                onSelectionChange={e => setSelectedUser(e.value)}
                onRowSelect={onUserSelect}
            >
                <Column field="firstName" header="First Name" sortable={true} filter={true} filterPlaceholder={`Search By Name`} />
                <Column field="lastName" header="Last Name" sortable={true} filter={true} filterPlaceholder={`Search By Surname`} />
                <Column field="email" header="Email" sortable={true} filter={true} filterPlaceholder={`Search By Email`} />
            </DataTable>

            <Dialog
                visible={displayDialog}
                className={`dialog-width`}
                header="User Details"
                modal={true}
                footer={dialogFooter}
                onHide={() => setDisplayDialog(false)}
                blockScroll={false}
            >
                {
                    user &&

                    <div className="p-grid p-fluid">
                        <div className="p-col-4"><label htmlFor="firstName">First Name</label></div>
                        <div className="p-col-8">
                            <Input
                                id="firstName"
                                type="text"
                                onChange={(e) => { updateProperty('firstName', e.target.value) }}
                                value={user.firstName}
                            />
                        </div>

                        <div className="p-col-4"><label htmlFor="lastName">Last Name</label></div>
                        <div className="p-col-8">
                            <Input
                                type="text"
                                id="lastName"
                                onChange={(e) => { updateProperty('lastName', e.target.value) }}
                                value={user.lastName}
                            />
                        </div>

                        <div className="p-col-4"><label htmlFor="email">Email</label></div>
                        <div className="p-col-8">
                            <Input
                                id="email"
                                type="email"
                                onChange={(e) => { updateProperty('email', e.target.value) }}
                                value={user.email}
                            />
                        </div>

                        <div className="p-col-4"><label htmlFor="password">Password</label></div>
                        <div className="p-col-8">
                            <Input
                                id="password"
                                type="password"
                                onChange={(e) => { updateProperty('password', e.target.value) }}
                                value={user.password}
                            />
                        </div>
                    </div>
                }

            </Dialog>
        </div>
    );
}
export default DataUserTable;
