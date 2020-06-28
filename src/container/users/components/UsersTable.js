import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';

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

    const header = <div className="p-clearfix" style={{ lineHeight: '1.87em' }}>Users</div>;

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
                rows={13}
                header={header}
                selectionMode="single"
                selection={selectedUser}
                onSelectionChange={e => setSelectedUser(e.value)}
                onRowSelect={onUserSelect}
            >
                <Column field="firstName" header="First Name" sortable={true} />
                <Column field="lastName" header="Last Name" sortable={true} />
                <Column field="email" header="Email" sortable={true} />
                <Column field="password" header="password" sortable={true} />
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
                        <div className="p-col-4" style={{ padding: '.75em' }}><label htmlFor="firstName">First Name</label></div>
                        <div className="p-col-8" style={{ padding: '.5em' }}>
                            <InputText id="firstName" onChange={(e) => { updateProperty('firstName', e.target.value) }} value={user.firstName} />
                        </div>

                        <div className="p-col-4" style={{ padding: '.75em' }}><label htmlFor="lastName">Last Name</label></div>
                        <div className="p-col-8" style={{ padding: '.5em' }}>
                            <InputText id="lastName" onChange={(e) => { updateProperty('lastName', e.target.value) }} value={user.lastName} />
                        </div>

                        <div className="p-col-4" style={{ padding: '.75em' }}><label htmlFor="email">Email</label></div>
                        <div className="p-col-8" style={{ padding: '.5em' }}>
                            <InputText id="email" onChange={(e) => { updateProperty('email', e.target.value) }} value={user.email} />
                        </div>

                        <div className="p-col-4" style={{ padding: '.75em' }}><label htmlFor="password">Password</label></div>
                        <div className="p-col-8" style={{ padding: '.5em' }}>
                            <InputText id="password" onChange={(e) => { updateProperty('password', e.target.value) }} value={user.password} />
                        </div>
                    </div>
                }

            </Dialog>
        </div>
    );
}
export default DataUserTable;
