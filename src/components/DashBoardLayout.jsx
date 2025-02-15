
import { Outlet } from 'react-router';
import Navbar from './dashboard/Navbar';
import Sidebar from './dashboard/Sidebar';
import { useState } from 'react';

const DashBoardLayout = () => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        // console.log('clicked');
        setOpen(!open);
    }
    return (
        <div>
            <Navbar handleToggle={handleToggle} open={open} />
            <Sidebar open={open} />
            <Outlet context={{ open }} />
        </div>
    )
}

export default DashBoardLayout;
