import React from "react";
import { NavLink } from "react-router-dom";

const MainMenu = () => (
    /* <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/estudiantes">Estudiantes</NavLink></li>
        <li><NavLink to="/contacto">Contacto</NavLink></li>
    </ul> */
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Menu</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <li class="nav-link"><NavLink to="/">Home</NavLink></li>
        </li>
        <li class="nav-item">
        <li class="nav-link"><NavLink to="/estudiantes">Estudiantes</NavLink></li>
        </li>
        <li class="nav-item">
        <li class="nav-link"><NavLink to="/contacto">Contacto</NavLink></li>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
);

export default MainMenu;