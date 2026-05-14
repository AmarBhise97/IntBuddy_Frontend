import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Login() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    setShow(true);
  }, []);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  
  const handleLogin = (e) => {
    e.preventDefault();

   
    if (formData.email === "" || formData.password === "") {
      alert("Please fill all fields");
      return;
    }

  
    const user = {
      name: formData.email.split("@")[0], 
      email: formData.email,
      phonenumber: "9876543210"
    };

    localStorage.setItem("userData", JSON.stringify(user));

    
    navigate("/CustomerDashboard");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}
    >
      <div
        className={`text-center p-5 rounded shadow bg-white ${
          show ? "opacity-100" : "opacity-0"
        }`}
        style={{
          width: "400px",
          transform: show ? "translateY(0)" : "translateY(-50px)",
          transition: "all 0.8s ease"
        }}
      >
        <h3 className="text-dark fw-bold">Secure Login</h3>
        <p className="text-muted">
          Access your IntBuddy community account
        </p>

        <form onSubmit={handleLogin}>
          <div className="form-group text-start mt-3">
            <label>Email address</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter valid email"
              onChange={handleChange}
            />
          </div>

          <div className="form-group text-start mt-3">
            <label>Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>

          <div className="form-check text-start mt-2">
            <input type="checkbox" className="form-check-input" id="check" />
            <label className="form-check-label">Remember me</label>
          </div>

       
          <button type="submit" className="btn btn-warning w-100 mt-3 py-2">
            Login
          </button>
        </form>

        <p className="text-muted mt-3 small">
          By signing in, you agree to our{" "}
          <span className="text-primary">terms of service</span> and{" "}
          <span className="text-primary">privacy policy</span>.
        </p>

        <hr />

        <p className="text-success mt-3">
          <i className="bi bi-check-circle me-2"></i>
          Restricted to Interview users only...!
        </p>
      </div>
    </div>
  );
}

export default Login;