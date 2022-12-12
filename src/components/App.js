import React, { useRef, useState } from "react";
import "../styles/App.css";
import User from "../models/user";

const App = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isLoggenIn, setIsLoggedIn] = useState(false);
  const [user,setUser] = useState({name:'',email:'',password:''});
  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  const confPassRef = useRef();
  const loginEmailRef = useRef();
  const loginPassRef = useRef();
  const signUpHandler = (e)=> {
    // e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const pwd = passRef.current.value;
    const cpwd = confPassRef.current.value;
    console.log(pwd,cpwd);
    if(!name || !email || !pwd || !cpwd) return;
    if(pwd === cpwd) {
      setUser({name,email,password:pwd})
      setIsSignedUp(true);
      // console.log('yes');
    }
  }
  const handleLogin = ()=> {
    const enteredEmail = loginEmailRef.current.value;
    const enteredPassword = loginPassRef.current.value;
    if(isSignedUp && enteredEmail === user.email && enteredPassword == user.password){
      setIsLoggedIn(true);
    }
  }

  const handleLogout = ()=> {
    setIsLoggedIn(false);
  }
  return (
    <div id="main">
      <table id="all-users">
      <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
          <tr>
            <td>{isSignedUp && user.name}</td>
            <td>{isSignedUp && user.email}</td>
            <td>{isSignedUp && user.password}</td>
          </tr>
        </tbody>
      </table>

      <div>
        <form className="signup-form" onSubmit={(e)=>{e.preventDefault()}}>
          <label htmlFor="name">Name</label>
          <input type="text" name="signupName" id="signupName" ref={nameRef}/>
          <label htmlFor="email">Email</label>
          <input type="email" name="signupEmail" id="signupEmail" ref={emailRef}/>
          <label htmlFor="password">Password</label>
          <input type="password" name="signupPassword" id="signupPassword" ref={passRef}/>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="signupConfirmPassword"
            id="signupConfirmPassword"
            ref={confPassRef}
          />
        </form>
        <button id="signup-button" onClick={signUpHandler}>Signup</button>
        {!isLoggenIn && (<form className="login-styles" onClick={(e)=>{e.preventDefault()}}>
          <label htmlFor="loginEmail">Email</label>
          <input id="loginEmail" name="loginEmail" type="email" ref={loginEmailRef}/>
          <label htmlFor="loginPassword">Password</label>
          <input id="loginPassword" name="loginPassword" type="password" ref={loginPassRef}/>
        </form>)}
        {!isLoggenIn && (<button id="login-button" onClick={handleLogin}>Login</button>)}
      </div>

      {isLoggenIn && (<div>
        <h3 id="username">{user.name}</h3>
        <h3 id="email">{user.email}</h3>
        <button id="logout-button" onClick={handleLogout}>Logout</button>
      </div>)}
    </div>
  );
};

export default App;
