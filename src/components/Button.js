import React, { Component } from 'react';
import { Button } from 'primereact/button';

class ButtonSubmit extends Component {

    render() {
        const { className, label, type, onClick, icon} = this.props
        return (
            <div className="content-button">
                <Button className={className} type={type} icon={icon} label={label} onClick={onClick}/>
            </div>
        )
    }
}

export default ButtonSubmit;
