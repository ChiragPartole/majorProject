// src/components/OfficialNavbar.jsx

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const OfficialNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/official-home">Crime Management System</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/official-home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/official-home/crime-profiling">Crime Profiling</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/official-home/crime-profiling">Crime Prediction</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/official-home/crime-profiling">Crime Mapping</a>

            </li>
            <li className="nav-item">
              <a className="nav-link" href="/official-home/crime-profiling">Crime Management</a>
            </li>
            
            {/* ... other navigation links ... */}
            <li className="nav-item">
              <a className="nav-link" href="/logout">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default OfficialNavbar;
