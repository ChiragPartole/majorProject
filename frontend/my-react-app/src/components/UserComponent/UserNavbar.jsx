// src/components/UserNavbar.js
import React from 'react';

const UserNavbar = () => {
  return (
    <nav style={navbarStyle}>
      <ul style={ulStyle}>
        <li style={{ ...liStyle, marginLeft: 'auto' }}>
          <a href="/report-crime" style={linkStyle}>
            <i className="fas fa-exclamation-triangle" style={iconStyle}></i> Report Crime
          </a>
        </li>
        <li style={liStyle}>
          <a href="/crime-map" style={linkStyle}>
            <i className="fas fa-map" style={iconStyle}></i> Crime Map
          </a>
        </li>
        <li style={liStyle}>
          <a href="/logout" style={linkStyle}>
            <i className="fas fa-sign-out-alt" style={iconStyle}></i> Logout
          </a>
        </li>
      </ul>
    </nav>
  );
};

// CSS styles
const navbarStyle = {
  backgroundColor: '#333',
  padding: '10px',
};

const ulStyle = {
  listStyleType: 'none',
  margin: '0',
  padding: '0',
  display: 'flex',
};

const liStyle = {
  marginRight: '20px',
};

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
  fontWeight: 'bold',
};

const iconStyle = {
  marginRight: '5px',
};

export default UserNavbar;
