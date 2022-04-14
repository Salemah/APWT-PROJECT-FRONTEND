import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Header from './Shared/Header';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';


import Dashboard from './Pages/Patient/Dashboard/Dashboard';
import SingleDoctorShedule from './Pages/Patient/SingleDoctorshedule/SingleDoctorShedule';
const id = parseInt(localStorage.getItem('id'));
const token = localStorage.getItem('token');

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     {/* <Header></Header> */}
     <Switch>
       <Route exact path="/">
         <Home></Home>
       </Route>  
       <Route path="/home">
         <Home></Home>
       </Route>  
       <Route path="/login">
         <Login></Login>
       </Route>  
       <Route path="/Register">
         <Register></Register>
       </Route>  
       
       
       {
         token ?<Route path="/dashboard">
         <Dashboard></Dashboard>
       </Route> : 
    
         <Login></Login>
      
        }
        <Route path="/singledoctor/:id">
         <SingleDoctorShedule></SingleDoctorShedule> 
         </Route>  
     </Switch>
     
     
     </BrowserRouter>
      
    </div>
  );
}

export default App;
