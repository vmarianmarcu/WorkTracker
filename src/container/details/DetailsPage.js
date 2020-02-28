import React from 'react';
import Table from 'components/Table';
import Sidebar from 'components/Sidebar';

const Details = (props) => {  
        console.log(props);
             
        return (
            <div className='containerDetails'>
                {/* <Sidebar /> */}
                <form>
                    <Table />
                </form>
            </div>
        );
    }
export default Details;
