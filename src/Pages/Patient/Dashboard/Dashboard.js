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
import SingleDoctorShedule from '../SingleDoctorshedule/SingleDoctorShedule';
import Getappointment from '../GetAppointment/Getappointment';
import Myappointment from '../Myappointment/Myappointment';
import Myprofile from '../Myprofile/Myprofile';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const username = localStorage.getItem('username');


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
                                    to={`${url}/getappointment`}>
                                    <span class="item-text">Get AppointMent</span>
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link active"
                                    to={`${url}/doctorlist`}>
                                    <span class="item-text">Doctor List</span>
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link active"
                                    to={`${url}/myappointment`}>
                                    <span class="item-text">My AppointMent</span>
                                </NavLink>
                            </li>
                            
                        </ul>
                        <div  >
                            
                           <div class="d-inline-flex">
                           <NavLink className=" me-2 buttonlogin"
                                    to={`${url}/myaprofile`} style={{ textDecoration: 'none'}}>
                                    <span class="item-text">My Profile</span>
                                </NavLink>
                            

                            {
                                username?
                                <button className='buttonlogin'><Link to='' style={{ textDecoration: 'none', color: 'white' }}    >Logout</Link></button> 
                                :
                                <button id='login-button' className='buttonlogin'><Link to='/login' style={{ textDecoration: 'none', color: 'white' }}    >Login</Link></button>
                            }
                           </div>
                            
                            
                        </div>
                    </div>


                </div>
            </nav>

            <div className="container-fluid dasboard-patient">
                <div className="row">
                    <div className="col-12">

                        <Switch>
                            <Route exact path={path}>
                            <Myappointment></Myappointment>
                            </Route>

                            <Route path={`${path}/home`}>
                            <Myappointment></Myappointment>
                            </Route>
                            <Route path={`${path}/doctorlist`}>
                                <DoctorList></DoctorList>
                            </Route>
                            <Route path={`${path}/getappointment`}>
                                <Getappointment></Getappointment>
                            </Route>
                            <Route path={`${path}/myappointment`}>
                                <Myappointment></Myappointment>
                            </Route>
                            <Route path={`${path}/myaprofile`}>
                                <Myprofile></Myprofile>
                            </Route>
                            {/* <Route path={`${path}/singledoctor/:id`}>
                            <SingleDoctorShedule></SingleDoctorShedule>
                            </Route> */}
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