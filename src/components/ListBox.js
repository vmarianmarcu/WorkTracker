import React, { Fragment } from 'react';
import { ListBox } from 'primereact/listbox';

const ListBoxComponent = ({ className, label, value, filter, filterPlaceholder, options, optionLabel, onChange }) => {
    return (
        <Fragment>
            <ListBox className={className} label={label} value={value} filter={filter} filterPlaceholder={filterPlaceholder} options={options} optionLabel={optionLabel} onChange={onChange} style={{ width: '15em' }} listStyle={{ maxHeight: '250px' }} />
        </Fragment>
    )
}
export default ListBoxComponent;