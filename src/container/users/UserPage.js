import React from 'react';
import Sidebar from 'components/Sidebar';
import 'static/users.css';
import UsersForm from './components/UsersForm';
import UserList from './components/UsersList';

const Users = (props) => {
    console.log(props);

    return (
        <div>
            <Sidebar />
            <div className="p-grid">
                <div className="p-col-5">
                    <UserList />
                </div>
                <div className="p-col-5">
                    <UsersForm />
                </div>
            </div>
        </div >
    );
}
export default Users;
