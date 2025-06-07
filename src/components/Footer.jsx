import React from "react";
import './Footer.css';
import PhoneCall from "../assets/PhoneCall.svg";
import Email from "../assets/Email.svg";

export default function Footer() {
  return (
    <footer>
      <p className="copyright"><span>&copy;</span>2025 Bus Tracking App India Pvt Ltd. All rights reserved</p>
      <div className="contact-info">
        <div className="phone-info">
          <img src={PhoneCall} alt="Phone Call"/>
          <span>+91 9988776600</span>
        </div>
        <div className="email-info">
          <img src={Email} alt="Email"/>
          <span>example@gmail.com</span>
        </div>
      </div>
    </footer>
  );
}
