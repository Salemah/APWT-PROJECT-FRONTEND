import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Header from './Shared/Header';
import Home from './Pages/Home/Home/Home';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header></Header>
     <Switch>
       <Route exact path="/">
         <Home></Home>
       </Route>  
       <Route path="/home">
         <Home></Home>
       </Route>  
     </Switch>
     
     
     </BrowserRouter>
      
    </div>
  );
}

export default App;
