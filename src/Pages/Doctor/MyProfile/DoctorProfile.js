import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Editdoctorprofile from './Editdoctorprofile';

const DoctorProfile = () => {
    const[profile,setProfile] = useState('');
    const DoctorName = localStorage.getItem('name');
    const userId = parseInt(localStorage.getItem('id'));
    useEffect(function () {
        axios.get(`http://localhost:8000/api/doctorProfile/${userId}`)
            .then(res => {
                setProfile(res.data);
            }, (err) => {

            });
    }, [profile]);
    return (
        <>
        <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Library</a></li>
            <li class="breadcrumb-item active" aria-current="page">MyAppointment</li>
        </ol>
    </nav>
        <div class="card" style={{width:'70%',margin:"auto"}}>
        <div class="card-header">
        <h3 className='text-center'>{DoctorName} Profile</h3>
        </div>
        <div class="card-body">
    <p class="card-text">Name : {profile.name}</p>
    <p class="card-text">Email : {profile.email}</p>
    <p class="card-text">Department : {profile.department}</p>
    <p class="card-text">Phone : {profile.phone}</p>
    <button className='btn btn-success'
    data-bs-toggle="modal" 
    href="#doctorprofile"
    >Edit</button>
  </div>
      </div>
      <Editdoctorprofile
      dcprofile={profile}
      >

      </Editdoctorprofile>
      </>
    );
};

export default DoctorProfile;