import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './../Login/login.css';
const Register = () => {
    const [regdata, setRegData] = useState('');
    const [regsuccess,setRegsuccess] = useState(false);
    const handleOnChange = e => {
        const feild = e.target.name;
        const value = e.target.value;
        const newData = { ...regdata };
        newData[feild] = value;
        setRegData(newData);
        

    }
    const handleonSubmit = e => {
        const data = {
            ...regdata
        }
        console.log(regdata);
        // const data = {
        //     username: regdata.username,
        //     name: regdata.rname,
        //     email: regdata.email,
        //     password: regdata.password,
        //     confirmpassword: regdata.confirmpassword
        // };
         axios.post('http://localhost:8000/api/register/submit', data)
            .then(res => {
                if(res.status=200){
                    setRegsuccess(true);
                    setRegData('');
                    console.log(res);
                
                }
            })
        e.preventDefault();
    }



    return (
        <div className='login-form'>
            <div className="container login-form">
                <div class="row align-items-center login-col">

                    <div class="col ">
                        <div className="top-header">
                        <h4>Register</h4>
                        </div>
                        <form  onSubmit={handleonSubmit}>
                            <div class="mb-3">
                                <input type="text" 
                                name='name' 
                                placeholder='Enter  Name' 
                                class="form-control  " 
                                onBlur={handleOnChange}
                                id='form-input1'/>

                            </div>
                            <div class="mb-3">
                                <input type="text" 
                                name='username' 
                                placeholder='Enter  username' 
                                class="form-control  " 
                                onBlur={handleOnChange}
                                id='form-input1'/>

                            </div>
                            <div class="mb-3">
                                <input type="text" 
                                name='email' 
                                placeholder='Enter  Email' 
                                class="form-control  " 
                                onBlur={handleOnChange}
                                id='form-input1'/>

                            </div>
                            <div class="mb-3">
                                <input type="password" 
                                name='password'
                                placeholder='Enter  password' 
                                 class="form-control "
                                 onBlur={handleOnChange}
                                 id='form-input2' />
                            </div>
                            <div class="mb-3">
                                <input type="password" 
                                name='confirmpassword'
                                placeholder='Enter Confirm password' 
                                 class="form-control "
                                 onBlur={handleOnChange}
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