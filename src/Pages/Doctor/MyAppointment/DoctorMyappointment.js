import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import swal from 'sweetalert';

const DoctorMyappointment = () => {
    const [appointment, setAppointment] = useState([]);
    const userId = parseInt(localStorage.getItem('id'));
    useEffect(function () {
        axios.get(`http://localhost:8000/api/doctor/myappointment/${userId}`)
            .then(res => {
                setAppointment(res.data);
            }, (err) => {

            });
    }, [appointment]);
    const Update= id=>{
        axios.post(`http://localhost:8000/api/doctor/myappointment/update/${id}`)
                .then(res => {
                    if (res) {
                        swal("Success", res.data.success, "success");
                    }
                    else {
                        swal("Warning", res.data.msg, "error");
                    }
                })
        
    }

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item"><a href="#">Library</a></li>
                    <li class="breadcrumb-item active" aria-current="page">MyAppointment</li>
                </ol>
            </nav>
            <div class="card" style={{ width: '100%' }}>
                <div class="card-header">
                    <h3 className='text-center'>All Appointment</h3>
                </div>
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Patient Name</th>
                                <th scope="col">Day</th>
                                <th scope="col">Slot</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointment.map(slot =>
                                <tr>
                                    <th scope="row">{slot.doctor}</th>
                                    <td>{slot.patientname}</td>
                                    <td>{slot.day}</td>
                                    <td>{slot.time}</td>
                                    <td>{slot.Status}</td>
                                    <td><button className='btn btn-danger' onClick={()=>Update(slot.id)}>Update Status</button></td>
                                </tr>)

                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DoctorMyappointment;