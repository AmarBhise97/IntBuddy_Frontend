import { Link } from "react-router-dom";
import intbuddylogo from "../assets/intbuddylogo.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top border-bottom">
      <div className="container-fluid">

        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center ms-2" to="/">
          <img
            src={intbuddylogo}
            alt="IntBuddy Logo"
            className="img-fluid"
            style={{
              height: "70px",
              width: "auto",
              objectFit: "contain",
            }}
          />
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarNav">

          {/* Links */}
          <ul className="navbar-nav mx-lg-3 mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-warning fw-semibold" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-warning fw-semibold" to="/About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-warning fw-semibold" to="/Contact">
                Contact
              </Link>
            </li>
          </ul>

          {/* Search Bar */}
          <form
            className="d-flex flex-grow-1 mx-lg-3 my-2 my-lg-0"
            role="search"
          >
            <input
              className="form-control rounded-pill me-2"
              type="search"
              placeholder="Search..."
            />
            <button className="btn btn-warning rounded-pill px-4" type="submit">
              Search
            </button>
          </form>

          {/* Buttons */}
          <div className="d-flex flex-column flex-lg-row gap-2 me-3 mt-2 mt-lg-0">
            <Link
              className="btn btn-outline-warning rounded-pill px-4"
              to="/Login"
            >
              Login
            </Link>

            <Link
              className="btn btn-warning rounded-pill px-4"
              to="/Registration"
            >
              Register
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;