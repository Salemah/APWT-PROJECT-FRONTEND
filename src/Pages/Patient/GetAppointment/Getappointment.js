import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { RingLoader } from 'react-spinners';
import Appointmentmodal from '../AppointmentModal/Appointmentmodal';
import './getapc.css';
const Getappointment = () => {
    const [doctors, setDoctors] = useState([]);
    const [appointment, setAppointment] = useState('');
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);
    
    useEffect(function () {
        axios.get("http://localhost:8000/api/doctorslot")
            .then(function (rsp) {
                //console.log(rsp)
                setDoctors(rsp.data);
            }, function (err) {

            });
    }, []);
    


    return (
        <section>
            {
                loading ?<div className="loading-bg">
                <div className="d-flex justify-content-center align-items-center text-center" >
                    <div className="">
                        <div className="">
                            <h5 className="fw-bold text-uppercase" style={{ color: "red",marginTop:'5px'}}>
                                
                                    <RingLoader className="App" size={60} color={"#0596F7"} loading={loading} />
                                    {/* <ClockLoader className="App" size={10} color={"red"} loading={loading} /> */}
                                
                            </h5>
                        </div>
                    </div>
                </div>
            </div> :
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
                                            <td> <button id='getappointment-btn' data-bs-toggle="modal" href="#exampleModalToggle" onClick={() => setAppointment(dc)} >  Getappointment</button> </td>
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
        }
        </section>
        
    );
};

export default Getappointment;