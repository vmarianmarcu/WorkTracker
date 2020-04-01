import React, { Component } from 'react';
import { Button } from 'primereact/button';

class ButtonSubmit extends Component {

    render() {
        const { className, label, type, onClick, icon, disabled } = this.props
        return (
            <div className="content-button">
                <Button className={className} type={type} icon={icon} label={label} disabled={disabled} onClick={onClick} />
            </div>
        )
    }
}

export default ButtonSubmit;
