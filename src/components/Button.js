import React, { Component } from 'react';
import { Button } from 'primereact/button';

class ButtonSubmit extends Component {

    render() {
        const {label} = this.props
        return (
            <div>
                <div className="content-section implementation button-demo">
                    <Button label={label}/>
                </div>
            </div>
        )
    }
}

export default ButtonSubmit;
