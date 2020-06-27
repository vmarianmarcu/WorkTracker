import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Sidebar from 'components/Sidebar';
import UsersTable from './components/UsersTable'
import Footer from 'components/Footer';
import Header from 'components/Header';
import { getCurrentUsers } from 'data/actions';
import { postNewUser } from 'data/actions';
import AddUser from './components/AddUser';

class UserPage extends Component {

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        const { loadRegistredUsers, addUser } = this.props;

        return (
            <Fragment>
                <Header />
                <Sidebar />
                <AddUser addUser={addUser} />
                <UsersTable registredUsers={loadRegistredUsers} />
                <Footer />
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    const { loadRegistredUsers } = state;
    return { loadRegistredUsers };
}

const actionCreators = {
    fetchUsers: getCurrentUsers,
    addUser: postNewUser
}

export default connect(mapStateToProps, actionCreators)(UserPage);
