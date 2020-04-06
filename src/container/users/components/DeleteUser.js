import React from 'react';
import Button from 'components/Button';

const DeleteUser = ({ index, onClick }) => (
    <div className="delete-user-button">
        <Button key={index}
            className="p-button-danger"
            type="button"
            label="Delete"
            icon="pi pi-times"
            onClick={onClick}
        />
    </div>
)
export default DeleteUser;
