import React from 'react';
import './../styles/Sidebar.css';

function Sidebar() {
  return (
    <div className="position-sticky pt-md-5">
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            <span className="ml-2">Dashboard</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <span className="ml-2">Orders</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <span className="ml-2">Products</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <span className="ml-2">Customers</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <span className="ml-2">Reports</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <span className="ml-2">Integrations</span>
          </a>
        </li>
      </ul>
    </div>


  );
}

export default Sidebar;
