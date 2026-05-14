import React, { useState } from "react";
import { Link } from "react-router-dom";

function ExperienceForm({ closeModal }) {
  const [offer, setOffer] = useState("");

  return (
    <div
      className="modal fade show"
      style={{
        display: "block",
        backgroundColor: "rgba(0,0,0,0.6)"
      }}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div
          className="modal-content border-0 shadow-lg"
          style={{
            background: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(10px)",
            borderRadius: "20px"
          }}
        >

          {/* Header */}
          <div className="modal-header border-0">
            <h4 className="fw-bold">Interview Experience</h4>
            <button className="btn-close" onClick={closeModal}></button>
          </div>

          {/* Body */}
          <div className="modal-body">

            <div className="row">

              {/* Anonymous */}
              <div className="col-12 mb-3">
                <label className="fw-semibold">Stay anonymous?</label><br />
                <input type="radio" name="anon" /> Yes
                <input type="radio" name="anon" className="ms-3" /> No
              </div>

              {/* Company */}
              <div className="col-md-6 mb-3">
                <label className="fw-semibold">Company *</label>
                <input className="form-control" />
              </div>

              {/* Role */}
              <div className="col-md-6 mb-3">
                <label className="fw-semibold">Role *</label>
                <input className="form-control" />
              </div>

              {/* Offer */}
              <div className="col-md-6 mb-3">
                <label className="fw-semibold">Got Offer?</label><br />

                <input
                  type="radio"
                  name="offer"
                  value="yes"
                  onChange={(e) => setOffer(e.target.value)}
                /> Yes

                <input
                  type="radio"
                  name="offer"
                  value="no"
                  className="ms-3"
                  onChange={(e) => setOffer(e.target.value)}
                /> No

                {offer === "no" && (
                  <textarea
                    className="form-control mt-2"
                    placeholder="Why rejected?"
                  />
                )}
              </div>

              {/* Location */}
              <div className="col-md-6 mb-3">
                <label className="fw-semibold">Location</label>
                <select className="form-control">
                  <option>Choose...</option>
                  <option>India</option>
                  <option>USA</option>
                </select>
              </div>

            </div>
          </div>

          {/* Footer */}
          <div className="modal-footer border-0">
            <Link to="/ExperianceForm2" className="btn btn-warning px-4">Next</Link>
            <button className="btn btn-outline-secondary" onClick={closeModal}>
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ExperienceForm;