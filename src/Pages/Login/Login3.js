import axios from 'axios';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import './Login3.css';

const Login3 = () => {
    const history = useHistory();
    
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
        errors: []
    });
    const handleOnChange = e => {
        const feild = e.target.name;
        const value = e.target.value;
        const newData = { ...loginData };
        newData[feild] = value;
        setLoginData(newData);
    }
    const handleonSubmit = e => {
        const data = {
            ...loginData
        }


        axios.post('http://localhost:8000/api/login', data)
            .then(response => {
                if (response.data.validation_errors) {
                    setLoginData({ ...loginData, errors: response.data.validation_errors });
                    swal("Warning", "Login Error!", "error");
                }
                else {
                    if (response.data.status === "notFound") {
                        swal("Warning", "User not Found!", "error");

                    }
                    else {
                        if (response.data.status === "success") {
                            localStorage.setItem('usertype', response.data.usertype);
                            localStorage.setItem('id', response.data.id);
                            localStorage.setItem('email', response.data.email);
                            localStorage.setItem('name', response.data.name);
                            localStorage.setItem('username', response.data.username);
                            localStorage.setItem('userId', response.data.userId);
                            console.log(response.data.username);
                            swal("Success", response.data.message, "success");
                           if(localStorage.getItem('usertype')=='doctor'){
                            history.push("/dashboard");
                           }
                           else if (localStorage.getItem('usertype')=='admin'){
                            history.push("/admindashboard");
                           }
                           else{
                            history.push("/AddDoctor");
                           }
                               
                            
                        }


                    }
                }

            });

        e.preventDefault();
    }

    return (
      
            <div className="login-page">
            <div className="login-body">
                <div className="login-main">
                    <div className="login-form">
                        <div className="row">
                            <div className="col-12 login-main-body">
                                <div>
                                <div className="">
                                        
                                        <h3 className="ml-auto my-5 text-center" style={{ color: "white" }}>LOGIN</h3>
                                    </div>
                                    <form onSubmit={handleonSubmit} >
                                       
                                        <div className="mb-3">
                                            <input type="email" name="email" onChange={handleOnChange} value={loginData.email} placeholder="Enter Your Email" />
                                            <br />
                                            <span style={{
                                    color: "red", fontSize: "12px", fontWeight: "bold"
                                }}>{loginData.errors.email}</span>
                                        </div>

                                        <div className="mb-3">
                                            <input type="password" name="password" onChange={handleOnChange} value={loginData.password} placeholder="Enter Your Password" /> <br />
                                            <span style={{
                                    color: "red", fontSize: "12px", fontWeight: "bold"
                                }}>{loginData.errors.password}</span>
                                        </div>

                                        <div className="mb-3 d-flex justify-content-center">
                                            <button type="submit" className="login-button font-weight-bold">Login</button>
                                        </div>
                                    </form>

                                   
                                    <div className="mb-3 d-flex justify-content-center">
                                        <div>
                                            <div className='reg-link-user'>
                                                <span>Are you new user?</span> <br />
                                            </div>
                                            <div className="ml-auto">
                                                <div>
                                                    <Link className=" reg-link" to="/registration">create an account</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
      
    );
};

export default Login3;


