// import logo from "./logo.svg";
import "./App.css";
import React,{useEffect}from "react";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import {auth} from './firebase';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';
import Footer from "./Footer";

// import {db} from './firebase';
// import Footer from "./Footer";

// import Footer from './components/Footer';
// import Footer from "./Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useEffect } from "react/cjs/react.production.min";
import { useStateValue } from "./StateProvider";

const promise=loadStripe('pk_test_51LGzJCSGl1Ecr0TzCGR8uDkQjNRzQU6Q5p9pCGTwvxPo8358OpZh8IaQgCmUcFqoWrZzy46Tzrds3zqxNUZtZVtY00LAAfE6BH');

function App() {
  const [{},dispatch]=useStateValue();
  useEffect(()=>{
      auth.onAuthStateChanged(authUser =>{
        console.log('The User is >>>',authUser);
        if(authUser){
          dispatch({
              type: 'SET_USER',
              user:authUser
          })
                  //the user is just logged in... 
        }
        else{
                  // the user is logged out...
                  dispatch({
                    type: 'SET_USER',
                    user:null
                })
        }
      })
  },[])
  return (
    <>
    
    <Router>
    <div className="app"> 

    {/* <Routes>
       
        <Route path="/login" element={<Header/>}/ >

  
       </Routes>     */}
    <Routes>
       
        <Route path="/login" element={<Login/>}/ >

  
       </Routes>    

      <Routes>

        {/* <Route path="/orders">
          <Header />
          <Orders />
        </Route> */}
        {/* <Route path="/login">
          <Login />
        </Route> */}
        {/* <Route path="/checkout">
          <Header />
          <Checkout />
        </Route> */}
        {/* <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements> */}
        {/* </Route> */}
        <Route path="/" element={<Header/>}/ >
          {/* <Header />
          <Home /> */}

          </Routes>
          {/* <Routes>
       
       <Route path="/" element={<Footer/>}/>
 
      </Routes> */}

         
          <Routes>
       
        <Route path="/" element={<Home/>}/ >
  
       </Routes>
          <Routes>
       
        <Route path="/" element={<Footer/>}/>
  
       </Routes>
       <Routes>
        <Route path="/checkout" element={<Header/>} />
        

         </Routes>
          <Routes>
        <Route path="/checkout" element={<Checkout/>} />

      </Routes>
      {/* <Routes>
       
       <Route path="/checkout" element={<Footer/>}/>
 
      </Routes> */}
          <Routes>
        <Route path="/orders" element={<Header/>} />

      </Routes>
          <Routes>
        <Route path="/orders" element={<Orders/>} />

      </Routes>
      <Routes>
        <Route path="/payment" element={<Header/>} />
        

         </Routes>
         <Routes>
        <Route path="/payment" element={
        <Elements stripe={promise}>
        <Payment/></Elements>
        } />
        

         </Routes>
    </div>
  </Router>
     
    </>
  );
  
}
export default App;