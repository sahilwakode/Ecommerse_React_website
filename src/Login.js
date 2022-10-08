import React,{useState} from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
import { auth } from './firebase';
// import { useHistory } from 'history';
// import { useHistory } from "react-router-dom";
import {Route} from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
// import {route} from 'react-router-dom'
// import { useState } from 'react/cjs/react.production.min';
// import { useStateValue } from './StateProvider';

function Login() {
    const navigate=useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const signIn= e=>{
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth => {
                // navigate=useNavigate();
                navigate('/');
            })
            .catch(error =>alert(error.message))
            
    }
    const register= e=>{
        e.preventDefault();
        auth
           .createUserWithEmailAndPassword(email,password)
           .then((auth)=>{
            //    console.log(auth);
            if(auth){
                // navigate=useNavigate();
                navigate('/');
            }
          })
           .catch(error=>alert(error.message))
    }
  return (
    <div className='login'>
        <Link to='/'>
        <img
        className='login__logo'
         src="https://thumbs.dreamstime.com/b/amazon-155631949.jpg" />
          </Link>
          <div className="login__container">
              <h1>Sign-In</h1>
              <form >
                  <h5>
                      E-Mail
                  </h5>
                  <input type="email" value={email}
                  onChange={
                      e=> setEmail(e.target.value)
                  }
                  />
                  <h5>
                      Password
                  </h5>
                  <input type="password" value={password}
                   onChange={
                       
                    e=> setPassword(e.target.value)
                }
                  />
                  <button type='submit' onClick={signIn}
                   className="login__signInButton">
                      Sign In
                  </button>
              </form>
              <p>
              By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
              Conditions of Use  Privacy Notice  Help 
              © 1996-2022, Amazon.com, Inc. or its affiliates
              </p>
              <button onClick={register} className="login__registerButton">
                  Create Your Amazon Account
              </button>
          </div>
    </div>
  )
}

export default Login