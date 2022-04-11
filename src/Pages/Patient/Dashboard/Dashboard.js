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
import axios from 'axios';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const username = localStorage.getItem('username');
    const history = useHistory();
    const token = localStorage.getItem('token');


    const logout = (event) => {
        event.preventDefault();
        const data = {
            token: localStorage.getItem('token')
        };
        //console.log(data);
        axios.post('http://localhost:8000/api/logout', data)
            .then(response => {
                if (response.data.status === 'success') {
                    localStorage.removeItem('token', response.data.token);
                    localStorage.removeItem('type', response.data.type);
                    localStorage.removeItem('id', response.data.id);
                    localStorage.removeItem('name', response.data.name);
                    localStorage.removeItem('email', response.data.email);
                    localStorage.removeItem('username', response.data.username);
                    swal("Success", response.data.message, "success");
                    history.push('/');
                } else {
                    swal("Warning", "Something wrong", "error");
                }
            })
    }


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
                                <button onClick={logout}  className='buttonlogin'><Link  style={{ textDecoration: 'none', color: 'white' }}    >Logout</Link></button> 
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
                            
                        </Switch>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;