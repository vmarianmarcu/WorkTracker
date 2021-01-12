import React, { Fragment } from 'react';
import { Dialog } from 'primereact/dialog';
import Input from 'components/Input';

const EditDialog = ({ visible, footer, onHide, project, onChange, value }) => (
    <Fragment>
        <Dialog
            visible={visible}
            className={`dialog-width`}
            header="Project Details"
            modal={true}
            footer={footer}
            onHide={onHide}
            blockScroll={false}
        >
            {
                project &&

                <div className="p-grid p-fluid">
                    <div className="p-col-4"><label htmlFor="projectName">Project Name</label></div>
                    <div className="p-col-8">
                        <Input
                            id="projectName"
                            type="text"
                            onChange={onChange}
                            labelName="Project Name"
                            value={value}
                        />
                    </div>
                </div>
            }
        </Dialog>
    </Fragment>

);

export default EditDialog;