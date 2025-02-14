import Login from "./auth/Login"
import Signup from "./auth/Signup"
import leftImg from "../assets/auth/log.svg"
import rightImg from "../assets/auth/register.svg"
import { useState } from "react"

const AuthForm = () => {
    const [modeChange, setModeChange] = useState(false)

    const handleSignUpMode = () => {
        // console.log('clicked')
        setModeChange(true)
    }

    const handleSignInMode = () => {
        setModeChange(false)
    }



    return (
        <div className={`container  ${modeChange ? ' before:translate-x-[100%] before:translate-y-[-50%] before:right-[52%]' : ' before:right-[48%] before:translate-y-[-50%]'}`}>
            <div className="forms-container">
                <div className="signin-signup">
                    <Login />
                    <Signup />
                </div>
            </div>

            <div className="panel-container">
                <div className={`panel left-panel ${modeChange ? "pointer-events-none" : "pointer-events-auto"}`}>
                    <div className={`content ${modeChange ? 'transform translate-x-[-800px]' : 'transform translate-x-0'}`}>
                        <h3 className="heading-two">Log here?</h3>
                        <p className="heading-text">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                            ex ratione. Aliquid!
                        </p>
                        <button className="btn transparent cursor-pointer" id="sign-up-btn" onClick={handleSignUpMode}>Sign up</button>
                    </div>
                    <img src={leftImg} className={`image ${modeChange ? 'transform translate-x-[-800px]' : 'transform translate-x-0'}`} alt="" />
                </div>


                <div className={`panel right-panel ${modeChange ? "pointer-events-auto" : "pointer-events-none"}`}>
                    <div className={`content ${modeChange ? 'transform translate-x-[0px]' : 'transform translate-x-[800px]'}`}>
                        <h3 className="heading-two">New here?</h3>
                        <p className="heading-text">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                            ex ratione. Aliquid!
                        </p>
                        <button className="btn transparent cursor-pointer" id="sign-in-btn" onClick={handleSignInMode}>Sign in</button>
                    </div>
                    <img src={rightImg} className={`image ${modeChange ? 'transform translate-x-[0px]' : 'transform translate-x-[800px]'}`} alt="" />
                </div>

            </div>
        </div >
    )
}

export default AuthForm