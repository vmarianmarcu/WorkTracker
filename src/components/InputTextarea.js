import React, { Component } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { Field } from 'react-final-form';

class INputTextarea extends Component{
    render() {
        const { name, placeholder, value, onChange } = this.props;
        return(
            <Field name="textarea">
                {props => (
                        <div>
                            <InputTextarea
                                rows={1} 
                                cols={47} 
                                name={props.input.name}
                                value={props.input.value} 
                                onChange={props.input.onChange}
                                placeholder={placeholder}  
                                autoResize={true} 
                             />
                        </div>
                    )
                }  
            </Field>  
        );
    }
}
export default INputTextarea;
// export default props => <Field name="textarea" component={INputTextarea} {...props} />;

