// Login.jsx

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS

const Login = () => {
  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ maxWidth: '400px' }}>
        <div className="card-body">
          <h2 className="card-title text-center">Login</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" className="form-control" id="username" name="username" placeholder="Enter your username" />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password" />
            </div>

            <div className="mb-3">
              <div className="form-check form-check-inline">
                <input type="radio" className="form-check-input" name="userType" id="official" value="official" />
                <label className="form-check-label" htmlFor="official">Official</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="radio" className="form-check-input" name="userType" id="citizen" value="citizen" />
                <label className="form-check-label" htmlFor="citizen">Citizen</label>
              </div>
            </div>

            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
