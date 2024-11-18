import React, { useState, useEffect } from "react";
import { getUser } from "../utils/helper";
import { Link } from "react-router-dom";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(getUser());
  }, []);

  return (
    <div>
      <section className="colored-section minFullHeightMinusNavHeight d-flex align-items-center justify-content-center flex-column pb-5" id="title">
        <div className="container-fluid">
          {/* Title */}
          <div className="row">
            <div className="col-lg-6 d-none d-lg-flex align-items-center justify-content-center">
              <img
                src="data:image/png;base64,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"
                style={{maxHeight: "400px"}}
                alt="img"
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center flex-column">
              <p className="fs-4">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Our system
                utilizes machine learning (ML) to automate the detection of
                malicious activities and security breaches in networks. By
                analyzing large volumes of network traffic, ML models can
                identify patterns and classify data as normal or harmful. These
                models can detect known attacks and identify new threats through
                anomaly detection. The adaptive nature of ML allows our system
                to continuously learn from new data, making it an effective tool
                for evolving and improving network security.
              </p>
              {!user ? (
                <>
                  <div className="buttons row d-flex align-items-center justify-content-center flex-lg-row mt-5">
                    <Link
                      to="/login"
                      className=" btn d-inline-flex mx-2 align-items-center justify-content-center px-2"
                    >
                      <i className="fa-solid fa-user"></i>
                      <span className="mx-2">Login</span>
                    </Link>
                    <Link
                      to="/register"
                      className=" btn d-inline-flex mx-2 align-items-center justify-content-center px-2"
                    >
                      <i className="fa-solid fa-user-plus"></i>
                      <span className="mx-2">Register</span>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <div className="buttons row d-flex align-items-center justify-content-center flex-column flex-lg-row mt-5">
                    <Link
                      to="/predict"
                      className="w-100 btn d-inline-flex mx-2 align-items-center justify-content-center px-2"
                    >
                      <i className="fa-solid fa-globe"></i>
                      <span className="mx-2">Predict Network Traffic</span>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="white-section minHeight100vh d-flex align-items-center justify-content-center" id="features">
        <div className="container-fluid">
          <div className="row" style={{ color: "#393E46" }}>
            <div className="feature-box col-lg-4">
              <i className="icon fa-solid fa-clock fa-4x"></i>
              <h3 className="feature-title">Network Traffic Processing</h3>
              <p className="feature-desc">
                Convert the traffic into multiple network parameter patterns
                (Signatures)
              </p>
            </div>
            <div className="feature-box col-lg-4">
              <i className="icon fa-solid fa-brain fa-4x"></i>
              <h3 className="feature-title">Admin Overview</h3>
              <p className="feature-desc">
                Admin capability includes monitoring of network traffics and
                logs in the system
              </p>
            </div>
            <div className="feature-box col-lg-4">
              <i className="icon fa-solid fa-masks-theater fa-4x"></i>
              <h3 className="feature-title">Threat Reporting</h3>
              <p className="feature-desc">Report/Log the threat</p>
            </div>
            <div className="feature-box col-lg-4">
              <i className="icon fa-sharp fa-solid fa-book-skull fa-4x"></i>
              <h3 className="feature-title">Threat Classification</h3>
              <p className="feature-desc">
                Classify the threat based on signature matching
              </p>
            </div>
            <div className="feature-box col-lg-4">
              <i className="icon fa-solid fa-users-rays fa-4x"></i>
              <h3 className="feature-title">Anomaly Detection</h3>
              <p className="feature-desc">
                Match the input network signature against already available
                normal traffic signature to detect zero-day attacks
              </p>
            </div>
            <div className="feature-box col-lg-4">
              <i className="icon fa-brands fa-searchengin fa-4x"></i>
              <h3 className="feature-title">Signature Matching</h3>
              <p className="feature-desc">
                Match the input signature against the already available threat
                signature patterns
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="colored-section minHeight25vh d-flex align-items-center justify-content-center flex-column p-3"
        id="testimonials"
        style={{ backgroundColor: "#00ADB5" }}
      >
        <h1 className="my-3">Cyber Attacks</h1>
        <div
          id="testimonial-carousel"
          className="carousel slide w-100"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active container-fluid">
              <div className="card text-center">
                <div
                  className="card-body"
                  style={{ backgroundColor: "#71C9CE", border: "none" }}
                >
                  <h5 className="card-title">Denial of Service (DoS)</h5>
                  <p className="card-text">
                    A Denial-of-Service (DoS) attack is an attack meant to shut
                    down a machine or network...
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item container-fluid">
              <div className="card text-center">
                <div
                  className="card-body"
                  style={{ backgroundColor: "#71C9CE" }}
                >
                  <h5 className="card-title">Probe</h5>
                  <p className="card-text">
                    Probing is another type of attack in which the intruder
                    scans network devices...
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item container-fluid">
              <div className="card text-center">
                <div
                  className="card-body"
                  style={{ backgroundColor: "#71C9CE" }}
                >
                  <h5 className="card-title">Remote to Local</h5>
                  <p className="card-text">
                    Remote-to-local (R2L) attacks involve exploiting a
                    vulnerability in the network...
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev mx-3"
            href="#testimonial-carousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next mx-3"
            href="#testimonial-carousel"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
