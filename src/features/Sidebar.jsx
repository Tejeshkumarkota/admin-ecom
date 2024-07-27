import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      {/* Main Sidebar Container */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <Link to="/dashboard" className="brand-link">
          <img
            src="/assets/AdminLTE-3.2.0/dist/img/AdminLTELogo.png"
            alt="eCom Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">e-Commerce</span>
        </Link>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user (optional) */}
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Dashboard
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/classes-list" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Classes List
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/classes-list/create" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Classes Create
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blank-page" className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>
                    Blank Page
                  </p>
                </Link>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </>
  );
}
