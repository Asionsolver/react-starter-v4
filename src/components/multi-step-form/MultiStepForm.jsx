/* eslint-disable react/prop-types */

import Step from "./Step"


const MultiStepForm = ({ setIsModalOpen }) => {
    return (
        <div>
            <div className="space-y-5 p-4">
                <Step />
                <p>This is an example modal content.</p>
                <p>You can put any content here!</p>
                <button
                    onClick={() => setIsModalOpen(false)}
                    className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 "
                >
                    Close
                </button>
            </div>
        </div>
    )
}

export default MultiStepForm