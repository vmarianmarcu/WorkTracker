import React from 'react';
import {ListBox} from 'primereact/listbox';

const LIistBox = ({ value, options, multiple, optionLabel, onChange }) => {
    return(
            <div /*className="p-listbox-list-wrapper"*/ >
               <ListBox value={value} options={options} multiple={multiple} optionLabel={optionLabel} onChange={onChange} />
            </div>
            
    )
}
export default LIistBox;