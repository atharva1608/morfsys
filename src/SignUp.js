import React,{useState} from 'react';
import './SignUp.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
function SignUp(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username,setUsername]=  useState("");

    function validateForm() {
        if(!username){
          document.getElementById("req").innerHTML='Required!'
        }
        if(!email){
            document.getElementById("req1").innerHTML='Required!'
        }
        if(!password){
            document.getElementById("req2").innerHTML='Required!'
        }
    
    
      };

    function handleSubmit(event){
        event.preventDefault();
    const registered = {
      username: username,
      email: email,
      password: password,
    }
    validateForm();
    if(username && email && password){
        axios.post('http://localhost:4040/app/signup',registered)
        .then(response =>{
          if(response.data.error==='An account with this email already exists.')
          {
            alert("An account with this email already exists.")
          }
          else{
            console.log(response.data);
            alert("Successfully Registered!!!")
          }
          
        })
        .catch(error=>console.log(error))
        } 
    }

    return (
        <>
        <div class="title">
            <img class="logo" src="https://tse4.mm.bing.net/th?id=OIP.zGhq411yoIuKGwDnT2keagHaKZ&pid=Api&P=0&w=117&h=165" alt=""></img>
            
            <h2 style={{"letter-spacing": "3px", "marginLeft": "3px","color":"navy"}}>GLOBILITI <span style={{"marginLeft": "30px", "font-size": "small"}}>Create School Account</span></h2>
        </div>
        <p style={{"marginTop": "60px","marginLeft": "150px","color":"navy","fontSize":"30px"}}>Welcome to Globiliti!</p>
        <p style={{"marginTop": "20px","fontSize":"15px", "marginLeft": "150px", "color":"gray"}}>Create your school account</p>
        <div style={{"display":"flex"}}>
            
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
                  <label htmlFor="username" style={{"color":"navy","fontWeight":"bold"}}>What's your full name?</label>
                  <div>
                  <input style={{"marginTop": "8px","width":"300px","height":"20px"}}
                  class="inputtext"
                  type='text' 
                  id='username' 
                  name='username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder='Full Name'>

                  </input>
                  <p id="req" style={{"fontSize":"small","color":"red","marginTop":"1px"}}></p>
                  </div>
                  
                </div>
                
              <div className='form-control'>
                  <label htmlFor="email" style={{"color":"navy","fontWeight":"bold"}}>Email</label>
                  <div>
                  <input style={{"marginTop": "8px","width":"300px","height":"20px"}}
                   class="inputtext" 
                  type='text' 
                  id='email' 
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Email'>

                  </input>
                  <p id="req1" style={{"fontSize":"small","color":"red","marginTop":"1px"}}></p>
                  </div>
                 
                </div>

                <div className='form-control'>
                  <label htmlFor="password" style={{"color":"navy","fontWeight":"bold"}}>Password</label>
                  <div>
                  <input style={{"marginTop": "8px","width":"300px","height":"20px"}}
                   class="inputtextpassword"
                  type='password'
                   id='password' 
                   name='password'
                   value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'>

                   </input>
                   <p id="req2" style={{"fontSize":"small","color":"red","marginTop":"1px"}}></p>
                   </div>
                </div>
                
                <button type="submit" class="submitbtn">Create Account</button>
                
          </form>
          <img style={{"width":"600px","height":"400px","marginLeft":"120px","marginTop":"-30px"}} src="https://goglobiliti.com/assets/images/onboarding-1.png" alt=""></img>
          
          </div>
          <Link to="/signin" style={{"marginLeft":"160px","marginTop":"-40px"}}>Already Registered? Log In</Link>
        </>
    )
}

export default SignUp