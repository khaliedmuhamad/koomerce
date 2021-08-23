import React from "react";
import Link from "../Links/link";
import { RiHeartLine, RiLoginBoxLine, RiShoppingCartLine } from 'react-icons/ri';
import { MdStore } from 'react-icons/md';
import Catigories from "../../pages/categories/catigory.js";
import Shop from "../../pages/shop/shop";
import Cart from "../../pages/cart/cart";
import Fav from "../../pages/favourite/fav";
import Login from "../../pages/logIn/login";
import Home from "../../pages/home/home";
import './nav.css';
import { Route , NavLink , Switch } from 'react-router-dom' ;
import NavUp from "./nav_up";
import NavMiddle from "./nav_middle";
export default function Nav() {
  return (
    <div>
      <NavUp />
      <NavMiddle />
    <nav
      className="navbar navbar-expand-md navbar-light d-block"
      style={{ background: "#FAFAFB" }}
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
       <li class="nav-item mx-2">
        <NavLink activeClassName='active' exact  to='/'  className="nav-link" >Home<span className="sr-only">(current)</span></NavLink>
      </li>
      <li class="nav-item mx-2">
        <NavLink   to='/catigory' exact className="nav-link" >Catigories</NavLink>
      </li>
       <li class="nav-item mx-2">
        <NavLink  to='/shop' exact className="nav-link" >Store</NavLink>
     </li>
     <li class="nav-item mx-2">
        <NavLink  to='/favourate' exact className="nav-link" >Iphone</NavLink>
    </li>
      <li class="nav-item mx-2">
        <NavLink  to='/login' exact className="nav-link" >Ipad</NavLink>
      </li>
      <li class="nav-item mx-2">
        <NavLink to='/login'  exact className="nav-link" >MACBOOK</NavLink>
      </li>
      <li class="nav-item mx-2">
        <NavLink  to='/login' exact className="nav-link" >ACCESORIES</NavLink>
      </li>
  </ul>
  </div>
  </div>
  <Switch>
   <Route exact  path='/'  ><Home /></Route>
   <Route  path='/catigory'   ><Catigories /></Route>
   <Route   path='/shop' exact component={Shop} />
    <Route   path='/favourate'exact component={Fav}  />
    <Route  path='/cart' exact component={Cart}  />
    <Route  path='/login' exact component={Login}   />
  </Switch>
 
    </nav>
    </div>
  );
}
