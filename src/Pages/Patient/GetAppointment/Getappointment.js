import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Appointmentmodal from '../AppointmentModal/Appointmentmodal';
import './getapc.css';
const Getappointment = () => {
    const [doctors, setDoctors] = useState([]);
    const [appointment, setAppointment] = useState('');
    
    useEffect(function () {
        axios.get("http://localhost:8000/api/doctorslot")
            .then(function (rsp) {
                //console.log(rsp)
                setDoctors(rsp.data);
            }, function (err) {

            });
    }, []);
    


    return (
        <div className="">
            <div class="container">
                <div class="row justify-content-md-center">

                    <div class="col-md-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Day</th>
                                    <th scope="col">Slot</th>
                                    <th scope="col">Getappointment</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    doctors.map(dc =>
                                        <tr>
                                            <th >{dc.dname}</th>
                                            {/* <td>{dc.department}</td> */}
                                            <td>{dc.day}</td>
                                            <td>{dc.slot}</td>
                                            <td> <button data-bs-toggle="modal" href="#exampleModalToggle" onClick={() => setAppointment(dc)} >  Getappointment</button> </td>
                                        </tr>


                                    )}

                            </tbody>

                        </table>
                    </div>

                </div>

            </div>

            <Appointmentmodal
            doctorslot={appointment}
            >
            </Appointmentmodal>
        </div>
    );
};

export default Getappointment;