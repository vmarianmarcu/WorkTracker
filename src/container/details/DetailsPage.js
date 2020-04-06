import React from 'react';
import Table from 'components/Table';
import Sidebar from 'components/Sidebar';
import FlexGridDemo from 'components/FlexGrid';
import 'static/details.css';

const Details = (props) => {  
        console.log(props);
             
        return (
            <div>
                {/* <Sidebar /> */}
                <FlexGridDemo />
                <form>
                    {/* <Table /> */}
                </form>
            </div>
        );
    }
export default Details;
