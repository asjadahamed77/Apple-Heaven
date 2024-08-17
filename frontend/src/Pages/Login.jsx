import React, { useState } from 'react'
import './Login.css'
const Login = () => {
    const [login,setLogin] = useState('login')
  return (
    <div class="login">
        <div className="login-container">
        {
            login==='login'?<h2>Login</h2>:<h2>Register</h2>
        }
        <form>
            <div className="user">
            <label htmlFor="">Username</label>
            <input type="text" placeholder='Enter your Username' />
            </div>
            {
                login==='register'?<div className="user">
                <label htmlFor="">Email</label>
                <input type="text" placeholder='Enter your Email' />
                </div>:''
            }
            <div className="user">
            <label htmlFor="">Password</label>
            <input type="password" placeholder='Enter your Password' />
            
            </div>
            {
                login==='register'?<div className="user">
                <label htmlFor="">Confirm Password</label>
                <input type="text" placeholder='Confirm your Password' />
                </div>:''
            }
            {
                login==='register'?<div className="user">
                <label htmlFor="">Phone Number</label>
                <input type="text" placeholder='Enter your Phone Number' />
                </div>:''
            }
            <div className="button-login">
                <button>
                    {login==='login'?'Login':'Register'}
                </button>
            </div>
        </form>
        {
            login==='login'?<p>If you don't have an Accout? <span onClick={()=> setLogin('register')}>Click Here</span></p>:<p>Already have an Accout? <span onClick={()=> setLogin('login')}>Login Here</span></p>
        }
        
        </div>
        
    </div>
  )
}

export default Login
