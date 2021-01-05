import React, { Fragment } from 'react';
import { Dialog } from 'primereact/dialog';

const DeleteRowDialog = ({ visible, footer, onHide, setDisplayDialog, product }) => (

    <Fragment>
        <Dialog
            visible={visible}
            className={`deleteDialog`}
            header="Confirm"
            modal
            footer={footer}
            onHide={onHide}
            setDisplayDialog={setDisplayDialog}
        >
            <div className="confirmation-content">
                <i
                    id={`informationTriangle`}
                    className="pi pi-exclamation-triangle p-mr-3"
                />
                {product && (
                    <span>
                        Are you sure you want to delete this <b>Record</b> ?
                    </span>
                )}
            </div>
        </Dialog>
    </Fragment>
);

export default DeleteRowDialog;