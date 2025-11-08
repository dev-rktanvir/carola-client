import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../Components/Navbar/Navbar';

const MainLayouts = () => {
    return (
        <div className='relative'>
            <header className='absolute top-0 left-0 w-full z-50'>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default MainLayouts;