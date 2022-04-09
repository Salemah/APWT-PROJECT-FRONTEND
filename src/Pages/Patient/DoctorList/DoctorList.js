import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const DoctorList = () => {
    const [doctors,setDoctors]= useState([]);
    const history = useHistory();
    useEffect(function () {
        axios.get("http://localhost:8000/api/alldoctor")
            .then(function (rsp) {
                //console.log(rsp)
                 setDoctors(rsp.data);
            }, function (err) {

            });
    }, []);



    // const DoctorShedule = id =>{
    //     const url = `/singledoctor/${id}`;
    //     history.push(url);
    // }
    return (
        <div>
            <div className="container">
                <div className="row justify-content-around">
                    {
                        doctors.map(dc =>
                            <div className=" col-sm-12 col-md-4 m-1 bg-primary text-white  py-4 rounded justify" key={doctors.id}>

                                <p>{dc.name}</p>
                                <p>{dc.email}</p>
                                <p>{dc.department}</p>
                               
                            </div>
                        )
                    }


                </div>


            </div>
        </div>
    );
};

export default DoctorList;