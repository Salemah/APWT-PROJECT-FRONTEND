import axios from 'axios';
import React, { useState } from 'react';
import swal from 'sweetalert';

const AddDoctorSlot = ({ doctorslot }) => {
    const { userId, name, email, phone } = doctorslot;
    const [slotData, setSlotData] = useState('');
  
const handleOnChange = e => {
        const feild = e.target.name;
        const value = e.target.value;
        const newaptdata = { ...slotData };
        newaptdata[feild] = value;
        setSlotData(newaptdata);




    }
    const handleaddservice = e => {
        const slotss = {
            ...slotData,
            userId, name
        };
        console.log(slotss)
        axios.post(`http://localhost:8000/api/addslot`, slotss)
            .then(res => {
                if (res.data.validation_errors) {
                    setSlotData({ ...slotData, errors: res.data.validation_errors });
                    swal("Warning", "add failed!", "error");
                }
                else {
                 
                    swal("Success", res.data.success, "success");
                }
            }
            )
        e.preventDefault();

    }

    return (
        <>
            {/*  */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class=" modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 className="modal-title text-center" id="exampleModalLabel">Add Doctor Slot</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={handleaddservice}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                                    <input
                                        disabled type="text" name='name' className="form-control"
                                        value={name} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input disabled type="text" name='email' className="form-control"
                                        value={email} />

                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Doctor Id</label>
                                    <input disabled type="text" name='userId'
                                        className="form-control"
                                        value={userId} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputDay" className="form-label">Day</label>
                                    {/* <input type="text" name='day' className="form-control"
                                        onBlur={handleOnChange} /> */}
                                    <select name='day' class="form-select" id="inputGroupSelect02" onBlur={handleOnChange} >
                                        <option selected>Choose...</option>
                                        <option value="Sunday">Sunday</option>
                                        <option value="Monday">Monday</option>
                                        <option value="Tuesday">Tuesday</option>
                                        <option value="Wednesday">Wednesday</option>
                                        <option value="Thursday">Thursday</option>

                                    </select>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Slot</label>
                                    <input type="text" name='time'
                                        onBlur={handleOnChange} className="form-control"
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal"  >Submit</button>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div></>

    );
};

export default AddDoctorSlot;