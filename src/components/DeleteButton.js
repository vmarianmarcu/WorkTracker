import React from 'react';
import Button from 'components/Button';

const DeleteButton = ({ className, index, onClick }) => (
    <Button key={index}
        className={className}
        type="button"
        label="Delete"
        icon="pi pi-times"
        onClick={onClick}
    />
)
export default DeleteButton;