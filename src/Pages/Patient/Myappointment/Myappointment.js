import axios from 'axios';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import './Myappointment.css';

const Myappointment = () => {
    const [myappointment, setMyappointment] = useState([]);
    const patientid = parseInt(localStorage.getItem('id'));
    //get all appointment 
    useEffect(function () {
        axios.get(`http://localhost:8000/api/Patient/Myappointment/${patientid}`)
            .then(rsp=> {
                setMyappointment(rsp.data);
            },  (err)=> {

            });
    }, [myappointment]);

    // delete appointment
    const handledelete = id => {
        const confirm = window.confirm("Are you sure to delete this students");
        if (confirm) {
            axios.post(`http://localhost:8000/api/Appointment/Delete/${id}`)
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
            <div className="container">
                <div className="row mt-3">
                    {
                        myappointment.map(apt => <div className="col-12 col-md-4  text-white  ">
                            <div class="backgrounddsfcsd py-4 my-2 rounded">
                                <p>Doctor Name : {apt.dname}</p>
                                <p>Date: {apt.date}</p>
                                <p>Day: {apt.day}</p>
                                <p>Time: {apt.slot}</p>
                                <button id='apt-deletbtn' onClick={() => handledelete(apt.id)} >Cancel</button>
                               
                            </div>

                        </div>)
                    }


                </div>


            </div>
        </div>
    );
};

export default Myappointment;