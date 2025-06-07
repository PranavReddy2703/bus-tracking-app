import React from "react";
import './Navbar.css';
import BusIcon from "./BusIcon";

export default function Navbar() {
  return (
    <nav className="header">
      <BusIcon width={40} height={40} />
      <button className="login-button">
        LOGIN
      </button>
    </nav>
  );
}
