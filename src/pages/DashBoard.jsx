/* eslint-disable react/prop-types */

import { useOutletContext } from "react-router"


const DashBoard = () => {
    const { open } = useOutletContext();
    console.log(open)
    return (
        <div className={`main  max-xl:pt-32 max-xl:transition-all max-xl:duration-400 ${open ? "max-xl:pl-[126px]" : "max-xl:pl-[340px]"}`}><h1 className="text-4xl text-gray font-semibold ">Dashboard Content</h1></div>
    )
}

export default DashBoard