import React from 'react';
import Header from './../components/header';
import Footer from './../components/footer';
import { Outlet } from 'react-router-dom';

const SiteLayout = () => {
    return (
        <div>
            {/* <Header /> */}
               
                <Outlet />

            {/* <Footer /> */}
        </div>
    );
};

export default SiteLayout;