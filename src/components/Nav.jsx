import React from "react";
import { NavLink } from "react-router-dom";
import def from "../assets/default-image.jpg";

const Nav = () => {
  return (
    <div className=" d-flex justify-content-between align-items-center bg-secondary text-light">
      
      <div className="m-2 d-flex align-items-center">
        
        <img className="w-25 rounded-5 m-1" src={def} alt="" />
    <div className="d-flex "> <span><h3>R</h3></span> ECIPE <br/> HOME</div>
      </div>
      <div className="d-flex ">

      <div className="m-2">
          <NavLink   className="text-decoration-none text-light" to="/home">
            Home
          </NavLink>
        </div>



        <div className="m-2">
          <NavLink  className="active:black text-decoration-none text-light" to="/about">
            About
          </NavLink>
        </div>
        <div className="m-2">
          <a
            className="text-decoration-none text-light"
            href="https://github.com/zehracelk"
          >
            Git Hub
          </a>
        </div>
        <div className="m-2">
          <NavLink className="text-decoration-none text-light" to="/">
            Log Out
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;
