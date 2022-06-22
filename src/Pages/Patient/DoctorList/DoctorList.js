import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { BarLoader, ClockLoader, PuffLoader, PulseLoader, RingLoader } from 'react-spinners';
import './doctorlist.css';
const DoctorList = () => {
    const [doctors, setDoctors] = useState([]);
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
                //console.log(rsp)
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
                                <h5 className="fw-bold text-uppercase" style={{ color: "#0596F7", marginTop: '155px',  }}>
                                    <span><span className="mx-2">Loading</span>
                                        <RingLoader className="App" size={60} color={"#0596F7"} loading={loading} />

                                    </span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div> : <div className="">
                    <div class="container">
                        <div class="row justify-content-md-center mt-5">
                            <div class="col-md-12 doctor-table">
                                <table class="table table-bordered border-primary">
                                    <thead>
                                        <tr>
                                            <th >Name</th>
                                            <th >department</th>
                                            <th >Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            doctors.map(dc =>
                                                <tr>
                                                    <td >{dc.name}</td>
                                                    <td>{dc.department}</td>
                                                    <td>{dc.email}</td>

                                                </tr>


                                            )}

                                    </tbody>

                                </table>
                            </div>

                        </div>

                    </div>


                </div>
            }

        </section>



    );
};

export default DoctorList;