import React from "react";
import "./trusted.css";
import chahat from "../image/chahat.jpeg";
import { useNavigate } from "react-router-dom";
export default function Trusted() {
  const SignUpNavigite = useNavigate();
  return (
    <div className="checked-item">
      <div className="background">
        <ul>
          <h3 className="trusted-heading">
            The Most Trusted Marriage Bureau in Pakistan
          </h3>
          <p>
            SoulMate.com is establish on 2024 and is a licenced,
            <br />
            government compliant marriage bureau that operates by a strict code
            of conduct.
          </p>
          <li>
            <input type="checkbox" className="check-box-container" checked />
            <label> Always Speak Truth.</label>
          </li>

          <li>
            <input type="checkbox" className="check-box-container" checked />
            <label>Always Keep Your Promise.</label>
          </li>

          <li>
            <input type="checkbox" className="check-box-container" checked />
            <label>Always Proves to be Honest. </label>
          </li>

          <li>
            <input type="checkbox" className="check-box-container" checked />
            <label>
              Always Guide with Sincerity / Properly / through the Heart.
            </label>
          </li>

          <li>
            <input type="checkbox" className="check-box-container" checked />
            <label>
              Always Search Proposal for the Clients as if They are Our
              Brothers, Sisters, Sons & Daughters.
            </label>
          </li>
        </ul>
        <div>
        <button
              className="btn-SignUp"
              type="button"
              id="btn_reg"
              onClick={() => SignUpNavigite("/register")}
            >
              Register Now
            </button>
        </div>
        
      </div>

      <div>
        <figure>
          <img src={chahat} alt="chahat" width={320} height={300} />
          <figcaption>
            SoulMate.com Sponsored by Chahat Fetah Ali Khan
          </figcaption>
        </figure>
      </div>


     
    </div>
  );
}
