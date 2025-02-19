/* eslint-disable react/prop-types */
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
        <div className={`min-h-[calc(100vh-40px)] max-lg:min-h-[calc(100vh-7.5rem)] rounded-xl transition-all duration-400 absolute bg-white top-5 flex flex-col items-center max-lg:top-[110px]  ${open ? "w-[90px] max-lg:w-[250px] max-lg:left-5" : "w-[250px] max-lg:-left-[120%]"}`}>
            <div className={`flex items-center gap-1 ${open ? "pt-3 max-lg:mt-3" : "pt-7"}`}>
                <IoSearch className={`text-3xl text-primary ${open ? "mt-4.5 max-lg:mt-0" : ""}`} />
                <h1 className={`text-2xl uppercase text-primary  font-semibold ${open ? "hidden max-lg:contents" : ""}`}>mess search</h1>
            </div>
            <ul className="flex flex-col mt-14 ">

                {Links.map((link) => (
                    <li
                        key={link.name}
                        onClick={() => handleItemClick(link.name)}
                        className={`relative  group  text-xl font-semibold py-4  cursor-pointer  ${open ? "max-lg:ml-[-32px] max-lg:rounded-r-full rounded-xl" : "ml-[-32px] rounded-r-full"} ${activeItem === link.name
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
                        {
                            open && <span
                                className={`max-lg:hidden absolute left-full rounded-md px-2 py-2 ml-6 mt-[-30px]  text-primary bg-white text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
                            >
                                {link.name}
                            </span>
                        }
                    </li>

                ))}

            </ul>


            <div
                onClick={() => handleItemClick("Logout")}
                className={`relative mt-auto group  flex items-center font-semibold gap-2 py-4 mb-4 cursor-pointer text-text-primary   ${open ? "max-lg:ml-[-36px] max-lg:pr-[81px] max-lg:pl-[38px]  max-lg:rounded-r-full px-[18px]" : "pr-[82px] pl-[41px] ml-[-32px] rounded-r-full"}  ${activeItem === "Logout" ? "bg-primary text-white rounded-xl" : ""}`}>
                <FiLogOut className="text-2xl" />
                <span className={`text-xl font-semibold ${open ? "hidden max-lg:contents" : ""}`}>Logout</span>

                {
                    open && <span
                        className={`max-lg:hidden absolute left-full rounded-md px-2 py-2 ml-6 mt-[0px]  text-primary bg-white text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 `}
                    >
                        Logout
                    </span>
                }

            </div>
        </div>
    )
}

export default Sidebar

// 