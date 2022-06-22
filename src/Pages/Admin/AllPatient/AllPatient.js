import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import swal from 'sweetalert';

const AllPatient = () => {
    const [patient, setPatient] = useState([]);
    const [displaypatient, setDisplayPatient] = useState([]);
    useEffect(function () {
        axios.get(`http://localhost:8000/api/allpatient`)
            .then(function (rsp) {
                setPatient(rsp.data);
                setDisplayPatient(rsp.data);
            }, function (err) {

            });
    }, []);
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
    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = patient.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayPatient(matchedProducts);
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
                <form action="" method="get" class="card-header">
                            <div class="form-row justify-content-between">
                                <div class="col-md-2">
                                    <input onChange={handleSearch}
                                        placeholder="Search By Name " type="text" class="form-control" />
                                </div>
                               </div>
                        </form>
                <div class="card-body">
                <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                               
                              { 
                            displaypatient.map(apt=>
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