/* eslint-disable react/prop-types */
import { FaEnvelope } from "react-icons/fa";
import googleIcon from "../../assets/brand/google.png"
import faceBook from "../../assets/brand/facebook.png"
import { FaLock } from "react-icons/fa";


const Signup = ({ modeChange }) => {
    return (
        // ${ modeChange ? 'z-1 opacity-1' : 'z-1 opacity-0' }
        <form action="#" className={`sign-up-form form-container ${modeChange ? 'z-2 opacity-[1]' : 'z-1 opacity-0'}`}>
            <h2 className="title">Sign Up</h2>
            <div className="input-field">
                <div className="flex items-center justify-center">
                    <FaEnvelope className="text-center leading-[55px] text-gray text-lg" />
                </div>
                <input type="text" placeholder="Email" className="form-input font-bold text-[1.1rem] border-none bg-transparent  text-gray outline-none focus:ring focus:ring-transparent placeholder:text-gray-light placeholder:font-medium " />
            </div>
            <div className="input-field ">
                <div className="flex items-center justify-center">
                    <FaLock className="text-center leading-[55px] text-gray text-lg" />
                </div>

                <input type="password" placeholder="Password" className="form-input border-none bg-transparent font-bold text-[1.1rem]  text-gray outline-none placeholder:text-gray-light placeholder:font-medium  focus:ring focus:ring-transparent " />

            </div>
            <div className="input-field ">
                <div className="flex items-center justify-center">
                    <FaLock className="text-center leading-[55px] text-gray text-lg" />
                </div>

                <input type="password" placeholder="Confirm Password" className="form-input border-none bg-transparent font-bold text-[1.1rem]  text-gray outline-none placeholder:text-gray-light placeholder:font-medium  focus:ring focus:ring-transparent " />

            </div>




            <button className="btn solid ">Sign Up</button>
            <p className="py-[0.7rem] text-[1rem] text-text-primary">Already have an account? <span className="text-primary font-medium cursor-pointer hover:underline">Log in</span></p>
            <div className="w-[380px] mb-10 mt-5 flex items-center justify-center  gap-2">
                <div
                    className="w-1/2 bg-[linear-gradient(to_left,#696969_0%,#F0F0F0_100%)] h-[2px] rounded"
                ></div>
                <span className="text-xl uppercase text-gray">or</span>
                <div
                    className="w-1/2 bg-[linear-gradient(to_right,#696969_0%,#F0F0F0_100%)] h-[2px] rounded"
                ></div>
            </div>
            <div className="social-media">
                <div>
                    <a href="#" className="social-icon text-black" aria-label="social-Icon">
                        <img src={googleIcon} alt="" />
                        <span>Sign up with Google</span>
                    </a>
                    <a href="#" className="social-icon text-black" aria-label="social-Icon">
                        <img src={faceBook} alt="" className="h-7 w-7" />
                        <span>Sign up with Facebook</span>
                    </a>
                </div>
            </div>
        </form>
    )
}

export default Signup