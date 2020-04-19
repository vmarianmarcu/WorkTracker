import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Sidebar from 'components/Sidebar';
import 'static/users.css';
// import UsersForm from './components/UsersForm';
// import UserList from './components/UsersList';
// import Footer from 'components/Footer';
// import Header from 'components/Header';
import { getCurrentUsers } from 'data/actions';

class Users extends Component {
    state = {
        isLoading: true,
        users: [],
        error: null
    }

    componentDidMount() {
        // this.fetchUsers();
        this.props.fetchUsers();
    }

    // fetchUsers() {
    //     // Where we're fetching data from
    //     fetch(`http://localhost:4000/registredUsers`)
    //         // We get the API response and receive data in JSON format...
    //         .then(response => response.json())
    //         // ...then we update the users state
    //         .then(data =>
    //             this.setState({
    //                 users: data,
    //                 isLoading: false,
    //             })
    //         )
    //         // Catch any errors we hit and update the app
    //         .catch(error => this.setState({ error, isLoading: false }));
    // }

    render() {
        const { isLoading, users, error } = this.state;

        return (

            <React.Fragment>
                <h1>Random User</h1>
                {/* // Display a message if we encounter an error */}
                {error ? <p>{error.message}</p> : null}
                {/* // Here's our data check */}
                {!isLoading ? (
                    users.map(user => {
                        // const { username, name, id, email, password } = user;
                        return (
                            <div key={user.id}>
                                {/* <p>Name: {user.name}</p>
                                <p>Id: {user.id}</p> */}
                                <p>Email Address: {user.email}</p>
                                <p>Password: {user.password}</p>
                                <hr />
                            </div>
                        );
                    })
                    // If there is a delay in data, let's let the user know it's loading
                ) : (
                        <h3>Loading...</h3>
                    )}
            </React.Fragment>
        );
    }

}

function mapStateToProps(state) {
    const { users } = state;
    return { users };
}

const actionCreators = {
    fetchUsers: getCurrentUsers
}

export default connect(mapStateToProps, actionCreators)(Users);

// export default Users;

    // render() {

    //     return (
    //         <div>
    //             <Header />
    //             <hr />
    //             <Sidebar />
    //             <div className="p-grid">
    //                 <div className="p-col-5">
    //                     <UserList />
    //                 </div>
    //                 <div className="p-col-5">
    //                     <UsersForm />
    //                 </div>
    //             </div>
    //             <Footer />
    //         </div >
    //     );
    // }
