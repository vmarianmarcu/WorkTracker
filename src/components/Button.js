import React, { Component } from 'react';
import { Button } from 'primereact/button';

class ButtonSubmit extends Component {

    render() {
        const { label, type} = this.props
        return (
            <div>
                <div className="content-button">
                    <Button type={type} label={label}/>
                </div>
            </div>
        )
    }
}

export default ButtonSubmit;
