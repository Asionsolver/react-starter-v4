/* eslint-disable react/prop-types */
// import BrandLogo from '../../assets/brand/brand.png'
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
// const Navbar = ({ handleToggle, open }) => {
//     return (
//         <header className={`header fixed z-[100] m-3 top-0 left-0 right-0 max-xl:transition-all max-xl:duration-400  ${open ? "max-xl:pl-[114px]" : "max-xl:pl-[340px] max-xl:m-4"}`} id="header">
//             <div className="header__container flex w-full h-20 items-center justify-between bg-amber-50 rounded-2xl shadow-lg transition-colors duration-400 px-6 max-xs:px-4 max-xl:px-8">
//                 <a href="#" className="header__logo max-xl:order-1">
//                     <img src={BrandLogo} alt="" />
//                 </a>
//                 <button className='header__toggle text-3xl cursor-pointer' id='header_toggle' onClick={handleToggle}>
//                     <IoMdMenu className='text-gray' />
//                 </button>
//             </div>
//         </header>
//     )
// }


// 
const Navbar = ({ handleToggle, open }) => {
    return (
        <div className={`bg-white py-2.5 px-6 h-20 transition-all duration-400 rounded-xl shadow-lg flex items-center justify-between max-lg:ml-0 ${open ? "ml-[120px]" : "ml-[280px]"}`}>
            <button className='text-3xl cursor-pointer' >
                {
                    open ? <IoMdClose className={`text-gray `} onClick={handleToggle} /> : <IoMdMenu className='text-gray' onClick={handleToggle} />
                }
            </button>
            <div>
                <div className="h-10 w-10 bg-amber-600 rounded-full"></div>
            </div>
        </div>
    )
}


export default Navbar