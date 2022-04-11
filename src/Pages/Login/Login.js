import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import './login.css';

const Login = () => {
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
                            localStorage.setItem('token', response.data.token,);
                            localStorage.setItem('type', response.data.type);
                            localStorage.setItem('id', response.data.id);
                             localStorage.setItem('email', response.data.email);
                             localStorage.setItem('name', response.data.name);
                             localStorage.setItem('username', response.data.username);
                            console.log(response.data.username);
                            swal("Success", response.data.message, "success");
                            history.push("/dashboard");
                        }


                    }
                }

            });

        e.preventDefault();
    }
    return (
        <div className='login-form'>
            <div className="container login-form">
                <div class="row align-items-center login-col">

                    <div class="col ">
                        <div className="top-header">
                            <h4>Login</h4>
                        </div>
                        <form onSubmit={handleonSubmit}>
                            <div class="mb-3">
                                <input type="email"
                                    name='email'
                                    placeholder='Enter Your Email'
                                    class="form-control  "
                                    id='form-input1'
                                    onBlur={handleOnChange} />
                                <span style={{
                                    color: "red", fontSize: "12px", fontWeight: "bold"
                                }}>{loginData.errors.email}</span>

                            </div>
                            <div class="mb-3">
                                <input type="password"
                                    name='password'
                                    placeholder='Enter Your password'
                                    class="form-control "
                                    id='form-input2'
                                    onBlur={handleOnChange} />
                                <span style={{
                                    color: "red", fontSize: "12px", fontWeight: "bold"
                                }}>{loginData.errors.password}</span>
                            </div>
                            <button type="submit" class="btn btn-primary login-submit-button">Login</button>
                        </form>
                        <div className="not-registersection">
                            <p>Not registerd?<Link style={{ textDecoration: 'none', color: 'red' }} to='/register'>Create an account</Link></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;