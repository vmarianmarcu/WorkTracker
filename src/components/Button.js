import React, { Component } from 'react';
import { Button } from 'primereact/button';

class ButtonSubmit extends Component {

    render() {
        const { label, type, onClick, icon} = this.props
        return (
            <div>
                <div className="content-button">
                    <Button type={type} icon={icon} label={label} onClick={onClick}/>
                </div>
            </div>
        )
    }
}

export default ButtonSubmit;
