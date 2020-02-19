import React from 'react';
import {ListBox} from 'primereact/listbox';

const LIistBox = ({ value,name, options, optionLabel }) => {
    return(
            <div className="p-listbox-item" >
               <ListBox  optionLabel={optionLabel} />
                {/* <span>
                    {name}
                </span> */}
            </div>
            
    )
}
export default LIistBox;