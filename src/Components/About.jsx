import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-5 bg-light overflow-hidden">
      <div className="container py-lg-5">
        
        {/* SECTION HEADER */}
        <div className={`text-center mb-5 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-middle-y' : 'opacity-0'}`}>
          <h2 className="display-4 fw-bold">
            Our <span className="text-warning border-bottom border-4 border-warning">Journey</span>
          </h2>
          <p className="lead text-muted mx-auto mt-3" style={{ maxWidth: "600px" }}>
            Bridging the gap between ambitious talent and their dream tech careers through real-world insights.
          </p>
        </div>

        {/* ADVANCED CARD GRID */}
        <div className="row g-4">
          
          {/* CARD 1: THE CONNECTOR */}
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden position-relative group-hover">
              {/* Image Overlay Header */}
              <div className="position-relative overflow-hidden" style={{ height: "200px" }}>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" 
                  className="card-img-top h-100 w-100 object-fit-cover transition-transform duration-500 hover-zoom" 
                  alt="Teamwork" 
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25"></div>
                <span className="position-absolute bottom-0 end-0 m-3 badge rounded-pill bg-warning text-dark fw-bold px-3 py-2 shadow">
                  Networking
                </span>
              </div>
              
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-warning-subtle p-2 rounded-3 me-3 text-warning">
                    <i className="bi bi-share-fill fs-4"></i>
                  </div>
                  <h5 className="card-title fw-bold m-0">What we do?</h5>
                </div>
                <p className="card-text text-secondary mb-4">
                  Contribute your interview journey to help thousands of peers navigate the technical landscape.
                </p>
                <button className="btn btn-outline-warning rounded-pill w-100 fw-bold border-2">Learn More</button>
              </div>
            </div>
          </div>

          {/* CARD 2: THE PREPARER (Featured Card) */}
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 border-0 shadow-lg rounded-4 bg-dark text-white overflow-hidden scale-hover">
              <div className="position-relative" style={{ height: "200px" }}>
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80" 
                  className="card-img-top h-100 w-100 object-fit-cover opacity-75" 
                  alt="Analysis" 
                />
                <div className="position-absolute top-50 start-50 translate-middle text-center w-100">
                   <i className="bi bi-lightning-charge-fill display-4 text-warning shadow-sm"></i>
                </div>
              </div>

              <div className="card-body p-4">
                <h5 className="card-title fw-bold mb-3 text-warning">Company Overview</h5>
                <p className="card-text opacity-75 mb-4">
                  Access curated questions and direct feedback from mentors currently working at MAANG companies.
                </p>
                <button className="btn btn-warning rounded-pill w-100 fw-bold py-2 shadow">Unlock Access</button>
              </div>
            </div>
          </div>

          {/* CARD 3: THE COMMUNITY */}
          <div className="col-lg-4 col-md-12">
            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden group-hover">
               <div className="position-relative overflow-hidden" style={{ height: "200px" }}>
                <img 
                  src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80" 
                  className="card-img-top h-100 w-100 object-fit-cover transition-transform duration-500 hover-zoom" 
                  alt="Community" 
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-warning opacity-10"></div>
              </div>

              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-warning-subtle p-2 rounded-3 me-3 text-warning">
                    <i className="bi bi-people-fill fs-4"></i>
                  </div>
                  <h5 className="card-title fw-bold m-0">Global Community</h5>
                </div>
                <p className="card-text text-secondary mb-4">
                  Join a thriving ecosystem where knowledge is free and support is unlimited.
                </p>
                <div className="d-flex align-items-center mt-auto pt-3 border-top">
                  <small className="text-muted fw-semibold">Trusted by 5k+ Users</small>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* INLINE CUSTOM CSS FOR HOVER EFFECTS */}
      <style>{`
        .transition-all { transition: all 0.5s ease; }
        .scale-hover:hover { transform: scale(1.03); transition: 0.3s; }
        .object-fit-cover { object-fit: cover; }
        .hover-zoom:hover { transform: scale(1.1); }
        .group-hover:hover { border: 1px solid rgba(255, 193, 7, 0.5) !important; }
      `}</style>
    </section>
  );
}

export default About;