import React, { Fragment } from 'react';
import Button from 'components/Button';

const DeleteItem = ({ index, onClick }) => (
    <Fragment>
        <Button key={index}
            className={`deleteItemButton p-button-danger`}
            type="button"
            icon="pi pi-times"
            onClick={onClick}
        />
    </Fragment>
)

export default DeleteItem;
