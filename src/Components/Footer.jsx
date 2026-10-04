import React from "react";
import { Link } from "react-router-dom";

import {
  MapPin,
  Phone,
  Mail
} from "lucide-react";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-4">

      <div className="container">

        <div className="row">

          {/* =========================
              ABOUT US
          ========================== */}
          <div className="col-md-3 mb-4">

            <h5>About Us</h5>

            <p>
              a platform where users share real interview experiences to help
              job seekers prepare with practical insights. By building a
              community-driven knowledge base, we make interviews easier to
              understand and approach with confidence, for both freshers and
              experienced professionals.
            </p>

          </div>


          {/* =========================
              QUICK LINKS
          ========================== */}
          <div className="col-md-3 mb-4">

            <h5>Quick Links</h5>

            <ul className="list-unstyled">

              <li>
                <Link
                  to="/Home"
                  className="text-light text-decoration-none"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/About"
                  className="text-light text-decoration-none"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="text-light text-decoration-none"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/Registration"
                  className="text-light text-decoration-none"
                >
                  Registration
                </Link>
              </li>

            </ul>

          </div>


          {/* =========================
              CONTACT
          ========================== */}
          <div className="col-md-3 mb-4">

            <h5>Contact</h5>

            <p className="d-flex align-items-start">

              <MapPin
                size={18}
                strokeWidth={2}
                className="me-2 mt-1 flex-shrink-0"
              />

              <span>
                Unique System SKills, Kothrud Pune, India
              </span>

            </p>


            <p className="d-flex align-items-center">

              <Phone
                size={18}
                strokeWidth={2}
                className="me-2 flex-shrink-0"
              />

              <span>
                +91 9730695484
              </span>

            </p>


            <p className="d-flex align-items-center">

              <Mail
                size={18}
                strokeWidth={2}
                className="me-2 flex-shrink-0"
              />

              <span>
                bhiseamar2003@gmail.com
              </span>

            </p>

          </div>


          {/* =========================
              FOLLOW US
          ========================== */}
          <div className="col-md-3 mb-4">

            <h5>Follow Us</h5>

            <div className="d-flex gap-3">


              {/* Facebook */}
              <Link
                to="#"
                className="text-light text-center text-decoration-none"
              >

                <FaFacebookF
                  size={26}
                  className="d-block mx-auto mb-1"
                />

                <span>
                  Facebook
                </span>

              </Link>


              {/* Twitter */}
              <Link
                to="#"
                className="text-light text-center text-decoration-none"
              >

                <FaTwitter
                  size={26}
                  className="d-block mx-auto mb-1"
                />

                <span>
                  Twitter
                </span>

              </Link>


              {/* Instagram */}
              <Link
                to="#"
                className="text-light text-center text-decoration-none"
              >

                <FaInstagram
                  size={26}
                  className="d-block mx-auto mb-1"
                />

                <span>
                  Instagram
                </span>

              </Link>


              {/* LinkedIn */}
              <Link
                to="#"
                className="text-light text-center text-decoration-none"
              >

                <FaLinkedinIn
                  size={26}
                  className="d-block mx-auto mb-1"
                />

                <span>
                  LinkedIn
                </span>

              </Link>

            </div>

          </div>

        </div>


        {/* =========================
            DIVIDER
        ========================== */}

        <hr className="bg-light" />


        {/* =========================
            COPYRIGHT
        ========================== */}

        <div className="row">

          <div className="col-12 text-center">

            <small>
              © 2026 IntBuddy.com. All rights reserved.
            </small>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;