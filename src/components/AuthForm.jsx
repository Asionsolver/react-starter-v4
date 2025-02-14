// import Login from "./auth/Login"

import Login from "./auth/Login"
import Signup from "./auth/Signup"

import leftImg from "../assets/auth/log.svg"
import rightImg from "../assets/auth/register.svg"
// import { useState } from "react"

const AuthForm = () => {
    // const [modeChange, setModeChange] = useState(false)

    // const handleSignUpMode = () => {
    //     setModeChange(true)
    // }

    // const handleSignInMode = () => {
    //     setModeChange(false)
    // }



    return (
        <div className="container">
            <div className="forms-container">
                <div className="signin-signup">
                    <Login />
                    <Signup />
                </div>
            </div>

            <div className="panel-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3 className="heading-two">New here?</h3>
                        <p className="heading-text">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                            ex ratione. Aliquid!
                        </p>
                        <button className="btn transparent cursor-pointer" id="sign-up-btn" >Sign up</button>
                    </div>
                    <img src={leftImg} className="image" alt="" />
                </div>


                <div className="panel right-panel">
                    <div className="content">
                        <h3 className="heading-two">New here?</h3>
                        <p className="heading-text">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                            ex ratione. Aliquid!
                        </p>
                        <button className="btn transparent cursor-pointer" id="sign-in-btn" >Sign in</button>
                    </div>
                    <img src={rightImg} className='image' alt="" />
                </div>

            </div>
        </div >
    )
}

export default AuthForm