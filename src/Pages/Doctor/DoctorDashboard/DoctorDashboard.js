import axios from 'axios';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import swal from 'sweetalert';

import DoctorHome from '../DoctorHome/DoctorHome';
import DoctorMyappointment from '../MyAppointment/DoctorMyappointment';
import DoctorProfile from '../MyProfile/DoctorProfile';
import MySlot from '../MySlot/MySlot';






const DoctorDashboard = () => {
    const DoctorName = localStorage.getItem('name');
    const { url, path } = useRouteMatch();
    const history = useHistory();
    const logout = (event) => {
        event.preventDefault();

        //console.log(data);
        axios.post('http://localhost:8000/api/logout')
            .then(response => {
                if (response.data.status === 'success') {
                    localStorage.removeItem(' usertype', response.data.usertype);
                    localStorage.removeItem('userId', response.data.userId);
                    localStorage.removeItem('id', response.data.id);
                    localStorage.removeItem('name', response.data.name);
                    localStorage.removeItem('email', response.data.email);
                    swal("Success", response.data.message, "success");
                    history.push('/');
                } else {
                    swal("Warning", "Something wrong", "error");
                }
            })
    }

    return (
        <div class="">

            <div class="row">

                <div class="col-md-2 col-lg-2 pl-0   bg-dark" >
                    <nav class="navbar navbar-expand-lg navbar-light ">
                        <div class="container-fluid  ">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                                <div class="">

                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-column  pl-0 pt-5 p-3 mt-3 ">
                                        <div class="" style={{ color: 'red', textAlign: "left", fontSize: '20px', fontWeight: 'bold' }}>
                                            <p>{DoctorName} Dashboard</p>
                                        </div>
                                        <li class="nav-item  "> <Link to={`${url}`} class="nav-link text-warning text-decoration-none">
                                            <i class="fas fa-user font-weight-bold"></i><span className="ml-3">Dashboard</span>

                                        </Link></li>
                                        <li class="nav-item "> <Link to={`${url}/appointment`} class="nav-link text-warning text-decoration-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                            </svg>
                                            <span className="ml-2">Appointment</span>

                                        </Link></li>
                                        <li class="nav-item "> <Link to={`${url}/myprofile`} class="nav-link text-warning text-decoration-none">
                                            <i class="fas fa-user"></i><span className="ml-3">My Profile</span>

                                        </Link></li>
                                        {/*  */}
                                       
                                        <li class="nav-item "> <Link to={`${url}/myslot`} class="nav-link text-warning text-decoration-none">
                                            <i class="fas fa-user"></i><span className="ml-3">Slot List</span>

                                        </Link></li>
                                        {/*  */}
                                       



                                        <li class="nav-item mb-2 ">
                                            <button className='btn btn-warning ' onClick={logout}>Logout</button>
                                        </li>

                                    </ul>
                                </div>
                            </div>

                        </div>
                    </nav>
                </div>
                <div class="col-12 col-md-10 col-lg-10 me-0 pe-0  dasboard-bg ">
                    <Switch>
                        <Route exact path={path}>
                            <DoctorHome />
                        </Route>
                        <Route exact path={`${path}/appointment`}>
                            <DoctorMyappointment />
                        </Route>
                        <Route exact path={`${path}/myprofile`}>
                            <DoctorProfile />
                        </Route>
                        <Route exact path={`${path}/myslot`}>
                            <MySlot />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
};


export default DoctorDashboard;