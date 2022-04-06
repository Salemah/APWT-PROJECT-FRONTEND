import React from 'react';
import { FcAddDatabase } from "react-icons/fc";
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div className=" ">
            <nav class="navbar navbar-expand-lg navbar-light  headr">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><FcAddDatabase />EHealh Care</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item">
                                <Link class="nav-link active" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Doctor</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">AppointMent</a>
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
                            <button id='login-button' className='buttonlogin'><Link to='/login' style={{textDecoration:'none',color:'white'}}    >Login</Link></button>
                            <button className='buttonlogin'><Link to='/register' style={{textDecoration:'none',color:'white'}}    >Register</Link></button>
                        </div>
                    </div>


                </div>
            </nav>
        </div>
    );
};

export default Header;