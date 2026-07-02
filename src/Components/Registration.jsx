import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Registration() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneno: "",
    password: "",
    confirmPassword: "",
    gender: "",
    country: "",
    state: "",
  });

  const [otp, setOtp] = useState("");

  const [otpSent, setOtpSent] = useState(false);

  const [otpVerified, setOtpVerified] = useState(false);

  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // SEND OTP
  const sendOtp = async () => {

    if (!formData.phoneno) {

      setMessage("Please enter phone number");

      return;
    }

    try {

      setLoading(true);

      const response = await axios.post(
        `http://localhost:9090/users/enterphone/${formData.phoneno}`
      );

      console.log(response.data);

      setOtpSent(true);

      setMessage("OTP sent successfully");

    } catch (error) {

      console.log(error);

      setMessage("Failed to send OTP");

    } finally {

      setLoading(false);
    }
  };

  // VERIFY OTP
  const verifyOtp = async () => {

    if (!otp) {

      setMessage("Please enter OTP");

      return;
    }

    try {

      setLoading(true);

      const response = await axios.post(
        `http://localhost:9090/users/verifyotp/${otp}`
      );

      console.log(response.data);

      if (response.data === true) {

        setOtpVerified(true);

        setMessage("OTP verified successfully");

      } else {

        setMessage("Invalid OTP");
      }

    } catch (error) {

      console.log(error);

      setMessage("OTP verification failed");

    } finally {

      setLoading(false);
    }
  };

  // REGISTER USER
  const registerUser = async (e) => {

    e.preventDefault();

    // CHECK OTP VERIFIED
    if (!otpVerified) {

      setMessage("Please verify OTP first");

      return;
    }

    // PASSWORD MATCH CHECK
    if (formData.password !== formData.confirmPassword) {

      setMessage("Passwords do not match");

      return;
    }

    try {

      setLoading(true);

      const userData = {

        fullName: formData.fullName,
        email: formData.email,
        phoneno: formData.phoneno,
        password: formData.password,
        gender: formData.gender,
        country: formData.country,
        state: formData.state,
      };

      const response = await axios.post(
        "http://localhost:9090/users/register",
        userData
      );

      console.log(response.data);

      setMessage("Registration successful");

      // REDIRECT TO LOGIN PAGE
      navigate("/login");

    } catch (error) {

      console.log(error);

      setMessage("Registration failed");

    } finally {

      setLoading(false);
    }
  };

  return (
  <div
    className="container-fluid d-flex justify-content-center align-items-center"
    style={{
      minHeight: "100vh",
      background: "#f5f7fb",
      padding: "20px",
    }}
  >
    <div
      className="card shadow border-0"
      style={{
        width: "100%",
        maxWidth: "550px",
        borderRadius: "18px",
      }}
    >
      <div className="card-body p-4">

        <h2 className="text-center mb-4 fw-bold">
          User Registration
        </h2>

        <form onSubmit={registerUser}>

          {/* FULL NAME */}
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Full Name
            </label>

            <input
              type="text"
              className="form-control"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

         {/* EMAIL & PHONE */}
<div className="row">
  <div className="col-md-6 mb-3">
    <label className="form-label fw-semibold">
      Email
    </label>

    <input
      type="email"
      className="form-control"
      name="email"
      value={formData.email}
      onChange={handleChange}
      required
    />
  </div>

  <div className="col-md-6 mb-3">
    <label className="form-label fw-semibold">
      Phone Number
    </label>

    <input
      type="text"
      className="form-control"
      name="phoneno"
      value={formData.phoneno}
      onChange={handleChange}
      required
    />
  </div>
</div>
          {!otpSent && (
            <button
              type="button"
              className="btn  btn-warning w-100 mb-3"
              onClick={sendOtp}
              disabled={loading}
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          )}

          {otpSent && !otpVerified && (
            <>
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Enter OTP
                </label>

                <input
                  type="text"
                  className="form-control"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>

              <button
                type="button"
                className="btn btn-success w-100 mb-3"
                onClick={verifyOtp}
                disabled={loading}
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
            </>
          )}

          {otpVerified && (
            <div className="alert alert-success">
              OTP Verified Successfully ✔
            </div>
          )}

          <div className="row">
  <div className="col-md-6 mb-3">
    <label className="form-label fw-semibold">Password</label>
    <input
      type="password"
      className="form-control"
      name="password"
      value={formData.password}
      onChange={handleChange}
      required
    />
  </div>

  <div className="col-md-6 mb-3">
    <label className="form-label fw-semibold">
      Confirm Password
    </label>
    <input
      type="password"
      className="form-control"
      name="confirmPassword"
      value={formData.confirmPassword}
      onChange={handleChange}
      required
    />
  </div>
</div>

          {/* GENDER */}
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Gender
            </label>

            <select
              className="form-select"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
              <option value="OTHER">Other</option>
            </select>
          </div>

          {/* COUNTRY & STATE */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">
                Country
              </label>

              <input
                type="text"
                className="form-control"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">
                State
              </label>

              <input
                type="text"
                className="form-control"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-success w-100"
            disabled={!otpVerified || loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>

        </form>

        {message && (
          <div className="alert alert-info mt-3">
            {message}
          </div>
        )}

      </div>
    </div>
  </div>
);
}

export default Registration;