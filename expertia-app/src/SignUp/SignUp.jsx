import React, { useRef } from 'react'
import "./SignUp.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function SignUp() {

  const nameRef =  useRef();
  const emailRef =  useRef();
  const passwordRef = useRef();
  const confirmPassRef = useRef();
  const navigate = useNavigate();
  
  const saveUser = (user) => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    console.log('userData', userData.length);
    if(userData){
        userData.push(user)
        localStorage.setItem('userData', JSON.stringify(userData))
    }else{
        let userList = []
        userList.push(user)
        localStorage.setItem('userData', JSON.stringify(userList))
    }
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    let userInfo = {}
    userInfo[nameRef.current.name] = nameRef.current.value;
    userInfo[emailRef.current.name] = emailRef.current.value;
    userInfo[passwordRef.current.name] = passwordRef.current.value;
    userInfo[confirmPassRef.current.name] = confirmPassRef.current.value;
    
    console.log(userInfo);
    saveUser(userInfo);
    navigate('/Home')
  }
  

  return (
    <>
      <div className="signUp-container">
        <div className="signUp-form">  
          <div className="signUp-form-header">   
            <h1 className="signUp-welcome">Welcome !</h1>  
            <h2 className="signUp-to">Sign up to</h2>  
            <p className="signUp-para">Lorem ipsum dolor sit.</p>  
          </div>
          
          <form action="" id="signUp-content" onSubmit={onSubmit}>
            <label className="signup-label" htmlFor="email">Email</label><br />
            <input className="signup-input" type="email" name="email" id="email" placeholder='Enter your email' useRef={emailRef} /><br />
            <label className="signup-label" htmlFor="username">User name</label><br />
            <input className="signup-input" type="text" name="name" id="username" placeholder='Enter your user name' useRef={nameRef}/><br />            
            <label className="signup-label" htmlFor="password">Password</label><br />            
            <input className="signup-input" type="password" name="password" id="password" placeholder='Enter your password' useRef={passwordRef}/><br />
            <label className="signup-label" htmlFor="confirm-password">Confirm Password</label><br />
            <input className="signup-input" type="password" name="confirmpassword" id="confirm-password" placeholder='Confirm your password' useRef={confirmPassRef} /><br />
            
            <input className="signup-input" type="submit" value="Register" id="register"/> 
          </form>
            <div className="signup-footer">  
              <span>Already have an Account ? <Link to="/">Login</Link></span>  
              {/* <span>  </span>   */}
            </div>  
              
        </div>
        <div className="signUp-image"> 
          <img className="signUp-pic" src="./images/Picture1.png" alt="" />   
        </div> 
      </div>
      
    </>
  )
}

export default SignUp