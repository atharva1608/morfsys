import React,{useState} from 'react';
import axios from 'axios';
function SignIn(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        if(!email){
            document.getElementById("req").innerHTML='Required!'
        }
        
        if(!password){
            document.getElementById("req1").innerHTML='Required!'
        }
      };
    
      function handleSubmit(e) {
        e.preventDefault();
        const loginuser={
          email:email,
          password:password
        }
        validateForm()
        
        axios.post('http://localhost:4040/app/login',loginuser,{withCredentials: true})
        
        .then(response =>{
          if(response.data.error==='Invalid credentials' || response.data.error==='User not found')
          {
            alert("Please enter correct credentials and details")
          }
          else{
            alert("Successfully Login")
            console.log(response.data)
            localStorage.setItem('loginuser', response.data)
        //    window.location = '/'
          }
          
          
        })
        .catch(error=>console.log(error))
    
        
      };
    
     return(
        <>
        <div class="title">
            <img class="logo" src="https://tse4.mm.bing.net/th?id=OIP.zGhq411yoIuKGwDnT2keagHaKZ&pid=Api&P=0&w=117&h=165" alt=""></img>
            
            <h2 style={{"letter-spacing": "3px", "marginLeft": "3px","color":"navy"}}>GLOBILITI</h2>
        </div>
        <p style={{"marginTop": "60px","marginLeft": "150px","color":"navy","fontSize":"30px"}}>Welcome to Globiliti!</p>
        <p style={{"marginTop": "20px","fontSize":"15px", "marginLeft": "150px", "color":"gray"}}>Log in to your school account</p>
        <div style={{"display":"flex"}}>
        <form className='form' onSubmit={handleSubmit}>
                
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
                  <p id="req" style={{"fontSize":"small","color":"red","marginTop":"1px"}}></p>
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
                   <p id="req1" style={{"fontSize":"small","color":"red","marginTop":"1px"}}></p>
                   </div>
                </div>
                
                <button type="submit" class="loginbtn">Log In</button>
                
          </form>
          <img style={{"width":"600px","height":"400px","marginLeft":"120px","marginTop":"-30px"}} src="https://goglobiliti.com/assets/images/onboarding-1.png" alt=""></img>
          </div>
        </>
     )
}
export default SignIn