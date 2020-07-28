import React, { Fragment } from 'react';
import { Button } from 'primereact/button';

const ButtonSubmit = ({ className, label, type, onClick, icon, disabled }) => (
    <Fragment>
        <Button
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