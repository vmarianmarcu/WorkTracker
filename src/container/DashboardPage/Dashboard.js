import React, { Component } from 'react';
import ProjectList  from '../../components/ProjectsList';
import { connect } from 'react-redux';
import AddProject from '../../components/AddProject';

import Navbar from '../Navbar/Navbar'; 
import '../../static/dashboard.css';

import { getProjects, getProjectsPending, getProjectsError } from '../../reducers/project.reducer';
import { bindActionCreators } from 'redux';
import { projectActions } from '../../actions/project.actions';

class Dashboard extends Component {  

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }

    // componentWillMount() {
    //     const { fetchProjects } = this.props;
    //     fetchProjects();
    // }

    componentDidMount() {

      fetch('http://localhost:3000/projects')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json,
            })
        })
    }

    
    render(){
        // const { projects, error } = this.props; 
            const { isLoaded, items } = this.state;
              if (!isLoaded) {
                  return <div>Loading...</div>;
              }  
              else {
                  return (
                      <div>
                          <ul>
                              {items.map(item => (
                                  <li key={item.id}>
                                      { item.name }
                                  </li>
                              ))};
                          </ul>
                      </div>
                  )
              }






            // <div className='containerDashboard'>
            //     <div>
            //         <Navbar />
            //         <h3>Dashboard</h3>
            //         <AddProject />
            //     </div>
            //     {/* <div className='product-list-wrapper'>
            //         {error && <span className='product-list-error'>{error}</span>}
            //         <ProjectList project={projects} />
            //     </div> */}

            
           
            // </div>
    }
}

const mapStateToProps =  state => ({
    error: getProjectsError(state),
    projects: getProjects(state),
    pending: getProjectsPending(state)
})

// const mapDispatchToProps = dispatch => bindActionCreators({
    
// }, dispatch)

const actionCreators = {
    projects: projectActions.getAll,
};

export default connect(mapStateToProps, actionCreators) (Dashboard);