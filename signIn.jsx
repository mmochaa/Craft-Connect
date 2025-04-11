import React from 'react'
import { useState } from 'react';
import "./signIn.css"


 const signIn = (props) => {
    var [email, setEmail] = useState('');
    var [pass, setPass] = useState('');

//const username = document.getElementById('username').value;
// const password = document.getElementById('password').value;

    const handleSubmit = (e) => {
        e.preventDefault();
       email = document.getElementById('email').value;
       password = document.getElementById('password').value;
    }

    return (
      <>
      <div class="split-screen">
        <div className="auth-form-container left-panel">
            <h2>CraftConnect</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn2" onClick={() => props.onFormSwitch('terms')}>I agree to CraftConnect's Terms of Service..</button>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
        <div class="right-panel"> </div>
        </div>
        </>
    )
}

export default signIn;