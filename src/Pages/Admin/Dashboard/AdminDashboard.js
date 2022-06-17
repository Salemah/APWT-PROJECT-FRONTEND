import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import DashboardHome from './DashboardHome';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const AdminDashboard = () => {

    return (
        <div>
                <Navbar/>
                <div class="container-fluid" id="main">
                 <div class="row row-offcanvas row-offcanvas-left">
                   <Sidebar/>
                  <DashboardHome/>
                
             </div>
            </div>  
        </div>






    );
};

export default AdminDashboard;