import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { RingLoader } from 'react-spinners';
import EditmMyProfile from '../EditMyprofile/EditmMyProfile';
import './Myprofile.css';

const Myprofile = () => {
    const [user, setUser] = useState({});
    const [edituser, setEditUser] = useState({});
    const id = parseInt(localStorage.getItem('id'));

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    //get all appointment 
    useEffect(function () {
        axios.get(`http://localhost:8000/api/PatientMyProfile/${id}`)
            .then(rsp => {
                setUser(rsp.data);
            }, (err) => {

            });
    }, [user]);
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
<div class="">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-6 crd-body">
                        <p >User Name: {user.username}</p>
                        <p >Email : {user.email}</p>
                        <p >Name : {user.name}</p>
                        <button id='editprofile-btn'
                        onClick={() => setEditUser(user)} 
                         data-bs-toggle="modal" 
                         href="#exampleModalToggle">Edit</button>
                    </div>

                </div>
            </div>
            <EditmMyProfile
            editprofile={edituser}
            
            >

            </EditmMyProfile>
        </div>}
        </section>
        
    );
};

export default Myprofile;