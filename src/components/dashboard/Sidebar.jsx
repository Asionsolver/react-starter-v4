/* eslint-disable react/prop-types */
import UserImg from '../../assets/people/perfil.png'
import { MdBarChart } from "react-icons/md";
import { FiHome } from "react-icons/fi";
import { BsPeople } from "react-icons/bs";
import { MdOutlineSettings } from "react-icons/md";
import { FaRegCalendar } from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { useState } from 'react';
const Sidebar = ({ open }) => {
    // State to track the currently active item
    const [activeItem, setActiveItem] = useState(null);

    // Function to handle item click and update the active item
    const handleItemClick = (itemKey) => {
        setActiveItem(itemKey === activeItem ? null : itemKey); // Toggle active state
    };

    return (
        <nav className={`sidebar fixed  top-0 bottom-0 z-[100] w-72 bg-amber-50 py-6 m-3 shadow-lg rounded-2xl transition-left  transition-all duration-400 max-xs:w-[max-content] max-xl:left-0  max-xl:m-4 ${open ? "left-0 max-xl:w-[90px]" : "max-xs:-left-[120%] max-xl:w-[316px]"}`} id="sidebar">
            <div className="sidebar_container flex flex-col gap-y-12 h-full overflow-hidden">
                <div className={`sidebar__user grid grid-cols-[repeat(2,max-content)] items-center gap-x-4  max-xs:justify-center  max-xs:grid-cols-[max-content] max-xs:p-0 ${open ? "max-xl:pl-6" : "pl-8"}`}>
                    <div className="sidebar_img relative w-12 h-12 bg-blue-600 rounded-full overflow-hidden grid justify-items-center">
                        <img src={UserImg} alt="" className='absolute w-9 -bottom-[1px]' />
                    </div>
                    <div className={`sidebar__info max-xs:hidden ${open ? "opacity-0" : ""}`}>
                        <h3 className='text-[0.938rem] text-gray-900 transition-colors duration-400'>Ashis Kumar Paul</h3>
                        <span className='text-xs text-gray'>asion@gmail.com</span>
                    </div>
                </div>
                <div className="sidebar_content flex flex-col gap-y-12 overflow-x-hidden overflow-y-auto">
                    <div>
                        <h3 className={`sidebar__title w-[max-content] text-xs uppercase font-semibold mb-6 max-xs:mx-auto max-xs:px-2 ${open ? "max-xl:pl-0 max-xl:mx-auto" : "pl-8"}`}>Manage</h3>
                        <div className="sidebar__list grid gap-y-6  max-xs:justify-center">
                            <a href="#"
                                className={`sidebar__link flex items-center gap-x-4 pl-8 transition-colors text-xl duration-400 hover:text-primary text-gray max-xs:grid-cols-[max-content] max-xs:px-8 ${activeItem === 'dashboard' ? 'text-pineGreen  after:content-[] after:absolute after:left-0 after:w-1 after:h-5 after:bg-pineGreen' : ''}`}
                                onClick={() => handleItemClick('dashboard')}>
                                <MdBarChart />
                                <span className={`font-semibold max-xs:hidden ${open ? "opacity-0" : ""}`}>Dashboard</span>
                            </a>
                            <a href="#"
                                className={`sidebar__link flex items-center gap-x-4 pl-8 transition-colors text-xl duration-400 hover:text-primary text-gray max-xs:grid-cols-[max-content] max-xs:px-8 ${activeItem === 'mess' ? 'text-pineGreen after:content-[] after:absolute after:left-0 after:w-1 after:h-5 after:bg-pineGreen' : ''}`}
                                onClick={() => handleItemClick('mess')}>
                                <FiHome />
                                <span className={`font-semibold max-xs:hidden ${open ? "opacity-0" : ""}`}>Mess</span>
                            </a>

                            <a href="#" className={`sidebar__link flex items-center gap-x-4 pl-8 transition-colors text-xl duration-400  hover:text-primary text-gray max-xs:grid-cols-[max-content] max-xs:px-8`}>
                                <BsPeople />
                                <span className={`font-semibold max-xs:hidden ${open ? "opacity-0" : ""}`}>Border</span>
                            </a>
                            <a href="#" className={`sidebar__link flex items-center gap-x-4 pl-8 transition-colors text-xl duration-400  hover:text-primary text-gray max-xs:grid-cols-[max-content] max-xs:px-8`}>
                                <FaRegCalendar />
                                <span className={`font-semibold max-xs:hidden ${open ? "opacity-0" : ""}`}>Calendar</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className={`sidebar__title w-[max-content] text-xs uppercase font-semibold  mb-6 max-xs:mx-auto max-xs:px-2 ${open ? "max-xl:pl-0 max-xl:mx-auto" : "pl-8"}`}>Settings</h3>
                        <div className="sidebar__list grid gap-y-6  max-xs:justify-center">
                            <a href="#" className={`sidebar__link flex items-center gap-x-4 pl-8 transition-colors text-xl duration-400  hover:text-primary text-gray max-xs:grid-cols-[max-content] max-xs:px-8`}>
                                <MdOutlineSettings />
                                <span className={`font-semibold max-xs:hidden ${open ? "opacity-0" : ""}`}>Setting</span>
                            </a>
                            <a href="#" className={`sidebar__link flex items-center gap-x-4 pl-8 transition-colors text-xl duration-400  hover:text-primary text-gray max-xs:grid-cols-[max-content] max-xs:px-8`}>
                                <IoMailUnreadOutline />
                                <span className={`font-semibold max-xs:hidden ${open ? "opacity-0" : ""}`}>Mail</span>
                            </a>
                            <a href="#" className={`sidebar__link flex items-center gap-x-4 pl-8 transition-colors text-xl duration-400  hover:text-primary text-gray max-xs:grid-cols-[max-content] max-xs:px-8`}>
                                <IoMdNotificationsOutline />
                                <span className={`font-semibold max-xs:hidden ${open ? "opacity-0" : ""}`}>Notification</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="sidebar__actions grid gap-y-6 mt-auto  max-xs:justify-center">
                    <button className='flex items-center gap-x-4 pl-8 transition-colors text-xl duration-400 hover:text-primary text-gray cursor-pointer max-xs:px-8'>
                        <IoMoonOutline className='sidebar__link sidebar__theme ' id='theme-button' />
                        <span className={`font-semibold max-xs:hidden ${open ? "opacity-0" : ""}`}>Theme</span>
                    </button>
                    <button className='flex items-center gap-x-4 pl-8 transition-colors text-xl duration-400 hover:text-primary text-gray cursor-pointer max-xs:px-8'>
                        <IoIosLogOut className='sidebar__link ' />
                        <span className={`font-semibold max-xs:hidden ${open ? "opacity-0" : ""}`}>Logout</span>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Sidebar