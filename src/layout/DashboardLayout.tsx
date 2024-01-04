import React, { ReactNode } from 'react';
import DashboardMenu from '../components/DashboardMenu/DashboardMenu';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
        <DashboardMenu></DashboardMenu>
            <main>{children}</main>
        </>
    );
};

export default DashboardLayout;
