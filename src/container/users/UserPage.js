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
            <UsersForm />
            <UserList />
        </div>
    );
}
export default Users;
