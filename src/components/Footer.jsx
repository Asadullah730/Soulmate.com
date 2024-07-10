import React from 'react'
import logo from '../image/Transparent logo.png';
import './footer.css';
import border from '../image/border.png';
import { MdOutlineFacebook } from "react-icons/md";
import { CiInstagram } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
export default function Footer() {
    return (
        <>
            <div className="imgDiv">
                <img src={border} alt="Heart Border"/>
            </div>
            <div className='qoute'>Marriage are Made In Heaven But Celebrated On Earth</div>
            <div className='footer-container'>
                <div>
                    <img src={logo} alt = 'Logo' width={130} height={130}/>
                </div>

                <div className='social-media'>
                    <h6>Visit Our Social Media</h6>
                    <li><a href = '#home'><MdOutlineFacebook/>Facebook</a></li>
                    <li><a href = '#home'><CiInstagram/>    Instagram</a></li>
                    <li><a href = '#home'><FaTwitter/>      Twiter</a></li>
                </div>
                <div className='successful-stories'>
                    <h6> SuccessFul Stories</h6>
                    <li><a href = '#home'>Muslim stories</a></li>
                    <li><a href = '#home'>Non Muslim</a></li>
                    <li><a href = '#home'>Non Muslim</a></li>
                </div>
                
                <div className='social-media'>
                    <h6>About Us </h6>
                    <li><a href = '#home'>Blogs</a></li>
                    <li><a href = '#home'>Contact Us</a></li>
                    <li><a href = '#home'>History</a></li>
                </div>

                <div className='social-media'>
                    <h6>Company Policies </h6>
                    <li><a href = '#home'>Privacy Policies  </a></li>
                    <li><a href = '#home'>term & Services  </a></li>
                    <li><a href = '#home'>Picture policy </a></li>
                </div>

                
            </div>

            <div className='hadith'>
                <p>"When a man marries, he has fulfilled half of his religion,
                so let him fear Allah regarding the remaining half.” (Bukhari) </p>
            </div>

            
        </>
    );
}
