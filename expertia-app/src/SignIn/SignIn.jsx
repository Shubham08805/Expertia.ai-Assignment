import React from "react";
import "./SignIn.css"
import  { useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { Link } from "react-router-dom";


export function SignIn() {
    const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const [showInvalidUser, setShowInvalidUser] = useState(false);
  const [showPassowrdError, setShowPassowrdError] = useState(false);
//   const {loggedInUser, setLoggedInUser} = useContext(UserContext);
  const validateUser = (userInfo) => {
   const userList = JSON.parse(localStorage.getItem('userData'));
  //  find the user using email
  // [1,2,3,4,5]
   const userFromLocalStorage =  userList.find((user) => {
    return user.email === userInfo.email
   })
   
    
    console.log(userFromLocalStorage);
    if(userFromLocalStorage.password === userInfo.password){
      console.log('test');
      
      navigate('/Home');
    }else{
      
    }
 
}
  

  const onSubmit = (e) => {
    let userInfo = {}
    e.preventDefault();
    userInfo[usernameRef.current.name] = usernameRef.current.value;
    userInfo[passwordRef.current.name] = passwordRef.current.value;
    // console.log(userInfo); //make an api call and save data 
    validateUser(userInfo);
  }

    return(
        <>
          <div className="signIn-container">
                <div className="signIn-form">
                    <div className="form-header">
                        <h1 className="signin-welcome">Welcome !</h1>
                        <h2 className="signin-to">Sign in to</h2>
                        <p className="signin-para">Lorem ipsum dolor sit.</p>
                    </div>
                 

                    <form onSubmit={onSubmit} id="signIn-content">
                        <label htmlFor="username" className="user">User name</label><br />
                        <input className="signin-input" type="text" name="email" id="username" placeholder="Enter your name" ref={usernameRef}/><br />
                        <label htmlFor="password" className="pwd">Password</label><br />
                        <input className="signin-input" type="password" name="password" id="password" placeholder="Enter your password" ref={passwordRef}/><br />
                        <div className="remember">
                            <span className=""><input className="signin-input" type="checkbox" name="" id="checkbox" />Remember me</span>
                            <span className="">Forgot Password?</span>
                        </div>
                        <input className="signin-input" type="submit" value="Login" id="login" />
                    </form>
                        {showInvalidUser && <>  <h3 style={{color: 'red'}}>you are not a user, please signup first</h3>
                        <input onClick={() => navigate('/signup')} className="signin-input" type="submit" value="Login" id="login"/>
                    </>}
                    {showPassowrdError && <h3 style={{color: 'red'}}>password doesnt match</h3>}
                        <div className="footer">
                            <span>Don't you have Account ? <Link to="/SignUp">Register</Link></span>
                            {/* <span>  Register</span> */}
                        </div>

                    
                </div>
                <div className="signIn-image">
                        <img className="signIn-pic" src="./images/Picture1.png" alt="" />   
                </div>
          </div>
        </>
    )

    }