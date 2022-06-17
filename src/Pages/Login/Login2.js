import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import swal from 'sweetalert';
import login from '../../images/login.png';
import loginbg from '../../images/login-bg.jpg';
import loginbnr from '../../images/login-banner.jpg';
import password from '../../images/password.png';
import user from '../../images/user.png';
import email from '../../images/email.png';

import './Login2.css';
const Login2 = () => {
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
                            if (localStorage.getItem('usertype') == 'patient') {
                                history.push("/dashboard");
                            }
                            else if (localStorage.getItem('usertype') == 'admin') {
                                history.push("/AddDoctor");
                            }
                            else {
                                history.push("/AddDoctor");
                            }


                        }


                    }
                }

            });

        e.preventDefault();
    }
    return (
        <body>
            <div className="backgroundArea">

            </div>
            <div className="contentArea">
                <div className="main">
                    <div className="login-area">
                        <div className="row">
                            <div className="col-12 login-content">
                                <div>
                                    <div className="d-flex justify-content-center">
                                        <img src={login} alt="img" />
                                        <h3 className="ml-3 mb-5" style={{ color: "white" }}>LOGIN</h3>
                                    </div>
                                    <form onSubmit={handleonSubmit} >

                                        <div className="mb-3">
                                            <img className="mr-2" src={email} alt="" />
                                            <input type="email" name="email" onChange={handleOnChange} placeholder="Your Email" />
                                            <br />

                                        </div>

                                        <div className="mb-3">
                                            <img className="mr-2" src={password} alt="" />
                                            <input type="password" name="password" onChange={handleOnChange} placeholder="Your Password" /> <br />

                                        </div>

                                        <div className="mb-3 d-flex justify-content-end">
                                            <button type="submit" className="login-button font-weight-bold">Login</button>
                                        </div>
                                    </form>

                                    <div className="h5 d-flex justify-content-center align-items-center" style={{ color: "black" }}>
                                        <div className="header-dash"
                                            style={{ height: "2px", width: "50%", background: "gray", borderRadius: "10px" }}></div>
                                        <div className="">
                                            <span className="mx-2">or</span>
                                        </div>
                                        <div className="header-dash"
                                            style={{ height: "2px", width: "50%", background: "gray", borderRadius: "10px" }}></div>
                                    </div>
                                    <div className="mb-3 d-flex justify-content-end">
                                        <div>
                                            <div style={{ color: "red", fontWeight: "bold" }}>
                                                <span>Are you new user?</span> <br />
                                            </div>
                                            <div className="ml-auto">
                                                <div>
                                                    <Link className="font-weight-bold underline reg-link" to="/registration">create an account</Link>
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
        </body>
    );
};

export default Login2;