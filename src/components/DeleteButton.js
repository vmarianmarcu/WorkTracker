import React from 'react';
import Button from 'components/Button';

const DeleteButton = ({ index, onClick }) => (
    <Button key={index}
        className="p-button-danger"
        type="button"
        label="Delete"
        icon="pi pi-times"
        onClick={onClick}
    />
)
export default DeleteButton;