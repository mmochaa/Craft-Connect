import React from 'react'
import { useState } from 'react';
import "./login.css"
import "./signin.css"

const login = () => {

    {/*Getting ready for buttons???*/}
    const [action,setAction] = useState("Log In");

  return (
    <div>
      <div className='auth-form-container'>
        <div className="login-form">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        {/*Prep for input handling*/}
        <div className="inputs">
            {/*Email*/}
            <div className="input">
               <input type="email" placeholder="Email" />
            </div>
            {/*Password*/}
            <div className="input">
               <input type="password" placeholder="Password"/>
            </div>
        </div>
        <div className="forgot-password">Forgot password?<span>Click here!</span></div>
        <div className="submit-container">
            <div className={action=="Sign Up"?"sumbit gray":"submit"} onClick={()=>{setAction("Log In")}}>Login</div>
            <div className={action=="Log In"?"sumbit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        </div>
      </div>
    </div>
  )
}

export default login