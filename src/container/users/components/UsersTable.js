import React, { Fragment, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import Input from 'components/Input';
import DeleteDialog from 'components/dialogs/DeleteDialog';
import AddUser from './AddUser';

const DataUserTable = ({ registredUsers, addUser }) => {

    const emptyUser = {
        id: null
    };

    const [user, setUser] = useState(emptyUser);
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    // const [user, setUser] = useState(null);
    const [displayDialog, setDisplayDialog] = useState(false);
    const [deleteUserDialog, setDeleteUserDialog] = useState(false);
    const [displayAddDialog, setDisplayAddDialog] = useState(false);

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

    // const onUserSelect = (e) => {
    //     newUser = false;

    //     setUser(Object.assign({}, e.data));
    //     setDisplayDialog(true);
    // }

    const header = (
        <div className="table-header">
            <div className="p-clearfix">Users</div>
        </div>
    );

    const addUserDialog = () => {
        setDisplayAddDialog(true);
    };

    const hideAddDialog = () => {
        setDisplayAddDialog(false);
    }

    const headerEditColum = (
        <div className="table-header">
            {/* <div className="p-clearfix" >Add</div> */}
            <Button icon="pi pi-plus" className="p-button-rounded p-button-info p-button-text" onClick={(e) => addUserDialog(e)} />
            <Button icon="pi pi-refresh" className="p-button-rounded p-button-success p-button-text" onClick={() => window.location.reload(false)} />
        </div>
    );

    const confirmDeleteUser = () => {
        setDeleteUserDialog(true);
    }


    const onHideDialog = () => {
        setDisplayDialog(false);
    }

    const editUser = (user) => {
        setUser({ ...user })
        setDisplayDialog(true)
    }

    const actionBodyTemplate = (rowData) => {    
        return (
            <Fragment>
                <Button icon="pi pi-plus" className="p-button-rounded" onClick={() => editUser(rowData)} />
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-mr-2" onClick={() => editUser(rowData)} />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" onHideDialog={(e) => onHideDialog(e)} onClick={(e) => confirmDeleteUser(e)} />
            </Fragment>
        );
    }

    const dialogFooter = <div className="ui-dialog-buttonpane p-clearfix">
        <Button label="Delete" icon="pi pi-times" onClick={onDelete} />
        <Button label="Save" icon="pi pi-check" onClick={onSave} />
    </div>;

    const deleteUser = () => {
        let users = this.filter(
            (val) => val.id !== this.state.user.id
        );
        this.setState({
            users,
            deleteUserDialog: false,
            user: this.emptyUser
        });
        // this.toast.show({  
        //     severity: "success",
        //     summary: "Successful",
        //     detail: "Project Deleted",
        //     life: 3000
        // });
    }

    const hideDeleteUserDialog = () => {
        setDeleteUserDialog(false)
    }

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
            // onRowSelect={onUserSelect}
            >
                <Column field="firstName" header="First Name" sortable={true} filter={true} filterPlaceholder={`Search By Name`} />
                <Column field="lastName" header="Last Name" sortable={true} filter={true} filterPlaceholder={`Search By Surname`} />
                <Column field="email" header="Email" sortable={true} filter={true} filterPlaceholder={`Search By Email`} />
                <Column field="tools" header={headerEditColum} body={actionBodyTemplate} />
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

                {/* Add Project Dialog */}

                <AddUser addUser={addUser} visible={displayAddDialog} onHideDialog={hideAddDialog} />

                {/* Delete Dialog */}

                <DeleteDialog
                    itemName={`User`}
                    visible={deleteUserDialog}
                    onHide={hideDeleteUserDialog}
                    deleteItem={deleteUser}
                    setDisplayDialog={() => setDisplayDialog(false)}
                    item={user}
                />
            </Dialog>
        </div>
    );
}
export default DataUserTable;
