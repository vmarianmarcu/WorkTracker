import React, { Component } from 'react';
import { Panel } from 'primereact/panel';
import ListBox from 'components/ListBox';
import DeleteButton from 'components/DeleteButton';

class UserList extends Component {

    constructor() {
        super();
        this.state = {
            selectedUser: null
        };
    }

    render() {

        const { registredUsers } = this.props;

        return (
            <div className="user-list-content">
                <Panel header={`User list`} toggleable={true}>
                    <ListBox value={this.state.selectedUser} filter={true} filterPlaceholder="Search" options={registredUsers.payload} onChange={(e) => this.setState({selectedUser: e.value})} />
                    <DeleteButton className={`p-button-danger`} />
                </Panel>
            </div>
        )
    }
}
export default UserList;

