import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { RingLoader } from 'react-spinners';
import DoctorAllSlot from '../DoctorAllSlot/DoctorAllSlot';
import AddDoctorSlot from './AddDoctorSlot/AddDoctorSlot';
import './ALLDoctor.css'

const AllDoctor = () => {
    const [doctors, setDoctors] = useState([]);
    const [doctorslot, setDoctorSlot] = useState('');
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    useEffect(function () {
        axios.get("http://localhost:8000/api/alldoctor")
            .then(function (rsp) {
                setDoctors(rsp.data);
            }, function (err) {

            });
    }, []);
    return (
        <section>
            {
                loading ? <div className="loading-bg">
                    <div className="d-flex justify-content-center align-items-center text-center" >
                        <div className="">
                            <div className="">
                                <h5 className="fw-bold text-uppercase" style={{ color: "#0596F7", marginTop: '5px' }}>
                                    <span><span className="mx-2">Loading</span>
                                        <RingLoader className="App" size={60} color={"#0596F7"} loading={loading} />

                                    </span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div> : 
                <div className="">
                    <div class="container">
                        <h2 className='text-center mt-3 ' style={{color:'#001AF5 '}}> ALL DOCTOR</h2>
                        <div class="row justify-content-md-center mt-5">

                            <div class="col-sm-12 col-md-12 ">
                                <table class="table table-bordered border-primary">
                                    <thead>
                                        <tr>
                                            <th width="200px" >Name</th>
                                            <th width="200px" >Email</th>
                                            <th width="200px" >Phone</th>
                                            <th >department</th>
                                            <th >Add</th>
                                            <th >Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            doctors.map(dc =>
                                                <tr>
                                                    <td >{dc.name}</td>
                                                    <td>{dc.email}</td>
                                                    <td>{dc.phone}</td>
                                                    <td>{dc.department}</td>
                                                    <td><button 
                                                    type="button"
                                                    id='getappointment-btn' data-bs-toggle="modal" data-bs-target="#exampleModal"onClick={() => setDoctorSlot(dc)} >Add Slot</button></td>
                                                    <td><button  type="button"
                                                    id='getappointment-btn' data-bs-toggle="modal" data-bs-target="#allslotModal"onClick={() => setDoctorSlot(dc)}  >All Slot</button></td>
                                                </tr>
                                            )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                   <AddDoctorSlot
                        doctorslot={doctorslot}
                    >

                    </AddDoctorSlot>
                    <DoctorAllSlot
                    doctorslot={doctorslot}
                    >

                    </DoctorAllSlot> 
                </div>

            }

        </section>

    );
};

export default AllDoctor;