import React, { Fragment } from 'react';
import { Dialog } from 'primereact/dialog';
import Button from 'components/Button';
import UsersForm from './UsersForm';

const renderFooter = (onHideDialog) => {
    return (
        <div className="footer-button">
            <Button
                label="Close"
                icon="pi pi-times"
                onClick={(e) => onHideDialog(e)}
                className="p-button-secondary"
            />
        </div>
    );
}


const AddUserComp = ({ addUser, visible, onHideDialog }) => (
    <Fragment>
        <Dialog
            header="Add User"
            visible={visible}
            className={`dialog-width`}
            onHide={onHideDialog}
            maximizable
            blockScroll
            footer={renderFooter(onHideDialog)}
        >
            <UsersForm addUser={addUser} />
        </Dialog>
    </Fragment>
);

export default AddUserComp;