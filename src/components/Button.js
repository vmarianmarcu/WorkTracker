import React, {Component} from 'react';
import {Button} from 'primereact/button';

class ButtonSubmit extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        };
        this.increment = this.increment.bind(this);
    }

    increment() {
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }));
    }

    render() {
        return (
            <div>
                <div className="content-section implementation button-demo">
                    <Button label="SIGN IN" />
                </div>
            </div>
        )
    }
}

export default ButtonSubmit;
