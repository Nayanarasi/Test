import React from "react";
import {Link} from 'react-router-dom';

function Header() {
    return(

<nav className="navbar"  class = "navbar-expand-sm lg-dark ">
  <a class="navbar-brand" href="#" style={{color:"red"}} >Student Management System</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  
  <div className="collapse navbar-collapse" id="navbarNav" style = {{ justifyContent: "center"}}>
    <ul class="navbar-nav">
      <li class="nav-item active">  
      <Link to="/"className="Nav-Link">Home</Link>
      </li>
      <li class="nav-item">
        <Link to="/add"className="Nav-Link">Add Student</Link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
    </ul>
  </div>
</nav>

    )
}
export default Header;
