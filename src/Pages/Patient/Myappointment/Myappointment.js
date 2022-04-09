import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Myappointment = () => {
    const [myappointment,setMyappointment] =  useState([]);
    const patientid = parseInt(localStorage.getItem('id'));
    useEffect(function () {
        axios.get(`http://localhost:8000/api/Patient/Myappointment/${patientid}`)
            .then(function (rsp) {
               console.log(rsp)
                setMyappointment(rsp.data);
            }, function (err) {

            });
    }, []);
    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        myappointment.map(st=> <div className="col bg-primary text-white m-2 py-4 rounded">
                            <p>{st.dname}</p>
                                <p>{st.date}</p>
                                <p>{st.dcid}</p>
                                <button  >Delete</button>
                                <button data-bs-toggle="modal" href="#exampleModalToggle"  >Edit</button>

                        </div> )
                    }


                </div>


            </div>
        </div>
    );
};

export default Myappointment;