import React from 'react';
import { ListBox } from 'primereact/listbox';

const ListBoxComponent = ({ value, filter, filterPlaceholder, options, optionLabel, onChange }) => {
    return (
        <React.Fragment>
            <ListBox value={value} filter={filter} filterPlaceholder={filterPlaceholder} options={options} optionLabel={optionLabel} onChange={onChange} style={{ width: '15em' }} listStyle={{ maxHeight: '250px' }} />
        </React.Fragment>
    )
}
export default ListBoxComponent;