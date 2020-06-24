import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import ProjectForm from './ProjectForm';

const DataTableCrudDemo = ({ projectData, addProjects }) => {

    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [project, setProject] = useState(null);
    const [displayDialog, setDisplayDialog] = useState(false);

    let newProject = false;

    useEffect(() => {
        // carservice.getCarsSmall().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

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

    const onProjectSelect = (e) => {
        newProject = false;

        setProject(Object.assign({}, e.data));
        setDisplayDialog(true);
    };

    const addNew = () => {
        newProject = true;

        setProject({ projectName: '' });
        setDisplayDialog(true);
    };

    const header = <div className="p-clearfix" style={{ lineHeight: '1.87em' }}> Projects </div>;

    const footer = <div className="p-clearfix" style={{ width: '100%' }}>
        <Button style={{ float: 'left' }} label="Add" icon="pi pi-plus" onClick={addNew} />
    </div>;

    const dialogFooter = <div className="ui-dialog-buttonpane p-clearfix">
        <Button label="Delete" icon="pi pi-times" onClick={onDelete} />
        <Button label="Save" icon="pi pi-check" onClick={onSave} />
    </div>;

    return (
        <div>
            <DataTable
                // value={projects}
                value={projectData.payload}
                paginator={true}
                rows={15}
                header={header}
                footer={footer}
                selectionMode="single"
                selection={selectedProject}
                onSelectionChange={e => setSelectedProject(e.value)}
                onRowSelect={onProjectSelect}
            >
                <Column field="projectName" header="Project Name" sortable={true} />
            </DataTable>

            <Dialog
                visible={displayDialog}
                style={{ width: '400px' }}
                header="Project Details"
                modal={true}
                footer={dialogFooter}
                onHide={() => setDisplayDialog(false)}
                blockScroll={false}
            >
                {
                    project &&

                    <div className="p-grid p-fluid">
                        {/* <div className="p-col-4" style={{ padding: '.75em' }}><label htmlFor="projectName">Project Name</label></div> */}
                        <div className="p-col-8" style={{ padding: '.5em' }}>
                            {/* <InputText id="projectName" onChange={(e) => { updateProperty('projectName', e.target.value) }} value={project.projectName} /> */}
                            <ProjectForm addProjects={addProjects} />
                        </div>
                    </div>
                }
            </Dialog>
        </div>
    );
}
export default DataTableCrudDemo;
