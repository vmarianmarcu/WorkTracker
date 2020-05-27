import React, { Fragment } from 'react';
import Button from 'components/Button';

const DeleteButton = ({ className, index, onClick }) => (
    <Fragment>
        <Button key={index}
            className={className}
            type="button"
            label="Delete"
            icon="pi pi-times"
            onClick={onClick}
        />
    </Fragment>
)
export default DeleteButton;