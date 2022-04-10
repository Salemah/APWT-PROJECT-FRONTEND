import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Myprofile.css';

const Myprofile = () => {
    const [user, setUser] = useState({});
    const id = parseInt(localStorage.getItem('id'));
    //get all appointment 
    useEffect(function () {
        axios.get(`http://localhost:8000/api/PatientMyProfile/${id}`)
            .then(rsp => {
                console.log(rsp.data);
                setUser(rsp.data);
            }, (err) => {

            });
    }, []);
    return (
        <div class="container">

            <div class="row justify-content-center">
                <div class="col-6 crd-body">
                    <p >User Name: {user.username}</p>
                    <p >Email : {user.email}</p>
                    <p >Name : {user.name}</p>
                    <button>Edit</button>

                </div>

            </div>

        </div>
    );
};

export default Myprofile;