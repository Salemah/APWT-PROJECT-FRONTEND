import React from 'react';
import { Link } from 'react-router-dom';
import './../Login/login.css';
const Register = () => {
    return (
        <div className='login-form'>
            <div className="container login-form">
                <div class="row align-items-center login-col">

                    <div class="col ">
                        <div className="top-header">
                        <h4>Register</h4>
                        </div>
                        <form >
                            <div class="mb-3">
                                <input type="text" 
                                name='name' 
                                placeholder='Enter  Name' 
                                class="form-control  " 
                                id='form-input1'/>

                            </div>
                            <div class="mb-3">
                                <input type="text" 
                                name='uname' 
                                placeholder='Enter  username' 
                                class="form-control  " 
                                id='form-input1'/>

                            </div>
                            <div class="mb-3">
                                <input type="email" 
                                name='email' 
                                placeholder='Enter  Email' 
                                class="form-control  " 
                                id='form-input1'/>

                            </div>
                            <div class="mb-3">
                                <input type="password" 
                                name='password'
                                placeholder='Enter  password' 
                                 class="form-control "
                                 id='form-input2' />
                            </div>
                            <div class="mb-3">
                                <input type="password" 
                                name='cpassword'
                                placeholder='Enter Confirm password' 
                                 class="form-control "
                                 id='form-input2' />
                            </div>
                            <button type="submit" class="btn btn-primary login-submit-button">Register</button>
                        </form>
                        <div className="not-registersection">
                        <p>Already registerd?<Link style={{textDecoration:'none',color:'red'}} to='/login'>Login</Link></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;