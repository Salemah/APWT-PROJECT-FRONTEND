
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Registration from './Pages/Register/Registration';
import Dashboard from './Pages/Patient/Dashboard/Dashboard';
import SingleDoctorShedule from './Pages/Patient/SingleDoctorshedule/SingleDoctorShedule';

import Login3 from './Pages/Login/Login3';
import AdminDashboard from './Pages/Admin/Dashboard/AdminDashboard';
import DoctorDashboard from './Pages/Doctor/DoctorDashboard/DoctorDashboard';




// const id = parseInt(localStorage.getItem('id'));
// const token = localStorage.getItem('token');

function App() {
  return (
    <div className="">
     <BrowserRouter>
   
     <Switch>
       <Route exact path="/">
         <Home></Home>
       </Route>  
       <Route path="/home">
         <Home></Home>
       </Route>  
        
       <Route path="/login">
         <Login3></Login3>
       </Route>  
       <Route path="/Register">
         <Registration></Registration>
       </Route>  
       {/* <Route path="/AddDoctor">
         <AdminDashboard/>
       </Route>   */}
       
       
      <Route path="/dashboard">
         <Dashboard></Dashboard>
       </Route>
      <Route path="/admindashboard">
      <AdminDashboard/>
       </Route>
      <Route path="/doctordashboard">
      <DoctorDashboard/>
       </Route>
        <Route path="/singledoctor/:id">
         <SingleDoctorShedule></SingleDoctorShedule> 
         </Route>  
     </Switch>
     
   
     </BrowserRouter>
      
    </div>
  );
}

export default App;
