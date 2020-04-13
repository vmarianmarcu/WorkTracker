import React from 'react';
import Sidebar from 'components/Sidebar';
import Footer from 'components/Footer';
import Header from 'components/Header';
import 'static/details.css';

const Details = (props) => {
    console.log(props);

    return (
        <div className='containerDashboard'>
            <Header />
            <hr />
            <Sidebar />
            <Footer />
        </div>
    );
}
export default Details;
