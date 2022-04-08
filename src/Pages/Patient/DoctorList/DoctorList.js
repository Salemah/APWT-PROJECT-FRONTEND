import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';

const DoctorList = () => {
    const [doctors,setDoctors]= useState([]);
    useEffect(function () {
        axios.get("http://localhost:8000/api/alldoctor")
            .then(function (rsp) {
                //console.log(rsp)
                 setDoctors(rsp.data);
            }, function (err) {

            });
    }, []);
    return (
        <div>
            <div className="container">
                <div className="row justify-content-around">
                    {
                        doctors.map(st =>
                            <div className=" col-sm-12 col-md-4 m-1 bg-primary text-white  py-4 rounded" key={doctors.id}>

                                <p>{st.name}</p>
                                <p>{st.email}</p>
                                <p>{st.sid}</p>
                                <button   >Delete</button>
                                <button  >Edit</button>
                            </div>
                        )
                    }


                </div>


            </div>
        </div>
    );
};

export default DoctorList;