import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import swal from 'sweetalert';

const AddDoctor = () => {
    const [regdata, setRegData] = useState({
        name: '',
        email: '',
        username: '',
        password: '',
        phonenumber: '',
        confirmPassword: '',
        department: '',
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
                                <input type="text"
                                    name='department'
                                    placeholder='Enter  Department'
                                    class="form-control  form-input "
                                    onBlur={handleOnChange}
                                   />
                                    <span style={{
                                    color: "red", fontSize: "12px", fontWeight: "bold"
                                }}>{regdata.errors.department}</span>

                            </div>
                            <div class="mb-3">
                                <input type="number"
                                    name='phonenumber'
                                    placeholder='Enter  phonenumber'
                                    class="form-control  form-input "
                                    onBlur={handleOnChange}
                                   />
                                    <span style={{
                                    color: "red", fontSize: "12px", fontWeight: "bold"
                                }}>{regdata.errors.phonenumber}</span>

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
                       
                    </div>

                </div>
            </div>
        </div>
    );
};



export default AddDoctor;