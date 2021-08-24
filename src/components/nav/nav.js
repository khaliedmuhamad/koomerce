import React from "react";
import './nav.css';
import { NavLink } from 'react-router-dom';
import NavUp from "./nav_up";
import NavMiddle from "./nav_middle";
import Catigories from "../dropdowns/catigories/categories";
export default function Nav() {
  return (
    <div>
      <NavUp />
      <NavMiddle />
      <nav
        className="navbar navbar-expand-md navbar-light d-block"
        style={{ background: "#F3F1F5" }}
      >
        <div className='container d-block'>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* start nav contents */}

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li className="nav-item mx-2">
                <NavLink activeClassName='active' exact to='/' className="nav-link" >Home<span className="sr-only">(current)</span></NavLink>
              </li>
              <li className="nav-item mx-2">
                <Catigories />
              </li>
              <li className="nav-item mx-2">
                <NavLink to='/store' exact className="nav-link" >Store</NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink to='/favourate' exact className="nav-link" >Iphone</NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink to='/login' exact className="nav-link" >Ipad</NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink to='/login' exact className="nav-link" >MACBOOK</NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink to='/login' exact className="nav-link" >ACCESORIES</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
