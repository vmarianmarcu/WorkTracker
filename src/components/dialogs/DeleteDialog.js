import React, { Fragment } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button'

const deleteDialogFooter = (onHide, deleteItem) => {
    return (
        <Fragment>
            <Button
                label="No"
                icon="pi pi-times"
                className="p-button-rounded p-button-text"
                onClick={onHide}
            />
            <Button
                label="Yes"
                icon="pi pi-check"
                className="p-button-rounded p-button-text"
                onClick={deleteItem}
            />
        </Fragment>
    )
};

const DeleteDialog = ({ itemName, item, visible, onHide, deleteItem, setDisplayDialog }) => (

    <Fragment>
        <Dialog
            visible={visible}
            className={`deleteDialog`}
            header="Confirm"
            modal
            footer={deleteDialogFooter(onHide)}
            onHide={onHide}
            deleteItem={deleteItem}
            setDisplayDialog={setDisplayDialog}
        >
            <div className="confirmation-content">
                <i
                    id={`informationTriangle`}
                    className="pi pi-exclamation-triangle p-mr-3"
                />
                {item && (
                    <span>
                        Are you sure you want to delete this <b>{itemName}</b> ?
                    </span>
                )}
            </div>
        </Dialog>
    </Fragment>
);

export default DeleteDialog;