import React from 'react';
import {ListBox} from 'primereact/listbox';

const LIistBox = ({ value, options, optionLabel, onChange }) => {
    return(
            <div>
               <ListBox value={value} options={options} optionLabel={optionLabel} onChange={onChange} />
            </div>
            
    )
}
export default LIistBox;