import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  // const SignUpNavigite = useNavigate();
  const signInNavigate = useNavigate();
  return (
    <>
      <div className="header1 sticky-top "style={{ backgroundColor: '#9D2B48' }}>
        <nav className="navbar navbar-expand-lg ">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-center me-auto">
                <li className="">
                  <Link  to="/"aria-current="page" className="links" href="#">
                    Home
                  </Link>
                </li>
                <li className="ms-4">
                  <Link to="/about" className="links">
                    About
                  </Link>
                </li>
                <li className="ms-4">
                  <Link to="/contact" className="links">
                    Contact
                  </Link>
                </li>
                <li className="ms-4">
                  <Link to="/services" className="links">
                    Services
                  </Link>
                </li>
                <li className="ms-4">
                  <Link to="/stories" className="links">
                    Successfull Stories
                  </Link>
                </li>
              </ul>
            </div>

            {/* <button
              className="btn-SignUp"
              type="button"
              id="btn_reg"
              onClick={() => SignUpNavigite("/register")}
            >
              Register Now
            </button> */}
            <button
              className="btn-Signin"
              type="button"
              id="btn_signin"
              onClick={() => signInNavigate("/login")}
            >
              Sign In
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
