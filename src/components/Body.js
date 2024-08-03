import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Body = () => {
    return (
        <div className='grid grid-flow-col'>
            <Sidebar/>
            {/* Configure what my Outlet will render. */}
            <Outlet/>
        </div>
    );
}

export default Body;