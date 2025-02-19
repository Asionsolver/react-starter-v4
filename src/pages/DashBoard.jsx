import { useState } from "react";
import { useOutletContext } from "react-router"
import Modal from "../components/modal/Modal";


const DashBoard = () => {
    const { open } = useOutletContext();
    const [isModalOpen, setIsModalOpen] = useState(false);
    // console.log(open)
    return (
        // <div className={`main  max-xl:pt-32 max-xl:transition-all max-xl:duration-400 ${open ? "max-xl:pl-[126px]" : "max-xl:pl-[340px]"}`}><h1 className="text-4xl text-gray font-semibold ">Dashboard Content</h1></div>
        <div className={`bg-white min-h-[calc(100vh-140px)] rounded-xl mt-5  transition-all duration-400 max-lg:ml-0 ${open ? "ml-[120px] " : "ml-[280px] "}`}>
            <div className="p-5 text-text-primary">
                <div>
                    <h1 className="font-semibold text-2xl">Dashboard</h1>
                    <p className="text-sm">Welcome to SearchMess Admin Dashboard</p>
                </div>

                <div className="my-4">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                    >
                        Open Modal
                    </button>

                    <Modal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        title="Example Modal"
                    >
                        <div className="space-y-4">
                            <p>This is an example modal content.</p>
                            <p>You can put any content here!</p>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 "
                            >
                                Close Modal
                            </button>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default DashBoard