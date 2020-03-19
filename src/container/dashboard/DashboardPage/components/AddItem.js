import React from 'react';
import Button from 'components/Button';
import 'static/dashboard.css';

const AddItem = ({ onClick }) => (
    <div className="addButton">
        <Button type="button" icon="pi pi-plus" onClick={onClick} />
    </div>
)
export default AddItem;