import React from 'react';
import './LandingPage.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import busRoute from '../../assets/busRoute.svg'; // Export the dotted path as SVG

export default function LandingPage() {
  return (
    <div className="screen">
      <Navbar />
      <main className="body">
        <div className="title">
          <h1>
            TRACK <br />
            YOUR <br /> BUS!!!
          </h1>
        </div>

        <div className="route">
          <img src={busRoute} alt="Bus route" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
