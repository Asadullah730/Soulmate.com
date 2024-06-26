import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import border from "../image/border.png";
export default function Navbar() {
  return (
    <>
      <div class="topnav">
        <a class="active" href="#home"> Home</a>
        <Link to="/register">Services</Link>
        <Link to="/About Page">About Us</Link>
        <Link to="/Contact Page">Contact Us</Link>
        <Link to="/Search">Search</Link>
        <Link to="/Successful Stories">Successful Stories</Link>
      </div>
      <div className="imgDiv">
        <img src={border} alt="Heart Border"/>
      </div>
    </>
  );
}
