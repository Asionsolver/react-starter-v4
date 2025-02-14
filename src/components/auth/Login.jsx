/* eslint-disable react/prop-types */

import { FaEnvelope } from "react-icons/fa";
import googleIcon from "../../assets/brand/google.png"
import faceBook from "../../assets/brand/facebook.png"
import { FaLock } from "react-icons/fa";

const Login = ({ modeChange }) => {
    // ${ modeChange ? ' z-2' : 'z-1 opacity-0' }
    return (
        <form action="#" className={`sign-in-form form-container  ${modeChange ? 'z-1 opacity-[0]' : 'z-2'}`}>
            <h2 className="title">Sign in</h2>
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

            <div className="max-w-[23.75rem] w-full flex justify-between items-center ">
                <div className="flex items-center gap-2">
                    <input type="checkbox" name="remember" className="form-checkbox rounded text-primary  border-gray-300  focus:ring-primary cursor-pointer" />
                    <label htmlFor="remember" className="text-gray font-medium">Remember me</label>
                </div>
                <p className="text-primary font-medium cursor-pointer">Forgot Password?</p>
            </div>


            <button className="btn solid ">Log in</button>
            <p className="py-[0.7rem] text-[1rem] text-text-primary">Are you new? <span className="text-primary font-medium cursor-pointer hover:underline">Create an Account</span></p>
            <div className="w-[380px] mb-10 mt-5 flex items-center justify-center  gap-2">
                <div
                    className="w-1/2 bg-[linear-gradient(to_left,#696969_0%,#F0F0F0_100%)] h-[2px] rounded"
                ></div>
                <span className="text-lg uppercase text-gray">or</span>
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

export default Login