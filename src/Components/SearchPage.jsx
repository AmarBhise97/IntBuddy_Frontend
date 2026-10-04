import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import api, { API_BASE_URL } from "../axiosConfig";

function SearchPage() {
  const location = useLocation();

  const keyword = new URLSearchParams(location.search).get("keyword");

  const [results, setResults] = useState([]);
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    if (keyword) {
      fetchData();
    }
  }, [keyword]);

  const fetchData = async () => {
    try {
      const response = await api.get(
        `/Experiance/search?keyword=${keyword}`
      );

      setResults(response.data);
    } catch (err) {
      console.log(err);
      setResults([]);
    }
  };

  return (
    <div
      className="container"
      style={{
        maxWidth: "1150px",
        marginTop: "100px",
        paddingBottom: "50px",
      }}
    >
      {/* Search Header */}
      <div className="mb-4">
        <h2
          className="fw-bold mb-2"
          style={{
            color: "#172033",
            fontSize: "30px",
          }}
        >
          Search Results
        </h2>

        <p className="text-secondary mb-0">
          Showing interview experiences for{" "}
          <strong style={{ color: "#f5b400" }}>
            "{keyword}"
          </strong>
        </p>
      </div>

      {/* No Results */}
      {results.length === 0 && (
        <div
          className="text-center p-5 bg-white rounded-4 shadow-sm"
          style={{
            border: "1px solid #eee",
          }}
        >
          <h5 className="fw-bold text-dark mb-2">
            No Experience Found
          </h5>

          <p className="text-secondary mb-0">
            Try searching with a different company, role or candidate name.
          </p>
        </div>
      )}

      {/* Results */}
      <div>
        {results.map((item) => (
          <div
            key={item.experiance_ID}
            className="card mb-4 border-0"
            style={{
              borderRadius: "16px",
              boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
              overflow: "hidden",
            }}
          >
            <div className="card-body p-4">
              
              {/* Top Section */}
              <div className="row g-4 align-items-start">

                {/* Left Content */}
                <div className="col-lg-8 col-md-7">

                  <h3
                    className="fw-bold mb-2"
                    style={{
                      color: "#1769e0",
                      fontSize: "23px",
                    }}
                  >
                    {item.companyName}
                  </h3>

                  <h6
                    className="fw-semibold mb-4"
                    style={{
                      color: "#222",
                      fontSize: "16px",
                    }}
                  >
                    {item.position}
                  </h6>

                  <div className="row g-3">

                    <div className="col-sm-6">
                      <div
                        className="p-3 rounded-3"
                        style={{
                          backgroundColor: "#f8f9fa",
                        }}
                      >
                        <small className="text-secondary d-block mb-1">
                          Role
                        </small>

                        <strong className="text-dark">
                          {item.role || "Not specified"}
                        </strong>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div
                        className="p-3 rounded-3"
                        style={{
                          backgroundColor: "#f8f9fa",
                        }}
                      >
                        <small className="text-secondary d-block mb-1">
                          Experience
                        </small>

                        <strong className="text-dark">
                          {item.experianceinyear || "Not specified"}
                        </strong>
                      </div>
                    </div>

                    <div className="col-12">
                      <div
                        className="p-3 rounded-3"
                        style={{
                          backgroundColor: "#f8f9fa",
                        }}
                      >
                        <small className="text-secondary d-block mb-1">
                          Candidate
                        </small>

                        <strong className="text-dark">
                          {item.fullName || "Anonymous Candidate"}
                        </strong>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Right Action Section */}
                <div className="col-lg-4 col-md-5">

                  <div
                    className="p-4 rounded-4 h-100"
                    style={{
                      backgroundColor: "#fffaf0",
                      border: "1px solid #ffe3a3",
                    }}
                  >

                    <h6 className="fw-bold mb-3">
                      Available Actions
                    </h6>

                    {item.resumeName ? (
                      <>
                        <p
                          className="mb-3"
                          style={{
                            fontSize: "14px",
                            wordBreak: "break-word",
                          }}
                        >
                          <strong>Resume:</strong>
                          <br />
                          <span className="text-secondary">
                            {item.resumeName}
                          </span>
                        </p>

                        <a
                          href={`${API_BASE_URL}/Experiance/resume/${item.experiance_ID}`}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-danger w-100 mb-2"
                        >
                          Download Resume
                        </a>
                      </>
                    ) : (
                      <p className="text-secondary small mb-3">
                        Resume not available
                      </p>
                    )}

                    <button
                      className="btn btn-warning w-100 fw-semibold"
                      onClick={() =>
                        setOpenId(
                          openId === item.experiance_ID
                            ? null
                            : item.experiance_ID
                        )
                      }
                    >
                      {openId === item.experiance_ID
                        ? "Hide Experience"
                        : "View Experience"}
                    </button>

                  </div>

                </div>
              </div>

              {/* Interview Experience */}
              {openId === item.experiance_ID && (
                <div
                  className="mt-4 pt-4"
                  style={{
                    borderTop: "1px solid #e5e5e5",
                  }}
                >

                  <h5 className="fw-bold mb-3">
                    Interview Questions & Experience
                  </h5>

                  <div
                    className="p-4 rounded-3"
                    style={{
                      backgroundColor: "#f8f9fa",
                      lineHeight: "1.7",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {item.details || "No interview details available."}
                  </div>

                </div>
              )}

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;