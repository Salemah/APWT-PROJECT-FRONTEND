import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { RingLoader } from 'react-spinners';
import './ALLDoctor.css'

const AllDoctor = () => {
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
                setDoctors(rsp.data);
            }, function (err) {

            });
    }, [doctors]);
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
                </div> : <div className="">
                    <div class="container">
                        <h2 className='text-center mt-3'>all</h2>
                        <div class="row justify-content-md-center mt-5">

                            <div class="col-md-12">
                                <table class="table table-bordered border-primary">
                                    <thead>
                                        <tr>
                                            <th >Name</th>
                                            <th >Email</th>
                                            <th >Phone</th>
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
                                                    <td><button>Add</button></td>
                                                    <td><button>Add</button></td>

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

export default AllDoctor;