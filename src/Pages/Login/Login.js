import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    return (
        <div className='login-form'>
            <div className="container login-form">
                <div class="row align-items-center login-col">

                    <div class="col ">
                        <div className="top-header">
                        <h4>Login</h4>
                        </div>
                        <form >
                            <div class="mb-3">
                                <input type="email" 
                                name='email' 
                                placeholder='Enter Your Email' 
                                class="form-control  " 
                                id='form-input1'/>

                            </div>
                            <div class="mb-3">
                                <input type="password" 
                                name='password'
                                placeholder='Enter Your password' 
                                 class="form-control "
                                 id='form-input2' />
                            </div>
                            <button type="submit" class="btn btn-primary login-submit-button">Login</button>
                        </form>
                        <div className="not-registersection">
                        <p>Not registerd?<Link style={{textDecoration:'none',color:'red'}} to='/register'>Create an account</Link></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;