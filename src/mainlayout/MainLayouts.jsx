import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const MainLayouts = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main className='min-h-[calc(100vh-300px)]'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayouts;