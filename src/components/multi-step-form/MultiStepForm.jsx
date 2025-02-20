/* eslint-disable react/prop-types */

import FormInput from "./FormInput"
import Step from "./Step"


const MultiStepForm = ({ setIsModalOpen }) => {
    return (
        <div>
            <div className="space-y-5 p-4 ">
                <Step />
                <FormInput />
                <div className="flex justify-end mr-10">
                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="rounded-md bg-blue-500 px-10 py-2 text-white hover:bg-blue-600 "
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MultiStepForm