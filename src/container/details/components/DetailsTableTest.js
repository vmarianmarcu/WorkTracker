import React, { useState, useRef, Fragment } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button'
import RowExpansionTemplate from './RowExpansionTemplate';
// import { Toast } from 'primereact/toast';
import DeleteDialog from 'components/dialogs/DeleteDialog';
import EditDialog from './EditDialog';

const TableTest = ({ loadWorkDetails }) => {

    const emptyProduct = {
        id: null
    };

    const [product, setProduct] = useState(emptyProduct);
    const [products, setProducts] = useState([null]);
    const [productDialog, setproductDialog] = useState(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [submitted, setSubmitted] = useState(false);


    const [selectedRegistration, setSelectedRegistration] = useState(null);
    const [displayDialog, setDisplayDialog] = useState(false);
    const [expandedRows, setExpandedRows] = useState(null);
    let dt = useRef(null);

    const onHideDialog = () => {
        setDisplayDialog(false);
    }

    const onExport = () => {
        dt.current.exportCSV();
    };

    const header = <div>
        <div className="p-clearfix">Work Details</div>
        <div className="details-header-csv">
            <Button
                type="button"
                icon="pi pi-external-link"
                iconPos="left"
                label="CSV"
                onClick={onExport}>
            </Button>
        </div>
    </div>;

    const confirmDeleteProduct = () => {
        setDeleteProductDialog(true);
    }

    const hideDeleteProductDialog = () => {
        setDeleteProductDialog(false)
    }

    const editProduct = (product) => {
        setProduct({ ...product })
        setproductDialog(true)
    }

    const deleteProduct = () => {
        let products = this.filter(
            (val) => val.id !== this.state.product.id
        );
        this.setState({
            products,
            deleteProductDialog: false,
            product: this.emptyProduct
        });
        // this.toast.show({
        //     severity: "success",
        //     summary: "Successful",
        //     detail: "Product Deleted",
        //     life: 3000
        // });
    }

    const saveProduct = () => {
        let state = { submitted: true };

        // registration[property] = value;

        if (product.name.trim()) {
            let products = [...products];
            let product = { ...product };
            if (product.id) {
                const index = findIndexById(product.id);

                products[index] = product;
                // this.toast.show({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
            }
            else {
                product.id = this.createId();
                products.push(product);
                // this.toast.show({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
            }

            state = {
                ...state,
                products,
                productDialog: false,
                product: this.emptyProduct
            };
        }

        this.setState(state);
    }

    const findIndexById = (id) => {
        let index = -1;
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    const hideDialog = () => {
        setSubmitted(false);
        setproductDialog(false);
    }

    const productDialogFooter = (
        <React.Fragment>
            <Button label="Cancel" icon="pi pi-times" className="p-button-text" onClick={hideDialog} />
            <Button label="Save" icon="pi pi-check" className="p-button-text" onClick={saveProduct} />
        </React.Fragment>
    );

    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let product = setProduct({ ...product });
        product[`${name}`] = val;

        setProduct({ product })
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <Fragment>
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-mr-2" onClick={() => editProduct(rowData)} />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" onHideDialog={(e) => onHideDialog(e)} onClick={(e) => confirmDeleteProduct(e)} />
            </Fragment>
        );
    }


    const deleteProductDialogFooter = (
        <Fragment>
            <Button
                label="No"
                icon="pi pi-times"
                className="p-button-text"
                onClick={hideDeleteProductDialog}
            />
            <Button
                label="Yes"
                icon="pi pi-check"
                className="p-button-text"
                onClick={deleteProduct}
            />
        </Fragment>
    );

    const rowExpansionTemplate = data => (<RowExpansionTemplate data={data} />)

    return (

        <div className="table-section">
            {/* <Toast ref={(el) => this.toast = el} /> */}
            <DataTable
                value={loadWorkDetails.payload}
                paginator={true}
                rows={7}
                header={header}
                selectionMode="single"
                selection={selectedRegistration}
                onSelectionChange={e => setSelectedRegistration(e.value)}
                expandedRows={expandedRows}
                onRowToggle={(e) => setExpandedRows(e.data)}
                rowExpansionTemplate={rowExpansionTemplate}
                dataKey="date"
                ref={dt}
                virtualRowHeight={3}
                rowsPerPageOptions={[5, 10, 15, 20, 25, 30, 40, 50, 75, 100, 150, 200, 250, 300, 365]}
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            >
                <Column expander={true} className="details-column-expender" />
                <Column field="date" header="Date" sortable={true} filter={true} filterPlaceholder={`Search By Date`} />
                <Column field="projectName" header="Project Name" sortable={true} filter={true} filterPlaceholder={`Search By Name`} />
                <Column field="arrivalTime" header="Arrival Time" />
                <Column field="departureTime" header="Departure Time" />
                <Column field="pause" header="Pause" />
                <Column field="comment" header="Comment" />
                <Column field="total" header="Total" />
                <Column body={actionBodyTemplate} />
            </DataTable>

            {/* Edit Dialog*/}

            <EditDialog
                visible={productDialog}
                footer={productDialogFooter}
                onHide={hideDialog}
                product={product}
                dateValue={product.date}
                dateChange={(e) => onInputChange(e, 'date')}
                projectNameValue={product.projectName}
                projectNameChange={(e) => onInputChange(e, 'projectName')}
                arrivalTimeValue={product.arrivalTime}
                arrivalTimeChange={(e) => onInputChange(e, 'arrivalTime')}
                departureTimeValue={product.departureTime}
                departureTimeChange={(e) => onInputChange(e, 'departureTime')}
                pauseValue={product.pause}
                pauseChange={(e) => onInputChange(e, 'pause')}
                commentValue={product.comment}
                commentChange={(e) => onInputChange(e, 'comment')}
            />

            {/* Delete Dialog */}

            <DeleteDialog
                itemName={`Record`}
                visible={deleteProductDialog}
                footer={deleteProductDialogFooter}
                onHide={hideDeleteProductDialog}
                setDisplayDialog={() => setDisplayDialog(false)}
                item={product}
            />

        </div>
    );
}
export default TableTest;
