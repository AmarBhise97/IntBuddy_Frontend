import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function AddExperience() {

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    companyName: "",
    position: "",
    role: "",
    experianceinyear: "",
    details: "",
    result: "",
  });

  // HANDLE INPUT
  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // SUBMIT EXPERIENCE
  const submitExperience = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      // GET USER DATA
      const user = JSON.parse(
        localStorage.getItem("userData")
      );

      const experienceData = {

        companyName: formData.companyName,

        position: formData.position,

        role: formData.role,

        experianceinyear: formData.experianceinyear,

        details: formData.details,

        result: formData.result === "true",

        user: {
          id: user.id
        }
      };

      const response = await axios.post(
        "http://localhost:9090/Experiance/add",
        experienceData
      );

      console.log(response.data);

      setMessage("Experience Added Successfully ✅");

      // CLEAR FORM
      setFormData({
        companyName: "",
        position: "",
        role: "",
        experianceinyear: "",
        details: "",
        result: "",
      });

    } catch (error) {

      console.log(error);

      setMessage("Failed To Add Experience ❌");

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="card border-0 shadow-lg rounded-5 p-5 bg-white">

      <h2 className="fw-bold mb-4 text-dark">

        Add Interview Experience

      </h2>

      {message && (

        <div className="alert alert-warning">

          {message}

        </div>
      )}

      <form onSubmit={submitExperience}>

        {/* COMPANY */}
        <div className="mb-4">

          <label className="fw-semibold mb-2">
            Company Name
          </label>

          <input
            type="text"
            className="form-control rounded-4 p-3"
            placeholder="Enter company name"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />

        </div>

        {/* POSITION */}
        <div className="mb-4">

          <label className="fw-semibold mb-2">
            Position
          </label>

          <input
            type="text"
            className="form-control rounded-4 p-3"
            placeholder="Enter position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
          />

        </div>

        {/* ROLE */}
        <div className="mb-4">

          <label className="fw-semibold mb-2">
            Role
          </label>

          <input
            type="text"
            className="form-control rounded-4 p-3"
            placeholder="Enter role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          />

        </div>

        {/* EXPERIENCE */}
        <div className="mb-4">

          <label className="fw-semibold mb-2">
            Experience
          </label>

          <select
            className="form-control rounded-4 p-3"
            name="experianceinyear"
            value={formData.experianceinyear}
            onChange={handleChange}
            required
          >

            <option value="">
              Select Experience
            </option>

            <option value="Fresher">
              Fresher
            </option>

            <option value="0-2 Years">
              0-2 Years
            </option>

            <option value="2+ Years">
              2+ Years
            </option>

          </select>

        </div>

        {/* OFFER */}
        <div className="mb-4">

          <label className="fw-semibold d-block mb-2">
            Got Offer?
          </label>

          <div className="d-flex gap-4">

            <div className="form-check">

              <input
                type="radio"
                className="form-check-input"
                name="result"
                value="true"
                checked={formData.result === "true"}
                onChange={handleChange}
              />

              <label className="form-check-label">
                Yes
              </label>

            </div>

            <div className="form-check">

              <input
                type="radio"
                className="form-check-input"
                name="result"
                value="false"
                checked={formData.result === "false"}
                onChange={handleChange}
              />

              <label className="form-check-label">
                No
              </label>

            </div>

          </div>

        </div>

        {/* DETAILS */}
        <div className="mb-4">

          <label className="fw-semibold mb-2">
            Experience Details
          </label>

          <textarea
            rows="6"
            className="form-control rounded-4 p-3"
            placeholder="Write interview experience..."
            name="details"
            value={formData.details}
            onChange={handleChange}
            required
          ></textarea>

        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="btn btn-warning px-5 py-3 rounded-4 fw-bold"
          disabled={loading}
        >

          {loading
            ? "Submitting..."
            : "Submit Experience"}

        </button>

      </form>

    </div>
  );
}

function CustomerDashboard() {

  const [activeTab, setActiveTab] = useState("overview");

  const [user, setUser] = useState({
    fullName: "Guest User",
    email: "",
  });

  const navigate = useNavigate();

  // GET USER DATA
  useEffect(() => {

    const data = localStorage.getItem("userData");

    if (data) {

      const parsed = JSON.parse(data);

      setUser({
        fullName: parsed.fullName || parsed.name,
        email: parsed.email,
      });
    }

  }, []);

  // LOGOUT
  const handleLogout = () => {

    localStorage.removeItem("userData");

    navigate("/login");
  };

  // SIDEBAR BUTTON STYLE
  const getBtnClass = (tab) =>
    `btn w-100 text-start mb-3 border-0 rounded-4 py-3 fw-semibold ${
      activeTab === tab
        ? "text-dark bg-warning shadow-sm"
        : "text-secondary bg-white"
    }`;

  return (

    <div
      className="min-vh-100"
      style={{
        backgroundColor: "#f5f7fb"
      }}
    >

      {/* NAVBAR */}
      <nav
        className="navbar navbar-expand-lg px-4 shadow-sm"
        style={{
          background: "#ffc107",
          height: "70px"
        }}
      >

        {/* LOGO */}
        <Link
          className="navbar-brand fw-bold fs-2 text-dark"
          to="/"
        >
          IntBuddy
        </Link>

        {/* USER */}
        <div className="ms-auto d-flex align-items-center">

          <img
            src={`https://ui-avatars.com/api/?name=${user.fullName}&background=000000&color=ffffff&size=128`}
            alt="profile"
            className="rounded-circle shadow-sm"
            width="45"
            height="45"
          />

          <div className="ms-3">

            <h6 className="mb-0 fw-bold text-dark">

              {user.fullName}

            </h6>

          </div>

        </div>

      </nav>

      <div className="container-fluid">

        <div className="row">

          {/* SIDEBAR */}
          <div
            className="col-md-3 col-lg-2 bg-white shadow-sm p-4"
            style={{
              minHeight: "100vh"
            }}
          >

            <button
              onClick={() => setActiveTab("overview")}
              className={getBtnClass("overview")}
            >

              <i className="bi bi-grid-fill me-2"></i>

              Overview

            </button>

            <button
              onClick={() => setActiveTab("experience")}
              className={getBtnClass("experience")}
            >

              <i className="bi bi-plus-circle-fill me-2"></i>

              Add Experience

            </button>

            <hr />

            <button
              onClick={handleLogout}
              className="btn btn-outline-danger w-100 rounded-4 py-3 fw-semibold"
            >

              <i className="bi bi-box-arrow-right me-2"></i>

              Logout

            </button>

          </div>

          {/* MAIN CONTENT */}
          <div className="col-md-9 col-lg-10 p-5">

            {/* OVERVIEW */}
            {activeTab === "overview" && (

              <div className="card border-0 shadow-lg rounded-5 p-5 bg-white">

                <div className="row align-items-center">

                  {/* LEFT */}
                  <div className="col-md-4 text-center border-end">

                    <img
                      src={`https://ui-avatars.com/api/?name=${user.fullName}&background=ffc107&color=000000&size=200`}
                      alt="profile"
                      className="rounded-circle shadow"
                      width="160"
                    />

                    <h2 className="fw-bold mt-4 text-dark">

                      {user.fullName}

                    </h2>

                    <span className="badge bg-warning text-dark px-4 py-2 rounded-pill fs-6">

                      User

                    </span>

                  </div>

                  {/* RIGHT */}
                  <div className="col-md-8 px-5">

                    <h2 className="fw-bold text-dark mb-4">

                      User Overview

                    </h2>

                    {/* EMAIL */}
                    <div
                      className="d-flex align-items-center p-4 rounded-4 shadow-sm mb-4"
                      style={{
                        backgroundColor: "#fff8e1"
                      }}
                    >

                      <div
                        className="rounded-circle d-flex justify-content-center align-items-center"
                        style={{
                          width: "60px",
                          height: "60px",
                          backgroundColor: "#ffc107"
                        }}
                      >

                        <i className="bi bi-envelope-fill text-dark fs-4"></i>

                      </div>

                      <div className="ms-4">

                        <small className="text-muted">
                          Email Address
                        </small>

                        <h5 className="fw-bold text-dark mb-0">

                          {user.email}

                        </h5>

                      </div>

                    </div>

                    {/* NAME */}
                    <div
                      className="d-flex align-items-center p-4 rounded-4 shadow-sm"
                      style={{
                        backgroundColor: "#fff8e1"
                      }}
                    >

                      <div
                        className="rounded-circle d-flex justify-content-center align-items-center"
                        style={{
                          width: "60px",
                          height: "60px",
                          backgroundColor: "#ffc107"
                        }}
                      >

                        <i className="bi bi-person-fill text-dark fs-4"></i>

                      </div>

                      <div className="ms-4">

                        <small className="text-muted">
                          Full Name
                        </small>

                        <h5 className="fw-bold text-dark mb-0">

                          {user.fullName}

                        </h5>

                      </div>

                    </div>

                  </div>

                </div>

              </div>
            )}

            {/* EXPERIENCE */}
            {activeTab === "experience" && (

              <AddExperience />

            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default CustomerDashboard;