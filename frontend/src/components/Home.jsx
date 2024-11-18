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
                src="https://lh3.googleusercontent.com/fife/ALs6j_ECm6ywjswQ2tg5iQpPac_j3IQrS3O8PpzmdGBIE3GTtPJ9a21K0a6Irf2sF2nY551NZxIM-c67brQtlI_AC5ZwDUrG4DGAV9NxqvFxAnB3dONpKPNzs7vEQ6Ph87hLDgESGVeHcO4YwiSloeWevtVkdgw9Y_uRTNVMR-w78EKpDGMdzHlcklvC_lpuANuBpBqudqgzKK_qraRvRZSZ3F_bCHctG8pSmixq6QDr5-4yjsMdtNi4bf-N6y0Gl0Zqz15Weyyh6kt7hHCw5lacMH7ZJlhmDi8ThdtIusZpbDF9yoN5jriCrTFDV0O_Hr0AZV4DyIqMdcDpF8Jxgv-4ftaJxDwxBTnw0-ITLU73NkSfBFziOsDsj1zh1Um1JCRICp-ky-9VNnvg5gavyXv4YzlRsuolL6OCBUqUagUD0mU1qTeLGuvg5sqVZfw12BLiapoIqc_XSnGr_Xb1OwrGhXsWnS0tGw2Q9nsTrvOIsNKPMVgxNmqsXlNcQMpRSSOY0KMG4m1dLw2eFZuuVLfveV9xfW_Nq44tf_l6Ae624gFOpFW-UufxoU5KGL2t-O2eix1yuwZFKbUkf5_t-9uDzEJn8gfIs5wVK5BylnNzyPBtVZ8oh0oL5lVv015jkDx2XFPZHVcGN-fx_8YjojKWUDytanvDJ8TxaQw22IJp9_wt61tNAeDuoR0laf9G6e8uukqeQI8rDn87bA7-NnvbSRmSb5iG0yK381DMWCPtKWwlz-YMNTGvMpnqy1HEQB8DwG4k2RSUF8vyBEU6K1gyrf36G4YygdaxL6o6ZgW7OJNoz0U14fi_4G6QOplb2J0IW_jjIWYRjw0qLz37OZJlnWk8s_rwvRmikjNkZZQJTpZE5m8cJjplxmcS-OMzkwp-oogXSqWqpWd49zuwSOIO0Y9sVgiWkEIf7kM6qrKCnfhygLmL9cuxthn5qvycgWbix6SEEzXVdsYz9lNqfUmT9RGrbSRhvASLHsrK9_Wg2HI7iw4OwBIgnC7cBm8tHoKXoDXo5DL4rnv2KzDFn44y27iwdA3UF-uc0_qCBXl8MAF23pS7SCLYmdIEWPNI4L9B5awJ1vKQuB7roizrAB1gf_svUdijpNDoWpJAvDgzZ1bP2SzhoUmGPbx3dymK1CWsb0MZ6WoAmiwYpwd16XjA9DDfJaaaf81j3glyYNRCGfpjTvv-9Dyy1q-i-6EDi7nEGfTt03b7UjCZD_A2VD5t3XxFs8XfDYn1Xdv3ggrkkIChImcaV6Y5JeUrPvNEIVf2TRIlMS4bnawKYdxO6fv-DOpDeccSCoIS8MEQ4lXryMYOugXNYmYUgRh0-XwhLYjBpyps6WCjzCy4ND6yDa6dL1FAaJ11ssTU4OIUxlAsMB_byI2A_zt0CcxvcoGznIy_fBtp2S_EF5IGkqIzvg07GoxMCatS53sLm1CAvl0E-zTMFIKpqYp3LSfYeohLVTIHEMqCygpF7am-oR57nGNfvx5nfW6uOKbCnwHgVjEXNjr70MrspF3DgO1r5FVO0cE6AMgLl02v-4Zyx2va1ihVTUvM55wj3D9JzFq5OH49NpNme7HeHEAPS_Yx18W63nAdi8888v7P2TEL3RC5rP4mMg=w1852-h913"
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
