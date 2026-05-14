import { Link } from "react-router-dom";
import intbuddylogo from "../assets/intbuddylogo.png";

function Navbar() {
  return (
    // Changed bg to white and added border-bottom for a clean look
    <nav className="navbar navbar-expand-lg shadow-sm fixed-top bg-dark border-bottom">
      <div className="container-fluid px-0">
        
        <Link className="navbar-brand ms-3 d-flex align-items-center" to="/">
          <img 
            src={intbuddylogo} 
            alt="IntBuddy Logo" 
            style={{ 
              height: "90px", 
              width: "auto", 
              objectFit: "contain",
              marginTop: "-20px",
              marginBottom: "-20px" 
            }}  
          />
        </Link>

        <button className="navbar-toggler me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
        
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-warning fw-semibold" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-warning fw-semibold" to="/About">About</Link>
            </li>
            <li className="nav-item">
              <button className="nav-link text-warning fw-semibold" >Contact</button>
            </li>
          </ul>

          <form className="d-flex mx-auto" style={{ width: "40%" }}>
            <input className="form-control rounded-pill me-2 border-secondary" type="search" placeholder="Search..." />
           
            <button className="btn btn-warning rounded-pill px-4" type="submit">Search</button>
          </form>

          <div className="d-flex align-items-center me-3">
          
            <Link className="btn btn-outline-warning rounded-pill me-2 px-4" to="/Login">Login</Link>
            
            <Link className="btn btn-warning rounded-pill px-4" to="/Registration">Register</Link>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;