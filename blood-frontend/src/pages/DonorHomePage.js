import React from 'react';
import { Link } from 'react-router-dom';

export default function DonorHomePage() {
  const userId = localStorage.getItem('userId');

  const sectionStyle = {
    backgroundColor: 'rgba(9, 85, 75, 0.45)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '1rem',
    padding: '1.5rem',
    marginBottom: '1.5rem',
    boxShadow: '0 0 20px rgba(255,255,255,0.1)',
  };

  return (
    <div className="container mt-4 mb-5">
      <div className="p-4">
        <h2 className="text-center mb-4 fw-bold text-white">🩸 Donor HomePage 🩸</h2>
        <h5 className="text-center mb-4 fw-bold text-warning">Welcome to our HomePage, Lets explore our services !!!</h5>

        {/* Blood Centres */}
        <section style={sectionStyle}>
          <h5 className="fw-bold text-warning">🏥 Nearest Blood Centres</h5>
          <p className="text-white">Find blood banks and donation centres near your location.</p>
          <Link to="/nearby-centres" className="btn btn-outline-light btn-sm">Find Centres</Link>
        </section>

        {/* Donation Camps */}
        <section style={sectionStyle}>
          <h5 className="fw-bold text-warning">🗓 Upcoming Donation Camps</h5>
          <p className="text-white">Stay informed about upcoming donation drives and events.</p>
          <Link to="/donation-camps" className="btn btn-outline-light btn-sm">View Camps</Link>
        </section>

        {/* Types of Donation */}
        <section style={sectionStyle}>
          <h5 className="fw-bold text-warning">🧪 Types of Donation</h5>
          <p className="text-white">Learn about whole blood, plasma, platelets, and double red cell donation.</p>
          <Link to="/donation-types" className="btn btn-outline-light btn-sm">Explore Types</Link>
        </section>

        {/* Donation Procedure */}
        <section style={sectionStyle}>
          <h5 className="fw-bold text-warning">🔄 Donation Procedure</h5>
          <p className="text-white">Understand the steps involved before, during, and after donation.</p>
          <Link to="/donation-procedure" className="btn btn-outline-light btn-sm">Read Procedure</Link>
        </section>

        {/* Appointment Booking */}
        <section style={sectionStyle}>
          <h5 className="fw-bold text-warning">📅 Book an Appointment</h5>
          <p className="text-white">Choose a centre and schedule your donation at your convenience.</p>
          <Link to="/book-appointment" className="btn btn-outline-light btn-sm">Book Now</Link>
        </section>

        {/* Donation History */}
        <section style={sectionStyle}>
          <h5 className="fw-bold text-warning">📜 Donation History</h5>
          <p className="text-white">Track your past donations and stay motivated!</p>
          <Link to={`/donation-history/${userId}`} className="btn btn-outline-light btn-sm">View History</Link>
        </section>

        {/* <div className="text-center mt-4">
          <Link to="/logout" className="btn btn-danger w-100 fw-bold">Logout</Link>
        </div> */}
      </div>
    </div>
  );
}
