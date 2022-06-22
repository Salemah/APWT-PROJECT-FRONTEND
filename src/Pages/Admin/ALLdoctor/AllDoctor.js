import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { RingLoader } from 'react-spinners';
import DoctorAllSlot from '../DoctorAllSlot/DoctorAllSlot';
import AddDoctorSlot from './AddDoctorSlot/AddDoctorSlot';
import './ALLDoctor.css';
import swal from 'sweetalert';

const AllDoctor = () => {
    const [doctors, setDoctors] = useState([]);
    const [displaydoctors, setDisplayDoctors] = useState([]);
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
                setDisplayDoctors(rsp.data);
            }, function (err) {

            });
    }, []);
    const handledelete = id => {
        const confirm = window.confirm("Are you sure to delete this Appointment");
        if (confirm) {
            axios.post(`http://localhost:8000/api/deleteDoctor/${id}`)
                .then(res => {
                    if (res) {
                        swal("Success", res.data.success, "success");
                    }
                    else {
                        swal("Warning", "Appointment delete Failed!", "error");
                    }
                })}}
                const handleSearch = event => {
                    const searchText = event.target.value;
                    const matchedProducts = doctors.filter(doctor => doctor.name.toLowerCase().includes(searchText.toLowerCase()));
                    setDisplayDoctors(matchedProducts);
                }
                const handleSearchById = event => {
                    const searchText = event.target.value;
                    const matcheddc = doctors.filter(product =>  product.userId.toLocaleString().includes(searchText.toLocaleString()));
                    setDisplayDoctors(matcheddc);
                }
                const handleSearchByDepartment = event => {
                    const searchText = event.target.value;
                    const matcheddpt = doctors.filter(product => product.department.toLowerCase().includes(searchText.toLowerCase()));
                    setDisplayDoctors(matcheddpt);
                }
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
                    <div class="card">
                    <form action="" method="get" class="card-header">
                            <div class="form-row justify-content-between">
                                <div class="col-md-2">
                                    <input onChange={handleSearch}
                                        placeholder="Search By Name " type="text" class="form-control" />
                                </div>
                                <div class="col-md-2">
                                    <input onChange={handleSearchById}
                                        placeholder="Search By Id " type="text" class="form-control" />
                                </div>

                                <div class="col-md-3">
                                    <input onChange={ handleSearchByDepartment}
                                        placeholder="Search By Department " type="text" class="form-control" />
                                </div>


                            </div>
                        </form>
                    <div class="container">
                        <h2 className='text-center mt-3 ' style={{color:'#001AF5 '}}> ALL DOCTOR</h2>
                        <div class="row justify-content-md-center mt-5">

                            <div class="col-sm-12 col-md-12 ">
                                <table class="table table-bordered border-primary">
                                    <thead>
                                        <tr>
                                        <th width="100px" >Action</th>
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
                                           displaydoctors.map(dc =>
                                                <tr>
                                                    <td ><button
                                                      id='getappointment-btn' onClick={() => handledelete(dc.userId)}  >Delete</button></td>
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