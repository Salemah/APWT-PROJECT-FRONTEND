import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Register.css';

import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
const Register = () => {
    const [regdata, setRegData] = useState({
        name: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        errors: []
    });
    const history = useHistory();
    const [regsuccess, setRegsuccess] = useState(false);
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

        axios.post('http://localhost:8000/api/register/submit', data)
            .then(response => {
                console.log(response.data);
                if (response.data.validation_errors) {
                    setRegData({ ...regdata, errors: response.data.validation_errors });
                    swal("Warning", "Registration Error!", "error");
                } else {

                    swal("Success", response.data.success, "success");
                    history.push("/login");

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
                            <h4>Register</h4>
                        </div>
                        <form onSubmit={handleonSubmit}>
                            <div class="mb-3">
                                <input type="text"
                                    name='name'
                                    placeholder='Enter  Name'
                                    class="form-control  form-input "
                                    onBlur={handleOnChange}
                                   />
                                <span style={{
                                    color: "red", fontSize: "12px", fontWeight: "bold"
                                }}>{regdata.errors.name}</span>
                            </div>
                            <div class="mb-3">
                                <input type="text"
                                    name='username'
                                    placeholder='Enter  username'
                                    class="form-control form-input  "
                                    onBlur={handleOnChange}
                                     />
                                     <span style={{
                                    color: "red", fontSize: "12px", fontWeight: "bold"
                                }}>{regdata.errors.username}</span>

                            </div>
                            <div class="mb-3">
                                <input type="text"
                                    name='email'
                                    placeholder='Enter  Email'
                                    class="form-control  form-input "
                                    onBlur={handleOnChange}
                                   />
                                    <span style={{
                                    color: "red", fontSize: "12px", fontWeight: "bold"
                                }}>{regdata.errors.email}</span>

                            </div>
                            <div class="mb-3">
                                <input type="password"
                                    name='password'
                                    placeholder='Enter  password'
                                    class="form-control  form-input"
                                    onBlur={handleOnChange}
                                    />
                                    <span style={{
                                    color: "red", fontSize: "12px", fontWeight: "bold"
                                }}>{regdata.errors.password}</span>
                            </div>
                            <div class="mb-3">
                                <input type="password"
                                    name='confirmpassword'
                                    placeholder='Enter Confirm password'
                                    class="form-control  form-input"
                                    onBlur={handleOnChange}
                                     />
                                    <span style={{
                                    color: "red", fontSize: "12px", fontWeight: "bold"
                                }}>{regdata.errors.confirmpassword}</span>
                            </div>
                            <button type="submit" class="btn btn-primary login-submit-button">Register</button>
                        </form>
                        <div className="not-registersection">
                            <p>Already registerd?<Link style={{ textDecoration: 'none', color: 'red' }} to='/login'>Login</Link></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;