import { useRef } from "react";
import { useState } from "react";
import "./register.scss"
import {Link, useNavigate } from "react-router-dom";
//import { ToastContainer, toast } from 'react-toastify';


export default function Register() {
  const [passhow,setPassShow] = useState(false);

  const [inputdata,setInputdata] = useState({
    fname:"",
    email:"",
    password:""
  });

  const navigate = useNavigate();
  
   // setinputvalue
   const handleChange = (e)=>{
    const {name,value} = e.target;
    setInputdata({...inputdata,[name]:value})
  }

    // register data
    const handleSubmit = async(e)=>{
      e.preventDefault();
      const {fname,email,password} = inputdata;
  
      if(fname === ""){
  
        // toast.error("Enter Your Name")
  
      }else if(email === ""){
  
        // toast.error("Enter Your Email")
  
      }else if(!email.includes("@")){
  
        // toast.error("Enter Valid Email")
  
      }else if(password === ""){
  
        // toast.error("Enter Your Password")
  
      }else if(password.length < 6){
  
        // toast.error("password length minimum 6 character")
  
      }else{
  
      //  // const response = await registerfunction(inputdata);
        
      //   if(response.status === 200){
  
      //    // setInputdata({...inputdata,fname:"",email:"",password:""});
  
      //     navigate("/")
  
      //   }else{
          
      //     // toast.error(response.response.data.error);
      //   }
      }
    }

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
        <img 
        className="logo"
        src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" 
        alt=""
        />

        

        <button className="loginButton">Sign In</button>

        </div>
      </div>
      <div className="container">
     

      <form>
                    <h1>SIGN UP</h1>
                    <input type="text" name="fname" id="" onChange={handleChange} placeholder='Enter Your Name' />
                    <input type="email" name="email" id=""  onChange={handleChange}  placeholder='Enter Your Email Address' />
                    <input type={!passhow ? "password" : "text"} name="password" id=""  onChange={handleChange}  placeholder='Enter Your password' />
                
                    <div onClick={()=>setPassShow(!passhow)} >
              {!passhow ? "Show" : "Hide"}
              </div>
                    <button className="loginButton"onClick={handleSubmit}>Sign Up</button>
                   

                    <small>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot.
                    <b>Learn more</b>
                    </small>
                </form>

      </div>
      {/* <ToastContainer /> */}
    </div>
  );
}
