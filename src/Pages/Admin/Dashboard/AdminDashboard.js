import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AddDoctor from '../Adddoctor/AddDoctor';
import DashboardHome from './DashboardHome';
import Navbar from './Navbar';
import '../Adddoctor/AddDoctor.css'
import Makeadmin from '../MakeAdmin/Makeadmin';
import AddDoctorSlot from '../AddDoctorSlot/AddDoctorSlot';

const AdminDashboard = () => {
    const { url, path } = useRouteMatch()
    return (
        <div class="">
            <Navbar />
            <div class="row">

                <div class="col-md-2 col-lg-2 pl-0  bg-dark" >
                    <nav class="navbar navbar-expand-lg navbar-light ">
                        <div class="container-fluid  ">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                                <div class="">
                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-column  pl-0 pt-5 p-3 mt-3 ">
                                        <li>
                                            <Link to={`${url}/myOrders`} class="text-warning text-decoration-none">

                                                My Ord
                                            </Link>

                                        </li>
                                        <li class="nav-item  "> <Link to={`${url}`} class="nav-link text-warning text-decoration-none">
                                            <i class="fas fa-user font-weight-bold"></i><span className="ml-3">Dashboard</span>

                                        </Link></li>
                                        <li class="nav-item "> <Link to={`${url}/adddoctor`} class="nav-link text-warning text-decoration-none">
                                            <i class="fas fa-user"></i><span className="ml-3">Add Doctor</span>

                                        </Link></li>
                                        <li class="nav-item "> <Link to={`${url}/makeadmin`} class="nav-link text-warning text-decoration-none">
                                            <i class="fas fa-user"></i><span className="ml-3">Add Admin</span>

                                        </Link></li>
                                        <li class="nav-item "> <Link to={`${url}/adddoctorslot`} class="nav-link text-warning text-decoration-none">
                                            <i class="fas fa-user"></i><span className="ml-3">DoctorSlot</span>

                                        </Link></li>


                                        <li class="nav-item  "><a class="nav-link text-secondary" href="#"><i class="fas fa-user font-weight-bold"></i> <span className="ml-3">Overview</span></a></li>

                                        <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="far fa-chart-bar font-weight-bold"></i> <span className="ml-3">Analytics</span></a></li>
                                        <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="fas fa-file-export font-weight-bold"></i><span className="ml-3">Export</span></a></li>

                                    </ul>
                                </div>
                            </div>

                        </div>
                    </nav>
                </div>
                <div class="col-10 me-0 pe-0  dasboard-bg ">
                    <Switch>
                        <Route exact path={path}>
                            <DashboardHome />
                        </Route>
                        <Route path={`${path}/myOrders`}>

                            <AddDoctor />
                        </Route>
                        <Route path={`${path}/adddoctor`}>

                            <AddDoctor />
                        </Route>
                        <Route path={`${path}/makeadmin`}>
                            <Makeadmin />
                        </Route>
                        <Route path={`${path}/adddoctorslot`}>
                            <AddDoctorSlot />
                        </Route>

                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;