import { useOutletContext } from "react-router"


const DashBoard = () => {
    const { open } = useOutletContext();
    // console.log(open)
    return (
        // <div className={`main  max-xl:pt-32 max-xl:transition-all max-xl:duration-400 ${open ? "max-xl:pl-[126px]" : "max-xl:pl-[340px]"}`}><h1 className="text-4xl text-gray font-semibold ">Dashboard Content</h1></div>
        <div className={` mt-5 text-4xl transition-all duration-400 text-white max-lg:ml-0 ${open ? "ml-[120px] " : "ml-[280px] "}`}>Dashboard</div>
    )
}

export default DashBoard