import React from 'react';
import Button from 'components/Button';

const DeleteItem = ({ index, onClick }) => (
    <div>
        <Button key={index}
            className={`deleteItemButton p-button-danger`}
            type="button"
            icon="pi pi-times"
            onClick={onClick}
        />
    </div>
)

export default DeleteItem;
