import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import swal from 'sweetalert';

const AllPatient = () => {
    const [patient, setPatient] = useState([]);
    useEffect(function () {
        axios.get(`http://localhost:8000/api/allpatient`)
            .then(function (rsp) {
                setPatient(rsp.data);
            }, function (err) {

            });
    }, [patient]);
    const handledelete = id => {
        const confirm = window.confirm("Are you sure to delete this Appointment");
        if (confirm) {
            axios.post(`http://localhost:8000/api/deletePatient/${id}`)
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
        <div>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item"><a href="#">Library</a></li>
                    <li class="breadcrumb-item active" aria-current="page">PatientList</li>
                </ol>
            </nav>
            <div class="card" style={{ width: "100%" }}>
                <div class="card-header">
                  <h2 className='text-center' >All Patient List</h2>
                </div>
                <div class="card-body">
                <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Doctor</th>
                                    <th scope="col">Patient</th>
                                    <th scope="col">Day</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                               
                              { 
                             patient.map(apt=>
                                <tr>
                                <td >{apt.name}</td>
                                <td >{apt.email}</td>
                                <td >{apt.phone}</td>
                               <td><button onClick={()=>handledelete(apt.userId)}   className='btn btn-danger'>Delete</button></td>
                            </tr>)
                             }
                                 
                               


                            </tbody>
                        </table>
                </div>
            </div>
        </div>
    );
};

export default AllPatient;