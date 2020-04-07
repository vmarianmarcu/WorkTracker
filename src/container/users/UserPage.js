import React from 'react';
import Sidebar from 'components/Sidebar';
import 'static/users.css';
import UsersForm from './components/UsersForm';
import UserList from './components/UsersList';
import Footer from 'components/Footer';
import Header from 'components/Header';

const Users = (props) => {
    console.log(props);

    return (
        <div>
            <Header />
            <hr />
            <Sidebar />
            <div className="p-grid">
                <div className="p-col-5">
                    <UserList />
                </div>
                <div className="p-col-5">
                    <UsersForm />
                </div>
            </div>
            <Footer />
        </div >
    );
}
export default Users;
