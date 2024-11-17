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
                src="https://lh3.googleusercontent.com/fife/ALs6j_F_Tb_s18WPyaYXINud2jC2EiU84R15pwx2qHJ0g5KPadXcYn4g9CynAGzkRZyQ7FIF90e3iSYnzib9XCPofal1HD-6ja3Yoa7YkxzxE_GBGM7AtwUcNAhYcJI4nMVVntLYl4IEAszoz9zlavOEiyVz3cshbFt881_ifNCOwNk_Nc71_yo-Heo5k8GXpV9RP5rsEqjPq9llNFy350z9MJor6knX9187kOYuqgaMWhvVmC8oQcVNXmZMOxmBqJf7Hwt0Uj1RRHa9QV2ER28zLcf0W33Ak44NzkriXm6-bf3oDiJUSPhCG6Gp2eyn_UtNS_EqpFazZ-Ab8rymQT5-SbB6AclRZvK067mmtAwHFqW7JX3GVg6RGuXZepisx_ecZy1BixU7qSjfKMKAKvnUmmxpwreZUPCm429kfkKWJx0deMOWdzOC6VtFGMCijVgO-OHIjAAFZwkH4QFsZp8NfS8MhHjpgql1DwXmIXFIeBYymXmJwAW74Ksh8R5D9hjULth2D5CwIpa1mCtCodhx8ejl-MexuLhELifRfkVYoNCJ-0akcZIXB56xj9OgR9W2SRKPSxY_rtjYklif1al-5hAShISQm0QoeelVLg6EK5kMvOcgxJwXeROe8Gfylr3-7DViTv8YOxCkotR84Jod29wRK7UPJoz8NvD_uKx95Q2BNqIEaB_WYWT3GDM5MMlIA_LtamI4-VG00UJfLdJpxIrVuH1b067XPUcnA0SHpIp3cGfKmIINjMeyTSNBuK1agr_GPo3JaWdqgxJCpJ-izt5gj8405nZ2maudh4Qrgyvjn_G8_P7r1qbtG7KoLJO3s03L1HOmpwafJ_S7eLRJyj3fp3DhzJkbTlhRoDm66qP97SkV-oRzeQr_5ykCcFHZe1d9cNAi-g6_Qz3AakqGx7viKR2LH1VClh9sU-KDLfgfqJLvML3hdnSvoY73XD_z2VSj3kIbYh7GOg1LZ51lPZs9SZQzgdts1ShzRq9i_PQbZ0M46YUgEOH6jEel047Ol_T54jII0SJ-WjsSiAIjY9BtaWSSkpreoxJ9D2SPTBqBq-egG9JeKdHz-SBWBOHPcsEu5NUMqaFkhzRf_woY1D6hnTVhbQGr8eGIITWgsIii8kkJ82dP81CEsDKGQ-N8h_idt4ob-HCEtsN5N48UgUivexkLU25DrvPPgShwjRhafnaPSewptcT03dWh5xnfy3A5nPXireddpJkIYAxgwzZGN1nc7_b3xEal1gf0MAPD3-64kmr0dELOADY5_mvzvbhk2VODCleu4Z2zZEAKggxQlWDJw7ht0Z9INd0Bv8dyEr-56M_OqcGyY49XDaS5iTRtkz7GiLy74b0ohbBU2Rdq2F5YHvdZE0hNfBi0qNg2Mkagx5oEbLKNv6ty98JFsBRycv5DWK99xYlyhF2hloJsOX8rwh0M2-I8FXI_0osf5ynbWZRhVrEfk2MjANtx81qRWbynRrD1YjITUY6yTRWw2HUR0pG-FGIrRlnbHlm4Lqgpf14gk8Ogu6IrnwinvhYCdyzsEXphz9yGYweO6xx9X5IJM2boTsUjXyJ8LTX0_GtLayu4I3CVuumyYZPCxeHJWaB3gw98RLaA=w1078-h868"
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
