import React, { Fragment } from 'react';
import { Button } from 'primereact/button';

const ButtonSubmit = ({ id, className, label, type, onClick, icon, disabled }) => (
    <Fragment>
        <Button
            id={id}
            className={className}
            type={type}
            icon={icon}
            label={label}
            disabled={disabled}
            onClick={onClick}
        />
    </Fragment>
)
export default ButtonSubmit;