import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <div>
            header admin
            <Outlet />
            footer admin
        </div>
    );
};

export default AdminLayout;