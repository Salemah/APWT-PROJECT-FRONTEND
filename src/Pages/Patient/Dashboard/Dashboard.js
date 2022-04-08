import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import Home from '../../Home/Home/Home';
import patientimg from '../../../images/pt.png'
import './Dashboard.css';
import DHome from '../DashboardHome/DHome';
import DoctorList from '../DoctorList/DoctorList';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    return (
        <>

            <nav class="navbar navbar-expand-lg navbar-light  headr">
                <div class="container-fluid">
                    <img id='patientimg' src={patientimg} alt="" />
                    <span class='patientdashboard'>Dashboard</span>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item">
                                <NavLink className="nav-link active" to={`${url}/home`}>
                                    Dashboard Home
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link active"
                                    to={`${url}`}>
                                    <span class="item-text">Get AppointMent</span>
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link active"
                                    to={`${url}/doctorlist`}>
                                    <span class="item-text">Doctor List</span>
                                </NavLink>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                        <div  >
                            <button id='login-button' className='buttonlogin'><Link to='/login' style={{ textDecoration: 'none', color: 'white' }}    >Login</Link></button>
                            <button className='buttonlogin'><Link to='/register' style={{ textDecoration: 'none', color: 'white' }}    >Register</Link></button>
                        </div>
                    </div>


                </div>
            </nav>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">

                        <Switch>
                            <Route exact path={path}>
                                <DHome></DHome>
                            </Route>

                            <Route path={`${path}/home`}>
                                <Home></Home>
                            </Route>
                            <Route path={`${path}/doctorlist`}>
                                <DoctorList></DoctorList>
                            </Route>
                            {/* <AdminRoute path={`${path}/admin/add/icecream`}>
                            <AddProduct></AddProduct>
                        </AdminRoute>
                        <AdminRoute path={`${path}/admin/show/icecreams`}>
                            <AllProducts />
                        </AdminRoute>
                        <AdminRoute path={`${path}/admin/show/orders`}>
                            <AllOrders></AllOrders>
                        </AdminRoute>
                        <AdminRoute path={`${path}/admin/makeadmin`}>
                            <MakeAdmin></MakeAdmin> */}
                            {/* </AdminRoute>
                        <Route path={`${path}/user/show/orders`}>
                            <UserOrders></UserOrders>
                        </Route>
                        <Route path={`${path}/user/add/reviews`}>
                            <AddReviews />
                        </Route>
                        <Route path={`${path}/user/show/reviews`}>
                            <ShowReviews></ShowReviews>
                        </Route>
                        <Route path={`${path}/user/pay/orders`}>
                            <Pay></Pay>
                        </Route> */}
                        </Switch>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;