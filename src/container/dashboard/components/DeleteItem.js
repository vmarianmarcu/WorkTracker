import React from 'react';
import Button from 'components/Button';

const DeleteItem = ({ index, onClick }) => (
    <div className="deleteButton">
        <Button key={index}
            className="p-button-danger"
            type="button"
            icon="pi pi-times"
            onClick={onClick}
        />
    </div>
)

export default DeleteItem;
