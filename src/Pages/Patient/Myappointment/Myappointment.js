import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { RingLoader } from 'react-spinners';
import swal from 'sweetalert';
import './Myappointment.css';

const Myappointment = () => {
    const [myappointment, setMyappointment] = useState([]);
    const patientid = parseInt(localStorage.getItem('id'));
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);
    //get all appointment 
    useEffect(function () {
        axios.get(`http://localhost:8000/api/patient/myappointment/${patientid}`)
            .then(res => {
                setMyappointment(res.data);
            }, (err) => {

            });
    }, [myappointment]);

    // delete appointment
    const handledelete = id => {
        const confirm = window.confirm("Are you sure to delete this Appointment");
        if (confirm) {
            axios.post(`http://localhost:8000/api/patient/appointment/delete/${id}`)
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
            {loading ? <div className="loading-bg">
                <div className="d-flex justify-content-center align-items-center text-center" >
                    <div className="">
                        <div className="">
                            <h5 className="fw-bold text-uppercase" style={{ color: "red", marginTop: '5px' }}>
                              <RingLoader className="App" size={60} color={"#0596F7"} loading={loading} />
                                {/* <ClockLoader className="App" size={10} color={"red"} loading={loading} /> */}

                            </h5>
                        </div>
                    </div>
                </div>
            </div> :

                <div className="container">
                    <div className="row mt-3">
                        {
                            myappointment.map(apt => <div className="col-12 col-md-4  text-white  ">
                                <div class="backgrounddsfcsd p-4 my-2 rounded">
                                    <p>Doctor Name : {apt.doctor}</p>
                                    
                                    <p>Day: {apt.day}</p>
                                    <p>Time: {apt.time}</p>
                                    <button id='apt-deletbtn' onClick={() => handledelete(apt.id)} >Cancel</button>

                                </div>

                            </div>)
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default Myappointment;