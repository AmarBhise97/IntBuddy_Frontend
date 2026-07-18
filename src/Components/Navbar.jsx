import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import intbuddylogo from "../assets/intbuddylogo.png";

function Navbar() {

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim() === "") return;

    navigate(`/search?keyword=${search}`);
  };

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
       
           background: "#1F1F1F",



    boxShadow: "0 3px 18px rgba(0,0,0,0.45)",
    borderBottom: "1px solid rgba(12, 12, 12, 0.12)",
        minHeight: "80px",
      }}
    >
      <div className="container-fluid px-4">

        {/* Logo */}

        <Link className="navbar-brand me-4" to="/">
          <img
            src={intbuddylogo}
            alt="IntBuddy Logo"
            style={{
              height: "58px",
              width: "auto",
              objectFit: "contain",
            }}
          />
        </Link>

        {/* Mobile Toggle */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar */}

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >

          {/* Menu */}

          <ul className="navbar-nav me-4">

            <li className="nav-item">

              <Link
                to="/"
                className="nav-link fw-bold px-3"
                style={{
                  color: "#D4AF37",
                  fontSize: "21px",
                }}
              >
                Home
              </Link>

            </li>

            <li className="nav-item">

              <Link
                to="/About"
                className="nav-link fw-bold px-3"
                style={{
                  color: "#D4AF37",
                  fontSize: "21px",
                }}
              >
                About
              </Link>

            </li>

            <li className="nav-item">

              <Link
                to="/Contact"
                className="nav-link fw-bold px-3"
                style={{
                  color: "#D4AF37",
                  fontSize: "21px",
                }}
              >
                Contact
              </Link>

            </li>

          </ul>

          {/* Search */}

          <form
            className="d-flex flex-grow-1 mx-4 my-3 my-lg-0"
            onSubmit={handleSearch}
          >

            <input
              type="search"
              className="form-control rounded-pill me-2"
              placeholder="Search Company, Role, Position..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                background: "#FFFFFF",
                color: "#000",
                border: "none",
                height: "45px",
                fontSize: "16px",
                paddingLeft: "20px",
              }}
            />

            <button
              className="btn rounded-pill fw-bold px-4"
              type="submit"
              style={{
                background: "#D4AF37",
                color: "#222",
                border: "none",
                minWidth: "100px",
                height: "45px",
              }}
            >
              Search
            </button>

          </form>

          {/* Login Register */}

          <div className="d-flex gap-2">

            <Link
              to="/Login"
              className="btn rounded-pill px-4 fw-semibold"
              style={{
                border: "2px solid #D4AF37",
                color: "#D4AF37",
                minWidth: "100px",
                height: "45px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Login
            </Link>

            <Link
              to="/Registration"
              className="btn rounded-pill px-4 fw-semibold"
              style={{
                background: "#D4AF37",
                color: "#222",
                border: "none",
                minWidth: "110px",
                height: "45px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
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