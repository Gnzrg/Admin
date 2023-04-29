import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <div className="w-100">
      <div className="Header row justify-content-between bg-warning">
        <div className="col-md-1">
          <img
            src={require("../images/ErchLogo.png")}
            alt="ErchLogo"
            className="w-100 ps-3"
          />
        </div>
        <div className="col-md-9 d-flex align-items-center">
          <ul className="d-flex w-100 list-unstyled justify-content-evenly">
            <li>
              <NavLink to="/" className="fs-3 text-decoration-none text-dark">
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/order"
                className="fs-3 text-decoration-none text-dark"
              >
                Orders
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/user"
                className="fs-3 text-decoration-none text-dark"
              >
                User
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/employee"
                className="fs-3 text-decoration-none text-dark"
              >
                Employees
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="row d-flex h-100 ">
        <div className="col-md-2 bg-warning" style={{ height: "625px" }}>
          <ul className="d-flex flex-column list-unstyled gap-3 justify-content-evenly w-100 pt-4">
            <li>
              <NavLink to="/" className="fs-3 text-decoration-none text-dark">
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/order"
                className="fs-3 text-decoration-none text-dark"
              >
                Orders
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/user"
                className="fs-3 text-decoration-none text-dark"
              >
                User
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/employee"
                className="fs-3 text-decoration-none text-dark"
              >
                Employees
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/test"
                className="fs-3 text-decoration-none text-dark"
              >
                tests
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="col-md-10 pt-4">
          <Outlet />
        </div>
      </div>

      <div className="Footer"></div>
    </div>
  );
}
