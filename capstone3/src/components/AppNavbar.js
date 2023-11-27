import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/AppNavbar.css';

export default function AppNavbar() {
  const location = useLocation();
  const avoidRenderAt = ['/sign_in', '/sign_up'];
  const checkToken = localStorage.getItem('token')

  // Check if the current path is in the avoidRenderAt array
  const renderNavbar = !avoidRenderAt.includes(location.pathname);

  const logout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  if (!renderNavbar) {
    return null;
  } else {
    return (
      <div className="appnavbar">
        <div className="sub-container">
          <Link to="/">
            <img className="logo" src="blue-exclsv.png" alt="Logo" />
          </Link>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/products">
            <button>Products</button>
          </Link>
        </div>
        {
          checkToken ?
          <Link to="/">
            <button onClick={logout}>Logout</button>
          </Link>
          :
          <Link to="/sign_in">
            <button>Sign In</button>
          </Link>
        }
      </div>
    );
  }
}