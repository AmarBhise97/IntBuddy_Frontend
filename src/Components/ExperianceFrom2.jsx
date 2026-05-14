import React, { useState } from "react";

function ExperianceForm2({ closeModal }) {
  const [count, setCount] = useState(1);

  const addQuestion = () => {
    setCount(count + 1);
  };

  return (
    <div
      className="modal d-block position-fixed top-0 start-0 w-100 h-100"
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: 1050
      }}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div
          className="modal-content p-4 rounded-4"
          style={{
            backgroundColor: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(10px)"
          }}
        >

          {/* Close Button */}
          <button
            type="button"
            className="btn-close ms-auto"
            onClick={closeModal}
          ></button>

          {/* Heading */}
          <h3 className="fw-bold mb-4">Interview Experience</h3>
          <h5 className="fw-bold mb-3">Interview Questions</h5>

          <div className="row">

            {[...Array(count)].map((_, i) => (
              <div key={i} className="col-12 mb-4">

                <label className="form-label fw-semibold">
                  Interview Question {i + 1}
                </label>

                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Enter question"
                />

                <label className="form-label fw-semibold">
                  Answer
                </label>

                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Write answer..."
                ></textarea>

              </div>
            ))}

            {/* Add More */}
            <div className="col-12">
              <button
                type="button"
                className="btn btn-link text-warning fw-semibold p-0"
                onClick={addQuestion}
              >
                + Add Another
              </button>
            </div>

          </div>

          {/* Buttons */}
          <div className="d-flex justify-content-between mt-4">
            <button className="btn btn-warning px-4">
              Submit
            </button>

            <button
              type="button"
              className="btn btn-outline-secondary px-4"
              onClick={closeModal}
            >
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ExperianceForm2;