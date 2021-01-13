import React, { Fragment } from 'react';
import { Dialog } from 'primereact/dialog';
import Button from 'components/Button';
import ProjectForm from './ProjectForm';

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

const AddProjectComp = ({ addProject, visible, onHideDialog }) => (

    <Fragment>
        <Dialog
            header="Add Project"
            visible={visible}
            className={`dialog-width`}
            onHide={onHideDialog}
            maximizable
            blockScroll
            footer={renderFooter(onHideDialog)}
        >
            <ProjectForm addProject={addProject} />
        </Dialog>
    </Fragment>

);

export default AddProjectComp;