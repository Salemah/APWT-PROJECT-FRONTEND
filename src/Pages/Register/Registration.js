import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import swal from 'sweetalert';
import "./Registration.css";

const Registration = () => {
    const [regdata, setRegData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        usertype: 'doctor',
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
  

        axios.post('http://localhost:8000/api/registration', data)
            .then(response => {
                console.log(response.data);
                if (response.data.validation_errors) {
                    setRegData({ ...regdata, errors: response.data.validation_errors });
                    swal("Warning", response.data.validation_errors, "error");
                } 
                
                else if(response.data.duplicate){
                    setRegData({ ...regdata, errors: response.data.duplicate });
                    swal("Warning", response.data.duplicate, "error");
                }
                
                else {

                    swal("Success", response.data.success, "success");
                    history.push("/login");

                }

            });

        e.preventDefault();
    }
    return (
        <div className='registration-bg'>
            <div className="container testt d-flex align-items-center m-auto" style={{ minHeight: "100vh" }}>
                <div className="form-area my-4">
                    <h2 className='mb-3 text-white'>Registration</h2>
                    <form action="" onSubmit={handleonSubmit}>
                        <div className="row">
                            <div className="col-md-6 my-2">
                                <div>
                                <input type="text"
                                    name='name'
                                    placeholder='Enter  Name'
                                    class="form-control"
                                    onBlur={handleOnChange}
                                   />
                                <span style={{
                                    color: "red", fontSize: "12px", fontWeight: "bold"
                                }}>{regdata.errors.name}</span>
                                </div>
                            </div>
                            <div className="col-md-6 my-2">
                                <div>
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
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 my-2">
                                <div>
                                <input type="number"
                                    name='phone'
                                    placeholder='Enter  phonenumber'
                                    class="form-control  form-input "
                                    onBlur={handleOnChange}
                                   />
                                    <span style={{
                                    color: "red", fontSize: "12px", fontWeight: "bold"
                                }}>{regdata.errors.phonenumber}</span>
                                </div>
                            </div>
                            <div className="col-md-6 my-2">
                                <div>
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
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6  my-2">
                                <div>
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
                            </div>
                            
                        </div>

                        <div className="row">
                            <div className="col-md-6  my-2">
                                <div>
                                    <button type='submit' className='btn btn-primary w-100' >Submit</button>
                                </div>
                            </div>
                            <div className="col-md-6 my-2" >
                                <div className='' >
                                    <div className="d-flex justify-content-end" >
                                        <span style={{ color: "white", fontWeight: "bold" }}>Have an account?</span>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <Link className="fw-bold login-link" to="/login">Please login here</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;