import React, { Fragment, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import EditDialog from './EditDialog';
import DeleteDialog from 'components/dialogs/DeleteDialog';
import AddProject from './AddProject';

const DataProjectTable = ({ projectData, addProject }) => {

    const emptyProject = {
        id: null
    };

    const [project, setProject] = useState(emptyProject);
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    // const [project, setProject] = useState(null);
    const [displayDialog, setDisplayDialog] = useState(false);
    const [deleteProjectDialog, setDeleteProjectDialog] = useState(false);
    const [displayAddDialog, setDisplayAddDialog] = useState(false);

    let newProject = false;

    const onSave = () => {
        let _projects = [...projects];
        if (newProject)
            _projects.push(project);
        else
            _projects[findSelectedProjectIndex()] = project;

        setProjects(projects);
        setSelectedProject(null);
        setProject(null);
        setDisplayDialog(false);
    };

    const onDelete = () => {
        let index = findSelectedProjectIndex();

        setProjects(projects.filter((val, i) => i !== index));
        setSelectedProject(null);
        setProject(null);
        setDisplayDialog(false);
    };

    const findSelectedProjectIndex = () => {
        return projects.indexOf(selectedProject);
    };

    const updateProperty = (property, value) => {
        project[property] = value;
        setProject(project);
    }

    // const onProjectSelect = (e) => {
    //     newProject = false;

    //     setProject(Object.assign({}, e.data));
    //     setDisplayDialog(true);
    // };

    const header = (
        <div className="table-header">
            <div className="p-clearfix" >Projects</div>
        </div>
    );

    const headerEditColum = (
        <div className="table-header">
            {/* <div className="p-clearfix" >Add</div> */}
            <Button icon="pi pi-plus" className="p-button-rounded p-button-info p-button-text" onClick={(e) => addProjectDialog(e)} />
            <Button icon="pi pi-refresh" className="p-button-rounded p-button-success p-button-text" onClick={() => window.location.reload(false)} />
        </div>
    );

    const onHideDialog = () => {
        setDisplayDialog(false);
    }

    const editProject = (project) => {
        setProject({ ...project })
        setDisplayDialog(true)
    }

    const confirmDeleteProject = () => {
        setDeleteProjectDialog(true);
    }

    const addProjectDialog = () => {
        setDisplayAddDialog(true);
    };

    const hideAddDialog = () => {
        setDisplayAddDialog(false);
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <Fragment>
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-mr-2" onClick={() => editProject(rowData)} />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" onHideDialog={(e) => onHideDialog(e)} onClick={(e) => confirmDeleteProject(e)} />
            </Fragment>
        );
    }

    const dialogFooter = <div className="ui-dialog-buttonpane p-clearfix">
        <Button label="Cancel" icon="pi pi-times" onClick={onHideDialog} />
        <Button label="Save" icon="pi pi-check" onClick={onSave} />
    </div>;

    const deleteProject = () => {
        let projects = this.filter(
            (val) => val.id !== this.state.project.id
        );
        this.setState({
            projects,
            deleteProjectDialog: false,
            project: this.emptyProject
        });
        // this.toast.show({ 
        //     severity: "success",
        //     summary: "Successful",
        //     detail: "Project Deleted",
        //     life: 3000
        // });
    }

    const hideDeleteProjectDialog = () => {
        setDeleteProjectDialog(false)
    }

    const deleteProjectDialogFooter = (
        <Fragment>
            <Button
                label="No"
                icon="pi pi-times"
                className="p-button-text"
                onClick={hideDeleteProjectDialog}
            />
            <Button
                label="Yes"
                icon="pi pi-check"
                className="p-button-text"
                onClick={deleteProject}
            />
        </Fragment>
    );

    return (
        <div className="table-section">
            <DataTable
                // value={projects}
                value={projectData.payload}
                paginator={true}
                rows={7}
                header={header}
                selectionMode="single"
                selection={selectedProject}
                onSelectionChange={e => setSelectedProject(e.value)}
            // onRowSelect={onProjectSelect}
            >
                <Column field="name" header="Project Name" sortable={true} filter={true} filterPlaceholder={`Search By Name`} />
                <Column field="tools" header={headerEditColum} body={actionBodyTemplate} />
            </DataTable>

            {/* Add Project Dialog */}

            <AddProject addProject={addProject} visible={displayAddDialog} onHideDialog={hideAddDialog} />

            {/* Edit Dialog*/}

            <EditDialog
                visible={displayDialog}
                footer={dialogFooter}
                onHide={() => setDisplayDialog(false)}
                project={project}
                onChange={(e) => { updateProperty('projectName', e.target.value) }}
                value={project}
            />

            {/* Delete Dialog */}

            <DeleteDialog
                itemName={`Project`}
                visible={deleteProjectDialog}
                footer={deleteProjectDialogFooter}
                onHide={hideDeleteProjectDialog}
                setDisplayDialog={() => setDisplayDialog(false)}
                item={project}
            />
        </div>
    );
}
export default DataProjectTable;
