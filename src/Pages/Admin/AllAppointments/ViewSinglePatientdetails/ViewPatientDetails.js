import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import swal from 'sweetalert';

const ViewPatientDetails = ({patient}) => {
    const {patientId,patientname} = patient;
    const [ appointments, setAppointments] =useState([]);

    useEffect(function () {
        axios.get(`http://localhost:8000/api/patientapointmentdetails/${patientId}`)
            .then(function (rsp) {
                setAppointments(rsp.data);
            }, function (err) {

            });
    }, [appointments]);

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

    return (
        <div class="modal fade" id="allslotModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel" style={{color:"#1C70F9", }}>{patientname} All Appointment</h5>
                    </div>
                    <div class="modal-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Doctor</th>
                                    <th scope="col">Patient</th>
                                    <th scope="col">Day</th>
                                    <th scope="col">Time</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                               
                              { 
                              appointments.map(apt=>
                                <tr>
                                <th scope="row">{apt.doctor}</th>
                                <th scope="row">{apt.patientname}</th>
                                <th scope="row">{apt.day}</th>
                                <th scope="row">{apt.time}</th>
                        
                               
                                <td><button onClick={()=>{handledelete(apt.id)}}  className='btn btn-danger'>Delete</button></td>
                            </tr>)
                             }
                                 
                               


                            </tbody>
                        </table>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewPatientDetails;