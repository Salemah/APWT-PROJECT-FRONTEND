import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AddDoctor from '../Adddoctor/AddDoctor';
import DashboardHome from './DashboardHome';
import Navbar from './Navbar';
import Makeadmin from '../MakeAdmin/Makeadmin';
import AllDoctor from '../ALLdoctor/AllDoctor';
import AddDoctorSlot from '../ALLdoctor/AddDoctorSlot/AddDoctorSlot';
import AllAppointments from '../AllAppointments/AllAppointments';
import AllPatient from '../AllPatient/AllPatient';
import img  from '../../../images/single-img-24.jpg'
import './dashboard.css'
import axios from 'axios';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const AdminDashboard = () => {
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
                                <div class="mt-4" style={{ color: 'red', textAlign: "center", fontSize: '18px', fontWeight: 'bold' }}>
                                            <p>{DoctorName} Dashboard</p>
                                            <div class="dasbord-img">
                                            <img src={img } alt=""/>
                                            </div>
                                        </div>
                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-column  pl-0 pt-5 p-3 mt-3 ">
                                        <li class="nav-item  "> <Link to={`${url}`} class="nav-link text-warning text-decoration-none">
                                            <i class="fas fa-user font-weight-bold"></i><span className="ml-3">Dashboard</span>

                                        </Link></li>
                                        <li class="nav-item "> <Link to={`${url}/adddoctor`} class="nav-link text-warning text-decoration-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                            </svg>
                                            <span className="ml-3">Add Doctor</span>

                                        </Link></li>
                                        <li class="nav-item "> <Link to={`${url}/makeadmin`} class="nav-link text-warning text-decoration-none">
                                            <i class="fas fa-user"></i><span className="ml-3">Add Admin</span>

                                        </Link></li>
                                        {/*  */}
                                        <li class="nav-item "> <Link to={`${url}/allapt`} class="nav-link text-warning text-decoration-none">
                                            <i class="fas fa-user"></i><span className="ml-3">Appointment</span>

                                        </Link></li>
                                        <li class="nav-item "> <Link to={`${url}/allpatient`} class="nav-link text-warning text-decoration-none">
                                            <i class="fas fa-user"></i><span className="ml-3">PatientList</span>

                                        </Link></li>
                                        {/*  */}
                                        <li class="nav-item "> <Link to={`${url}/adddoctorslot`} class="nav-link text-warning text-decoration-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">
                                                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                                                <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                                            </svg><span className="ml-3">DoctorSlot</span>

                                        </Link></li>

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
                            <DashboardHome />
                        </Route>
                        <Route path={`${path}/addslot`}>
                            <AddDoctorSlot />
                        </Route>
                        <Route path={`${path}/adddoctor`}>
                            <AddDoctor />
                        </Route>
                        <Route path={`${path}/makeadmin`}>
                            <Makeadmin />
                        </Route>
                        <Route path={`${path}/adddoctorslot`}>
                            <AllDoctor />
                        </Route>
                        <Route path={`${path}/allapt`}>
                            <AllAppointments />
                        </Route>
                        <Route path={`${path}/allpatient`}>
                            <AllPatient />
                        </Route>
                        
                       

                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;