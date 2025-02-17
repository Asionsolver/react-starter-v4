/* eslint-disable react/prop-types */
// import UserImg from '../../assets/people/perfil.png'
// import { MdBarChart } from "react-icons/md";
// import { FiHome } from "react-icons/fi";
// import { BsPeople } from "react-icons/bs";
// import { MdOutlineSettings } from "react-icons/md";
// import { FaRegCalendar } from "react-icons/fa";
// import { IoMailUnreadOutline } from "react-icons/io5";
// import { IoMdNotificationsOutline } from "react-icons/io";
// import { IoMoonOutline } from "react-icons/io5";
// import { IoIosLogOut } from "react-icons/io";
// import { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { MdDashboardCustomize } from "react-icons/md";
import { FiHome } from "react-icons/fi";
import { IoPeopleOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { useState } from "react";


const Sidebar = ({ open }) => {
    // State to track the currently active item
    const [activeItem, setActiveItem] = useState(null);

    // Function to handle item click and update the active item
    const handleItemClick = (itemKey) => {
        console.log(itemKey);
        setActiveItem(itemKey === activeItem ? null : itemKey); // Toggle active state
    };
    let Links = [
        { name: "Dashboard", icon: <MdDashboardCustomize /> },
        { name: "Mess", icon: <FiHome /> },
        { name: "Border", icon: <IoPeopleOutline /> },
        { name: "Setting", icon: <IoSettingsOutline /> },
    ];
    return (
        <div className={`min-h-[calc(100vh-40px)] max-lg:min-h-[calc(100vh-7.5rem)] overflow-y-auto rounded-xl transition-all duration-400 absolute bg-white top-5 flex flex-col items-center max-lg:top-[110px]  ${open ? "w-[90px] max-lg:w-[250px] max-lg:left-5" : "w-[250px] max-lg:-left-[120%]"}`}>
            <div className={`flex items-center gap-1 ${open ? "pt-3 max-lg:mt-3" : "pt-7"}`}>
                <IoSearch className={`text-3xl text-primary ${open ? "mt-4.5 max-lg:mt-0" : ""}`} />
                <h1 className={`text-2xl uppercase text-primary  font-semibold ${open ? "hidden max-lg:contents" : ""}`}>mess search</h1>
            </div>
            <ul className="flex flex-col mt-14">

                {Links.map((link) => (
                    <li
                        key={link.name}
                        onClick={() => handleItemClick(link.name)}
                        className={`text-xl font-semibold py-4  cursor-pointer  ${open ? "max-lg:ml-[-32px] max-lg:rounded-r-full rounded-xl" : "ml-[-32px] rounded-r-full"} ${activeItem === link.name
                            ? "bg-primary text-white" // Active item style
                            : "text-text-primary" // Default style
                            }`}>
                        <a
                            href="#"
                            className={`flex items-center gap-2 ${open ? "max-lg:pr-[49px] max-lg:pl-[41px] px-[18px] " : "pr-[49px]  pl-[41px] "} `}
                        >
                            <span className="text-2xl">{link.icon}</span>
                            <span className={`text-xl font-semibold ${open ? "hidden max-lg:contents" : ""}`}>{link.name}</span>
                        </a>
                    </li>
                ))}
            </ul>

            <div
                onClick={() => handleItemClick("Logout")}
                className={`mt-auto flex items-center font-semibold gap-2 py-4 mb-4 cursor-pointer text-text-primary   ${open ? "max-lg:pr-[84px] max-lg:pl-[50px] max-lg:ml-[-42px] max-lg:rounded-r-full px-[18px]" : "pr-[82px] pl-[41px] ml-[-32px] rounded-r-full"}  ${activeItem === "Logout" ? "bg-primary text-white rounded-xl" : ""}`}>
                <FiLogOut className="text-2xl" />
                <span className={`text-xl font-semibold ${open ? "hidden max-lg:contents" : ""}`}>Logout</span>
            </div>
        </div>
    )
}

export default Sidebar

