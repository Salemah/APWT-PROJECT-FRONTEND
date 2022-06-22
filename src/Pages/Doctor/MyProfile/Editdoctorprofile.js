import axios from 'axios';
import React, { useState } from 'react';
import swal from 'sweetalert';

const Editdoctorprofile = ({dcprofile}) => {
    const { userId, name, email, phone,department } = dcprofile;
    const [updateprofile, setUpdateprofile] = useState({
        name:name,
        email: email,
        phone: phone,
        department: department,
        errors: []
    });
    const handleOnChange = e => {
        const feild = e.target.name;
        const value = e.target.value;
        const newdata = { ...updateprofile };
        newdata[feild] = value;
        setUpdateprofile(newdata);
    }
    const handleaddservice = e => {

        const data = {
            ...updateprofile, 
            id:userId,
            
            
        }
        console.log(data);

        axios.post(`http://localhost:8000/api/doctoreditProfile`, data)
            .then(res => {

                if (res.data.validation_errors) {
                    setUpdateprofile({ ...updateprofile, errors: res.data.validation_errors });
                    
                    swal("Warning", "res.data.validation_errors", "error");
                }
                else {
                    console.log(res.data.msg)
                    swal("Success", res.data.success, "success");
                }
            })
        e.preventDefault();

    }
    return (
        <div>
        <div class="modal fade" id="doctorprofile" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalToggleLabel">Update Profile</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form onSubmit={handleaddservice} >
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label ">Name</label>
                                <input type="text" name='name' className="form-control "
                                    defaultValue={name}
                                     onBlur={handleOnChange}

                                />
                                
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label ">Name</label>
                                <input type="text" name='phone' className="form-control "
                                     defaultValue={phone}
                                     onBlur={handleOnChange}
                                />
                                
                            </div>



                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label ">Email</label>
                                <input type="email" name='email'
                                    className="form-control "
                                    onBlur={handleOnChange}
                                    defaultValue={email}

                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label ">Department</label>
                                <input type="text" name='department'
                                    className="form-control "
                                    onBlur={handleOnChange}
                                    defaultValue={department}

                                />
                            </div>


                            <button type="submit" className="btn btn-primary"  >Submit</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
    );
};

export default Editdoctorprofile;