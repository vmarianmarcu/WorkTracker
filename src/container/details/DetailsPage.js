import React from 'react';
import Sidebar from 'components/Sidebar';
import Footer from 'components/Footer';
import Header from 'components/Header';
import RowTable from 'components/RowTable';

const Details = (props) => {
    console.log(props);

    return (
        <div className='containerDashboard'>
            <Header />
            <hr />
            <Sidebar />
            <RowTable />
            <Footer />
        </div>
    );
}
export default Details;
