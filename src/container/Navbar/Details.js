import React from 'react';
import TAbMenu from "components/TabMenu";

const Details = (props) => {  
        console.log(props);
             
        return (
            <div className='containerDetails'>
                <form>
                    <TAbMenu />
                    <h3>Details</h3>
                </form>
            </div>
        );
    }
export default Details;
