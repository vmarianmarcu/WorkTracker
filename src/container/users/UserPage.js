import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sidebar from 'components/Sidebar';
import 'static/users.css';
import UsersForm from './components/UsersForm';
import UserList from './components/UsersList';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { getCurrentUsers } from 'data/actions';

class UserPage extends Component {

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        const { loadRegistredUsers } = this.props;

        return (
            <div>
                <Header />
                <hr />
                <Sidebar />
                <div className="p-grid">
                    <div className="p-col-5">
                        <UserList registredUsers={loadRegistredUsers.payload} />
                    </div>
                    <div className="p-col-5">
                        <UsersForm />
                    </div>
                </div>
                <Footer />
            </div >
        );
    }
}

function mapStateToProps(state) {
    const { loadRegistredUsers } = state;
    return { loadRegistredUsers };
}

const actionCreators = {
    fetchUsers: getCurrentUsers
}

export default connect(mapStateToProps, actionCreators)(UserPage);
