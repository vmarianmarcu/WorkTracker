import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import Input from 'components/Input';

const DataProjectTable = ({ projectData, addProjects }) => {

    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [project, setProject] = useState(null);
    const [displayDialog, setDisplayDialog] = useState(false);

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

    const onProjectSelect = (e) => {
        newProject = false;

        setProject(Object.assign({}, e.data));
        setDisplayDialog(true);
    };

    const dialogFooter = <div className="ui-dialog-buttonpane p-clearfix">
        <Button label="Delete" icon="pi pi-times" onClick={onDelete} />
        <Button label="Save" icon="pi pi-check" onClick={onSave} />
    </div>;

    const header = (
        <div className="table-header">
            <div className="p-clearfix" >Projects</div>
            <Button icon="pi pi-refresh" onClick={() => window.location.reload(false)} />
        </div>
    );


    return (
        <div className="table-section">
            <DataTable
                // value={projects}
                value={projectData.payload}
                paginator={true}
                rows={11}
                header={header}
                selectionMode="single"
                selection={selectedProject}
                onSelectionChange={e => setSelectedProject(e.value)}
                onRowSelect={onProjectSelect}
            >
                <Column field="name" header="Project Name" sortable={true} filter={true} filterPlaceholder={`Search By Name`} />
            </DataTable>

            <Dialog
                visible={displayDialog}
                className={`dialog-width`}
                header="Project Details"
                modal={true}
                footer={dialogFooter}
                onHide={() => setDisplayDialog(false)}
                blockScroll={false}
            >
                {
                    project &&

                    <div className="p-grid p-fluid">
                        <div className="p-col-4"><label htmlFor="projectName">Project Name</label></div>
                        <div className="p-col-8">
                            <Input
                                id="projectName"
                                type="text"
                                onChange={(e) => { updateProperty('projectName', e.target.value) }}
                                labelName="Project Name"
                                value={project.name}
                            />
                        </div>
                    </div>
                }
            </Dialog>
        </div>
    );
}
export default DataProjectTable;
