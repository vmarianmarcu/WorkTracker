import React from 'react';
import {ListBox} from 'primereact/listbox';

const LIistBox = ({ value,name, options }) => {

    return(
            <div className="p-listbox-item" >
               <ListBox name={name} value={value} options={options} />
                {/* <span>
                    {name}
                </span> */}
            </div>
            
    )
}
export default LIistBox;