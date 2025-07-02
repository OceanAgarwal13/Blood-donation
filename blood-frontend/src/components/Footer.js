import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-4 pb-4 mt-5">
      <p className="text-center small mb-2 text-light">
        &copy; {new Date().getFullYear()} BloodVital. All rights reserved.
      </p>
      <div className="d-flex justify-content-center gap-4">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white fs-5">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white fs-5">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white fs-5">
          <i className="bi bi-twitter-x"></i>
        </a>
      </div>
    </footer>
  );
}
