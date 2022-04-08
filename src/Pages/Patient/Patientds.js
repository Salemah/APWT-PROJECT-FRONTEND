import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Login from '../Login/Login';
import Home from '../Home/Home/Home'
// import './Dashboard.css';
// import Ptb from './Ptb';

const Patientds = () => {
    let { path, url } = useRouteMatch();
    return (
        <>
      <nav class="navbar navbar-light bg-light fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Offcanvas navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
          <NavLink className="nav-link text-light"
                                                 to={`${url}/home`}
                                                activeStyle={{
                                                    fontWeight: "bold",
                                                    color: 'red'
                                                }}>
                                                All Orders
                                            </NavLink>
          </li>
          <li class="nav-item">
          <NavLink className="nav-link text-light"
                                                 to={`${url}/dfs`}
                                                activeStyle={{
                                                    fontWeight: "bold",
                                                    color: "#636"
                                                }}>
                                                All Orders
                                            </NavLink>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr />
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
<div className="container-fluid">
            <div className="row">
                <div className="col-12">
                  
                    <Switch>
                        <Route exact path={`${path}/dfs`}>
                           {/* <Ptb></Ptb> */}
                        </Route>
                        <Route exact path={`${path}/home`}>
                           <Home></Home>
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

export default Patientds;