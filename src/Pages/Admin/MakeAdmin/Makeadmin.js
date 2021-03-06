import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import swal from 'sweetalert';
import './Makeadmin.css'

const Makeadmin = () => {
    const [regdata, setRegData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        usertype: 'admin',
        confirmPassword: '',
        errors: []
    });
    const history = useHistory();
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

                else if (response.data.duplicate) {
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
        <div class="add-doctorg">

            <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
            <li class="breadcrumb-item active" aria-current="page">AddAdmin</li>
        </ol>
        </nav>
        <h2 className='text-center'>Add Admin</h2>
            <div class="form-bgg">
                
                <div class="form-body">
                    <form   onSubmit={handleonSubmit}>
                        <div class="my-3 ">
                        
                            <input type="text" class="form-control" placeholder='Enter Name'
                             name='name'
                             onBlur={handleOnChange} />
                             <span style={{
                           color: "white", fontSize: "12px", fontWeight: "bold"
                       }}>{regdata.errors.name}</span>
                        </div>
                        <div class="my-3">
                       
                                    <input type="number"
                                     name='phone'
                                     placeholder=' Phone'
                                      className='form-control'
                                     onBlur={handleOnChange} />
                                     <span style={{
                                    color: "white", fontSize: "12px", fontWeight: "bold"
                                }}>{regdata.errors.phone}</span>
                        </div>
                        <div class="my-3">
                       
                        <input type="email" 
                                     name='email'
                                    placeholder=' Email' 
                                    className='form-control w-100' 
                                     onBlur={handleOnChange}/>
                                     <span style={{
                                    color: "white", fontSize: "12px", fontWeight: "bold"
                                }}>{regdata.errors.email}</span>
                        </div>
                        <div class="my-3">
                       
                        <input type="password" 
                                      name='password'
                                    placeholder='Password' className='form-control'
                                     onBlur={handleOnChange} />
                                      <span style={{
                                    color: "white", fontSize: "12px", fontWeight: "bold"
                                }}>{regdata.errors.password}</span>
                        </div>
                        <div class="my-3">
                       
                        <input type="password" 
                                     name='confirmpassword'
                                    placeholder='Confirm Password' className='form-control'
                                 
                                     onBlur={handleOnChange} />
                                       <span style={{
                                    color: "white", fontSize: "12px", fontWeight: "bold"
                                }}>{regdata.errors.confirmpassword}</span>
                        </div>

                       <div class="">
                       <button type="submit" class="btn btn-primary w-100">Add</button>
                       </div>
                    </form>
                </div>

            </div>


        </div>
    );
};

export default Makeadmin;