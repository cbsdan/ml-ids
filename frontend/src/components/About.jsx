import React, { useEffect } from "react";

function About() {
  useEffect(() => {
    const myFunction = () => {
      setTimeout(() => {
        document.getElementById("myDiv").style.display = "block";
        document.getElementById("loader").style.display = "none";
      }, 200);
    };
    myFunction();
  }, []);

  return (
    <div style={{ margin: 0 }}>
      {/* Loader */}
      <div id="loader"></div>

      {/* Main content */}
      <div id="myDiv" className="animate-bottom" style={{ display: "none" }}>
        {/* About section */}
        <div className="container-fluid minFullHeightMinusNavHeight d-flex align-items-center justify-content">
          <section className="about-section py-2 ">
            <h1>About Our System</h1>
            <hr />
            <h5 className="text-start" style={{textAlign:"start"}}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Development of Intrusion Detection System (IDS), with
              Machine Learning and Deep Learning, Recurrent Neural Network
              models, MERN web I/O System.
            </h5>
            <br />
            <p className="text-white text-start" style={{textAlign:"start"}}>
              <p className="my-0">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Large numbers of businesses were affected by data infringes and
                Cyber-attacks due to dependency on the internet. To prevent such
                malicious activity, the network requires a system that detects
                anomalies and informs the user and alerts the user.
              </p>
              <br/>
              <p className="my-0">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This project detects Network Intrusion anomalies by using the
                NSL-KDD dataset. The deep learning model Long Short Term Memory
                (LSTM), a superior version of RNN (Recurrent Neural Network), and
                KNN (K-Nearest Neighbor) Algorithm are used for binary and
                multi-class classification.
              </p>
              <br/>
              <p className="my-0">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The user enters the hacking parameters in the front end, which is
                designed using ReactJS. The model predicts the type of attack and
                gives information about the type of attack to the user. MongoDB is
                used for storing the data, and NodeJS serves as the backend
                framework.
              </p>
            </p>
          </section>
        </div>

        {/* Team section */}
        <br />
        <br />
        <br />
        <h1 style={{ textAlign: "center" }} className="py-3">Our Team</h1>
        <div className="container-fluid">
          <div className="row d-flex align-items-center justify-content-center" style={{ color: "#fff" }}>
            {/* Team Member 1 */}
            <div
              className="card card-about text-center my-4 minFullHeightMinusNavHeight"
            >
              <img
                className="p-4 dev-img"
                src="https://lh3.googleusercontent.com/fife/ALs6j_GIXhmtmObtHqVNSym5sH_AQxHgeQLtFX7bXpPb1LebGP3P2oqvCKards7Fds1Dm2F7O3at-SgABsKoakysGPMN4hu159tTnACE_HrGvZlxtYFoghhYEEFP6MpoS0XCb-ff6sRi_l8tVs2lTwxbHprBJ1vRO8D_qdPzkRzZ-_tC1HtoudXg3dNJZHhnHpBHda_6MlwsQXJOcflJVmGs0NGRau3drNsU0xhLi0V7OlVGT8lyzgoptb1mxvBZTeJNSbSOCK1cFYZoK8kYO7IXivQCX8L1DBUITOqNj3Pv5dAQ7tsVBBncAhNH3TnDEV96URcjaD1xC0r8kdcilrSP-Wq4VQZIwo1qoZZys45bA-JoLQep0B8sf2cLGZGcN4Ub7-vXipEoJI0xFcLNLlJEERVNsmHWb2m6L_Fm9Wk_s8tNYEVeMNahmXhQuDjOMrTGb7Yu0ICRBOA5PD_d14zTMTsJ1W5rUhd0NF23Hwv1UU6QzYCizb_v4J7_LVm6sdTGD1RY-JkcfXFwhPCkf8rq1mmQsTPuJTBLjj4DseCEv0VxAICehPw-LPO1NkMOnDNFSI8NR6RzkzEKDwB_wEcEqqhyKSjA0Nz275pM609Ap3c6Lt1c35yaPMBvK1UYy_tZ9E5UBiuLWHJ_chZNKGPRCIGmrbs1lYSlH1CCruku6hRBvq4V07y5MOJOONe-dhyKp4youY2tAiWtXQDIo7qiQt_jp0wXqhZIPfhLH0WQCb_ny8IgeIUuWyIq29ZOmItohqMVOXlJkOznejJQ93bCyWtHjT8k9iRo_vIlTvRXX98L5vwoa2XKiEevsJIVeTFJADX29Fa1r05wrhp0jsDUJ7aISUBwYh6rNMfiP7sC4kAaub3vp5mvgAP_ctlhQCohyzmoGodMr9N_Yi6gcgtLdy_g_ImLhTlQxIlUzUQtTydDZDL8V2ya9ECUdZ5UZm3k0gQwAMhodTEtXc3R3AAZ6sDcW5cZAXvKkULEm1DzrLACXg-eQ5r4hB1Pd_IzQ3y7UlW9XXVfN8T532XFZka2GyXn6O1ryVsG-3vTa7eohPYkwJbDCZHI_yr--tMX2EbSa0nhbWW-Hr1QOWMVPi7JpqhxVoT61IVt5AgA-V4f7Izj9-HSAZVNgBjjM5q-zTbg3LAm5O0IPqLSpL1QZbbtX46OEH376k339XxFBOIPRN_wVLShFtII2vxE-vZBCGhNJr-dGnKXSj9F0MY0aN8hGUNQ6Nq41NZW2EyKGLTTvWohLCY8QtYWqUx4shd-FKhLdn4xUfyNWnggXnCqtVEBs9q4pQ3OEcIyguW8remYfObx2fshhnNHaNF1dEudFG_rsEpmMNaRuGVfP8KBpU97VIbeG3nozqdzd82x7CeiUJny_ikSRMBGIZNAMI9vvJEAqAlzBy-MaM2vBK1ciyCJOGNWZU05yh3TQXMWCpR0QG0espLyW6hyz8qSIFgQ26vgBLQ3ImimyjiDKvOzp8VAvGWWi9hGabq1yw_cN3zTv5HMiqkodw7i_FtbE68Np4d2kKyrcz7mh28-6s7H-G5OeT_QMf9IOU5t1nOBggE6kP9cMJPtiYC5WDhlEHk-0jvJO7HL4tTSLDs-8-KQMQ=w1078-h868"
                alt="image"
              />
              <div className="card-body">
                <h4 className="card-title">Daniel Cabasa</h4>
                <h6 className="card-title">Machine Learning, Backend</h6>
                <div className="container-fluid">
                  <a
                    href="https://github.com/cbsdan"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="social-icon fab fa-github fa-2x"
                      style={{ color: "#fff" }}
                    ></i>
                  </a>
                  <a
                    href="https://www.facebook.com/daniel.cabasa.14"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="social-icon fab fa-facebook fa-2x"
                      style={{ color: "#fff" }}
                    ></i>
                  </a>
                  <a
                    href="mailto:daniel.cabasa@tup.edu.ph"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="social-icon fas fa-envelope fa-2x"
                      style={{ color: "#fff" }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div
              className="card card-about text-center my-4"
            >
              <img
                className="card-img-top p-4"
                src="https://lh3.googleusercontent.com/fife/ALs6j_HctuQwMgnItCBLfevGQr_9LB_YgI9yRZAIW1qQJjH6en4ZWaV3pxdtt6qH04JtV3FAc-UlOqPegKuR-E97QxorqqCG1dhVQDfGRfkmwtKt483y7eST1Wrvn1gXW_YAOUwQHlKoiUiiyKNaFWyzLVubX6W9Xd37wzBFk3bKShcrTO6THRWRLInLOdiIbnr6B77jPp1bCXA0Kmk2Lo6luF-uroZ7OmttGNIQp2Hn3-cVTcotGnXyp4WdbX4zP-2_AGTv7CkkxU2_22XmRh5DOrk9IW_ESClUVpBFcFVAbh0SB0ps08kbsw53KXtt0HyrB2WZwyGFOkBIH5HSdM0ql06K3J22EpyLtGzFuXb4SRsp4XS0Sj4Y7Otpz2CXnwIKiUpWhL9tM6inem4ACz2C44PVXRL3zczXzk9O5tYMqN1PbWOJjmIQxFacoNWZyKzCxNUNkxYVuie_N8zUuuDk6GU-Y-corzPvp6OzLKa3VkmPwqhRs7sV8JF8VvtWS1dk-m9IPHrZPqfC-LnE6-HR8yYpuJBP0VrKan9S_te95AHjFz5fp1m8owA7cfhd79XdHPak_kv0aQYMh3D-PH8dDWUxvLIP1RWID86Hc2mWh9TgwFmZ-780aHtt9rMwQ0_AZdvjNH_GX-_uKyqJg7CVW_QudqNLz86tUpEBSPl9Bvl1NI9NCYAuf-cPylypFFKXP6L2Gi1d7bDhH3F_iukNIIXXxugrm8fKSWbBfghrPtu9DG53cipr0w2kHTD5Z0nLNHBwHnhbDV6AwfM20EsLj8LTEFau_EyCIvju80tZbTzI8FW0vNm0ohXX_ktW-rI_BhYgSJCbCkdsoMDqpRdV-UtYzNtOQJxiH6bKRqXx5UjSt5M8-Idnxz3bs4SM6UhwGcq3pE3xZZfU4bu1fps9v6uHS-iJP-DuGug2GOR64E1F4BTEih6w4jmuF2ElL2jmHWVsznMlqDILlKiCbbATtH2t_QTJ73O3-P6vdPPHXvgEaJ6EgKoKscXSNz5ja1589tzJyedpcS7lkBwEEGkH9GA1zRoV4XtOd9QRhHsARnvJAg3cx6zcESjAgNfPhV3hR-i22qoozjdLy-Ceb0EJK8ybv9WwN28zNONlgZd9qq6I3WjZaNUb7s3Eu5hpVy6hWL5m0x7EjAF5L9j0wx9UmTpOBCRhpxZnnruZrDHSVAteSSntA8VQo93MQ0tGBSGZrxTltdhhgubofnbTsnurUKBJ523rSZbAM7sr-t-27Sw1Z-U33W1PyEhDQG8XkxRXlNvbksJK2vEapmKox_RjMiQl5kmPGK-2d3udakfUD2dKVL3V2V-RJBt938ziGRLKQnLPtR5QvCb27llC83Jwwlz5AvmbfMjpoAd63PhNXqkz5EFDJlvE4pP1bX6-qc-fbEbIzV2mgTk9bSbfl1AN0oxYvSKsXy0IYuqChtuhRm5UrRCNq_k_hKNLyM-yJKTuLFXCwICngx5tsGvdoGOCRbuf2qU5eIxSDkxYmwGSUT_4pttilLwwoBYd9KFDgtglA_vF7VgWVCBQLMYe64aKQUlyv0tVxEeDK79NjM-O8T7FJymbyC3Q4OFiuSE2EmGAvkbKuHPXmi3FGAxX=w1078-h868"
                alt="image"
              />

              <div className="card-body">
                <h4 className="card-title">Cassley Esquivel</h4>
                <h6 className="card-title">Frontend</h6>
                <div className="container-fluid">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="social-icon fab fa-github fa-2x"
                      style={{ color: "#fff" }}
                    ></i>
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="social-icon fab fa-facebook fa-2x"
                      style={{ color: "#fff" }}
                    ></i>
                  </a>
                  <a
                    href="mailto:gmail@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="social-icon fas fa-envelope fa-2x"
                      style={{ color: "#fff" }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div
              className="card card-about text-center my-4"
            >
              <img
                className="card-img-top p-4"
                src="https://lh3.googleusercontent.com/fife/ALs6j_GgQ9KSv7PuKCCYcvhlh9nFb9DnjDXkPkmZlZQl3YuSBsVcGb7dw17lOFWk0e3KeNzyqtHScazXFd_RGlP8jhTUlclyEDNfs1aGAViB22hYgmm5Mi38D_SYz4Ahsu6OcJ4GPUcpYXhVsxuKbkBkK87ZyZ5nLvbxfrPAYg8zIIjfanOs5m6AqJ1tv1UrsLoqxLUGVGaTAeC9tIbi5I44ZSz-N6vCdq2p05V2xkCFKQctHyrBpMxs9NqXkkdTDMPJstfW1z8Q81Lptvpj1FryD95EAbsKFW6csvWyVZatIxaVMnZfeQzmxtrIsAP_O_AEceqecsLg0uoCsuXHn7nxkKvaZpM4djPjESHUSupHpHOwXReISHxoj4T-oojvpJYy9DTbZ9xhoDRjF0CEDiuqBaCFWdKF5YwqwBc35xeEzAA6XXcMDpEpk5ek3SeI0SRzJhFqft-L5GgZzXbbtyYtgbDePi4-gLRaDZp-tCeFUJQCs6w1EWUma-C3WhuzVn1k8UqXvhr1iyEng6urUPrPwrq-_y16goFLLfv7hUssv29jRAY5PTB0Z7PGvOLNGo3vbq4d4S7yw8pfDeE7JnLt_ZWLJsKpK6oy-0aH-JJOf6hmqf8GZLHiTndEh2rn2SkkWkk_fD-XmiFDCnaIHqoWHMx_PipSz3EORB8oGVbA1-xxco8UUcF44XzVISQlZ-NwHf7W6pEHcsaW8N99Q6NudlvIAOQu4IlMXZz4A-eP8zNGXxEAX1wmLd4yEAWBz_FY8byBe54o8QowhpP8ikee-Bw3xV3SYBdht442jYJx-RvkSdlv7TyibHOcUfcpVNikVCfiMGcW6suXC7_luYopMVNwbSaEsPbwPfrIoEa8DgCTL4WE1N-k6AFlHxiNzGUH1nYUR3XLYrVNxWinpK_x3_VQ-hd725BpHzpS5Gv-z3O5yofyVHXxGaSXRNFSNp4ljIW9iPlMie0CMuR2rYz0HR8yfgB1uRMAS_Uixo6Ew1te5RIR4mRT4OzBsaA_ysIVU84eZ1a5KFhUj2PLaYSmbN6niXH3P84VgSrhe55FJ1niqP2cQR5ESGX074g9C1rY_b5fBharZPbjrq28-JfTW--RyY5o8TXeHfRwJqPA6OZJMXEe2IS8V-J4CG4-WGnRvFbGkhUxERwvBTldDqY1GKCwFwqPF492rtICfg0FA-HcuXWQtogi3c82RlT9BLzpfyuBW_DxgN1cDkrBCaHNQso-WrU9-C_SQfOTKOdnSPebamh3DUvJ2Q5cEWnWQ259iQgKEzc3fJql55U3Mvybj4kUWJKi67qIrMYJYcPX9Kn88c9jRXe_eGxjQa1CvipEiwao2w4kx7IWMPFYdFJzxR12usfTt9S9Tt9D0K86ufc3nEPlqqGeoPKk-7XV7cQmgQmBhK-dcvx-mzD59bMZNrX2qsJmLef_nDLojeHFMKK0fSnKoZO1rSSe9IKr-nGns982QUcJKavOn2BAh8APw3bVpzEYWe2oFcrLonPxWPhM8-0Ac5VIDH-o9ZF3hX8WKPI6vyr_kvmtEX3H_9G2nByzQ9UkxqKCpS51N5lEFmhQST7TNbn0jzZC3IgU6-h7sKuMBOKgnVUH5sqSTQ=w1078-h868"
                alt="image"
              />

              <div className="card-body">
                <h4 className="card-title">Juliana Mae Ines</h4>
                <h6 className="card-title">Frontend</h6>
                <div className="container-fluid">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="social-icon fab fa-github fa-2x"
                      style={{ color: "#fff" }}
                    ></i>
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="social-icon fab fa-facebook fa-2x"
                      style={{ color: "#fff" }}
                    ></i>
                  </a>
                  <a
                    href="mailto:gmail@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="social-icon fas fa-envelope fa-2x"
                      style={{ color: "#fff" }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 4 */}
            <div
              className="card card-about text-center my-4"
            >
              <img
                className="card-img-top p-4"
                src="https://lh3.googleusercontent.com/fife/ALs6j_FBgZKHYOOJBxpzaBGLt45j3cM9XeYUp5BJ8ZrUo2TWOdnDpXp3UJCT_di7SW12PIfclqnvyFzY9J45yiKX5MF0PSTT2nvI3ykShy0wUn5sc3xJIwU9kqvEetDl68gGE7ojCkguV1EEXRrbqTPrvAJbCkmw8j6Gs3KphMfMByPrzy41JVImi9Teakfqdws3I9NFfXLKz64gik0QVvSGTJsHqNiIwHVgvMxVm74ysouXGw-SDFkwcqRVS7_7fyQ6EhgvWkMI_dynKgR4_zIwSNBoeDUCZ-FrG-ANX1bQS0d5stin7MXf5VsVk3PlsRlFGiWvD2E-9QsIfQBkGMZgE76FK0Q8JM1Ipq06_nNE85s2_jMaCyRh2g29ZA-7CA-kxu7-1hRnAhzG5KN_aB8fG1PZ2r-svPiVTlGcTz2jtF8_XD5xJnr_UdNMdJWwQnomS5RKH4HrbViljVWjlzNR8tflz0utDb8ACPsi9BK0w82U0qAB0t90Vn-IPb4MULtTAFBnGeqKMBHfg1ajZaur8jZjbUrdi3w6qW6bngtKuzGA3rKVGBDjqNTpW2coug42Pae0t4ib08jzsnSNPr7k19p4pjg7CIzdCrFP6UZRZNHuWesf3vBKxQuGvB2MmSaG9FRZeh_4lAOFpvr_f5Qd2sWAsXAcNGyfJ2EqrrfWsIez4fIKY4I6FotjPq3yAKD_orBXeJIY6lBSpAzXK5Z8ZQWav3esA_uXrTcUrbOJIN3ugP23uP885P-WqDcGo0IOPqgX0Xq2T_b9lId0hW0vGBsY3AqPnC7gJO5na-qGe0BAojTCfVRJQvQzYjaoIrkeHK0M1Z_Uv_78gMe1u7UzMGSFiZfMHFZb_45YCNgMoUPMS1SZWzFe4vxgMbYGytdQtapE-rT_kZ6_NDe9A9Vq_L9Cgcylky3klIhjjNX87ew4PYdtab44tsv_GX9BXRUaUzc1UX-pG-OY40ZKXGAoYk9_4jxnovKPUskp-bObUsNm9eM9pCHO9aq1vJDbDmpyVIOwPt3OsSyHIXKZ7joOFddPLWRWglTsskRzG4F1GDqDUsngEvmdehBGbOoAPean4bKKbvUmA4PlZ0prcyVN7AfVo8T5icvl4tDXhBTnB4LWplj-7jzQbulJkzegAQdD1DxVlsiemfA7LmZGCTjs9OgQTxXPUrwNqkRi7LTPJwPAEdZV92tgxk2NYr9VmVFHWmz7Bfo-qiulI9mT1VU3PLFJOKB8-reJjm3yngb5mlYCZvtLP4YaWc4w7kkoDivqgNQktlmZ1rgZfvdr_i72HYAvxMhVyit3-4lUkzYYGC-FiW-Al4S0Ne-argGXfNB8AaR1hDxy3K7WOErgJLDhIb3s7onkcAKo196oZ1Q2iSu18sh3SRTX9ivP8Ve9L2Hs9JlBDx2TezhvwqiB3I9q0U6iNEtdpx1I9rPgZQRATLSx9Vhi6uPD5mNspihWz528EVBBtRJrqBqVUS5X6Iq_5HSUfGUstmaPOXbBJdAnDQcAuUzqWDTN-3Q9s5Zxa1tk69VHvhShmV1pol913Un2yXiEWwfPqFZ3tWQ-v8okGR3Ot3L29HmjTcpw_oQ0cwS0GboFcTlJOg9bw2qFhg=w1078-h868"
                alt="image"
              />

              <div className="card-body">
                <h4 className="card-title">Josh Ziemenn Tan</h4>
                <h6 className="card-title">Backend</h6>
                <div className="container-fluid">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="social-icon fab fa-github fa-2x"
                      style={{ color: "#fff" }}
                    ></i>
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="social-icon fab fa-facebook fa-2x"
                      style={{ color: "#fff" }}
                    ></i>
                  </a>
                  <a
                    href="mailto:gmail@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="social-icon fas fa-envelope fa-2x"
                      style={{ color: "#fff" }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 5 */}
            <div
              className="card card-about text-center my-4"
            >
              <img
                className="card-img-top p-4"
                src="https://lh3.googleusercontent.com/fife/ALs6j_Eb4i6Kv-ggL4n8LifflHKtAWsR_U0CkI54Lo0eSee-5lxs4oBi79lLEQ4-unyOU0CeanSXehrEvqS5ZAI7wAhmx0wZDgtn8tsi77ieeawZrW4154gxHH2aLxqdMtHQpVAfOgFU-kp_jiplzSK9k9iDT86nGCkrSjzV4UXyPl-GjLXWUFWuk26MjbusHOO6f4a6dMBpJKX7QZQ_6-V78vu6_mxMe5ffActJX28kQI6wAfuWFK6bnXbRnYQwnbMLTZ0QPZyU9nXMwSRPVhXUklIzmKjIiamy7ZCqoFkOehp7j9CO8Sw-43zTcSdvVhZdkvJvKiUpi3yk-N-iV27KA-apJrqaFYCI_Cl8KKgecuQt75X2DfEUAjhSMlrq-fUXGkVHW76ShLpgwTGm6ykTG9nB_I5wGM6Ml6rzqtdsXtSnfDqCcSN0GNsRGwMfkmP4xOA_jbcSI3ggsdYL7oSgPQBt4hjm3kOg8hCSQwCx-flOtBnJejtMZKMH0lut2Q8jW9QHAc2AVzz8QsWWugJWmq14bA-rHCQrPHVSuh7M3jyUrjbCSKEAlggntgTXtGV2GWna9tCwpsik7Q3TfPFCRASFup-Af0b1Y0CCbVScJc7s5-pESKgqhfPsm8VE2fkz-pkz-HaIlJuwZdgs9u9j6OTw5KAUppmOEaCIQhZO51PpAjS8DAzmRtOcvtI4o1ZqO8AeEAoAwRrtKKbkFnUzA3MJq9_0GUX8cvcBPgNr0kx1wohAGyGri6pB_STdWB7FkLZuZPZC2GTxJbkMRlx8KjJg6R8p5maulFHEtmTG5ZT84O1MqXO6-3LZM1b7agOoO40gisb2HweDY19f2wqEBAM4nJ9HrAs5PIesSo7BALdmA7JONY1LF2YBTt3kwpQ8oQ9SSiu0-AbuF_gEKGPzTvR-4ePfL4nUZ4W5Kji8WVhwJLoMgILiJ1yyarSaJ_hbBi-UhWTJynMorTuCnedzwWL5NHHzuLrYNPNCoLqGYI7fhLtsktq1K5Z0wrDqCP4U-l62yh7JBBZL4nluQNU3JWDNrKUWzDb18IBfa2zn2bBvUR6UO5wSaH8AxAueBKqW8zmh4yokO6I_tJB0XqvbBrDQp3y-LS9roCBNM9kNQ1ebDtTGD4clT81Wx6q6_hDMEmQY6IPxHVZK0FnGeUVXaceoKqeao2ZBLzrFnpUPsAYoy3md7dog1pmKwt0SsR08k3vlEZJY3T-ZobIIWO6vwL9jfKzapymIZXvZ1kwGragnISYF0-3O0KsdIiMzF0kvBvWZe3U64WiTj-Qdn3ue4HmxWowkrj6pBgScD4JXU-STEerW4zfJstH1kgWStSIb-90jMGAkQsYzj89sEAncMDF3Wj8Mj3QWbNHWMLoHb5osnWyN_kSxD35PxOyQkkxNreuX_OM3Eb3gi7ubgvbCstNHTR5mBiJdqbUTuWrlSKRVBTLUunjDpeBLY1Teujm-hqfXNmZQN5Zsgh9mEcAUOSABFAj4JXi1XT68rM6D5VAoVCxi0vjG32fukW_Mlvp05nlbDi9uS_qlMUrPiPzc5lN_mb4cDTc2KIA6Svb01tS6NUhprNpInw-LK9N7TDBDYRC2MHnEkLYV9XkeEQ=w1920-h868"
                alt="image"
              />

              <div className="card-body">
                <h4 className="card-title">Jhun Mark Obreros</h4>
                <h6 className="card-title">Back End</h6>
                <div className="container-fluid">
                  <a
                    href="https://github.com/link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="social-icon fab fa-github fa-2x"
                      style={{ color: "#fff" }}
                    ></i>
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="social-icon fab fa-facebook fa-2x"
                      style={{ color: "#fff" }}
                    ></i>
                  </a>
                  <a
                    href="mailto:gmail@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="social-icon fas fa-envelope fa-2x"
                      style={{ color: "#fff" }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        {/* Include Footer here */}
      </div>
    </div>
  );
}

export default About;
