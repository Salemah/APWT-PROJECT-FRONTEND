import axios from 'axios';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import ViewPatientDetails from './ViewSinglePatientdetails/ViewPatientDetails';

const AllAppointments = () => {
    const [patient, setPatient] = useState('');

    const [appointments, setAppointments] = useState([]);
    const [displayppointments, setDisplayAppointments] = useState([]);
    useEffect(function () {
        axios.get(`http://localhost:8000/api/allappointment`)
            .then(function (rsp) {
                setAppointments(rsp.data);
                setDisplayAppointments(rsp.data);
            }, function (err) {

            });
    }, []);
    const handledelete = id => {
        const confirm = window.confirm("Are you sure to delete this Appointment");
        if (confirm) {
            axios.post(`http://localhost:8000/api/admin/appoinemtntdelete/${id}`)
                .then(res => {
                    if (res) {
                        swal("Success", res.data.success, "success");
                    }
                    else {
                        swal("Warning", "Appointment delete Failed!", "error");
                    }
                })
        }

    }
    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = appointments.filter(doctors => doctors.doctor.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayAppointments(matchedProducts);
    }
    const handleSearchByPatient = event => {
        const searchText = event.target.value;
        const matchedProducts = appointments.filter(product => product.patientname.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayAppointments(matchedProducts);
    }
    const handleSearchByDay = event => {
        const searchText = event.target.value;
        const matchedProducts = appointments.filter(product => product.day.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayAppointments(matchedProducts);
    }

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb mt-2">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
                    <li class="breadcrumb-item active" aria-current="page">All Appointment</li>
                </ol>
            </nav>



            <div class="card" style={{ width: "100%" }}>
                <div class="card-header text-center">
                    <h2 style={{ color: 'red' }}>  All Appointments</h2>
                    <form action="" method="get" class="card-header">
                            <div class="form-row justify-content-between">
                                <div class="col-md-2">
                                    <input onChange={handleSearch}
                                        placeholder="Search By Doctor Name " type="text" class="form-control" />
                                </div>
                                <div class="col-md-2">
                                    <input onChange={handleSearchByPatient}
                                        placeholder="Search By Patient Name " type="text" class="form-control" />
                                </div>
                                <div class="col-md-3">
                                    <input onChange={handleSearchByDay}
                                        placeholder="Search By Day " type="text" class="form-control" />
                                </div>
                               </div>
                        </form>
                </div>
               
                <div class="card-body">
                    <table class="table table-bordered">
                        <thead>
                            <tr style={{ background: '#6571CF ', color: 'white' }}>
                                <th >Doctor</th>
                                <th >Patientname</th>
                                <th>Day</th>
                                <th >Slot</th>
                                <th >Action</th>
                                <th >Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayppointments.map(allapt =>
                                <tr>
                                    <td>{allapt.doctor}</td>
                                    <td>{allapt.patientname}</td>
                                    <td>{allapt.day}</td>
                                    <td>{allapt.time}</td>
                                    <td><button className='btn btn-danger' onClick={()=>{handledelete(allapt.id)}}>Delete</button></td>
                                    <td><button type="button"
                                        id='getappointment-btn' data-bs-toggle="modal" data-bs-target="#allslotModal" className='btn btn-danger'
                                        onClick={()=>setPatient(allapt)}
                                        >Details</button></td>
                                </tr>)

                            }


                        </tbody>
                    </table>


                </div>
            </div>
            <ViewPatientDetails
            
            patient={patient}>

            </ViewPatientDetails>
        </div>
    );
};

export default AllAppointments;