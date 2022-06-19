import axios from 'axios';
import React from 'react'
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
export const Navbar = () => {
  const history = useHistory();

  const logout = (event) => {
    event.preventDefault();
   
    //console.log(data);
    axios.post('http://localhost:8000/api/logout')
        .then(response => {
            if (response.data.status === 'success') {
               localStorage.removeItem(' usertype', response.data.usertype);
                localStorage.removeItem('userId', response.data.userId);
                localStorage.removeItem('id', response.data.id);
                localStorage.removeItem('name', response.data.name);
                localStorage.removeItem('email', response.data.email);
                swal("Success", response.data.message, "success");
                history.push('/');
            } else {
                swal("Warning", "Something wrong", "error");
            }
        })
}
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
              <button onClick={logout}>Logout</button>
            </form>
          </div>
        </div>
      </nav>
    )
}
export default Navbar