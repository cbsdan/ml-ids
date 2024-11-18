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
                src="https://lh3.googleusercontent.com/fife/ALs6j_GzkvDi10tp-NXeALyxfiIrsMtSPwCUUKuD1_rRuNsqgmCYaf-7Ri_Y1ZSzVlPd6z-StjKscY-9wkJZsq7EaKYxmwhs9Ky-dqzEfdYGrrRIJTPUToUJNy59dbmhk8_eGmWHSGrfY4pu87D9JjsdEM_OMwQUxhkYMnzBvwgu3te-usCQwUkRF710fqjGRQ_Ww8_npyjS4fToJBUZib5mPSWzCdUXQEtx5Z4ro4L_DXC3K_tP0oWmzkRSEkgmMF5pCocJbQEb1aiiI1gBDz-z7CbkNfiu_LvbcuAG4er5GuI7tBFmh2SHAuxNLrpefARD5WQi6z-8awgW7GSTEgLrtQSyQMqWn55XCBKCKFTTcyBMfcRp8B2dOn-nNRK4mGwh8S_zjE0FL5lyrHZqe8ZwKoV_Oo9G5zNy_Bxe_f3vMKJ0oxW4geG6yuUd_qcnhAKPt_4jrnzLoR5OQpDt5GeMb4LurBjJYiRxTxYnqTNYDT8gVhrwqHg5i6NXVh6jyF1xnDkiIbxk_bYvgJKkNHtPuye0VLCME9t-NOQRho4utOi5LI6cGiBmKjwtSB2QBIqDceJLidsUEKlfCIu53T2rcik7TsjJz69OnDeB1A028UQvpmxOot-FwFTSPXBSSaRg5mzNZPeViDWEaXpHrtJBxTml0C90FvLlFhmDlj82ioJ7cABdQ-Ihql39S7kbaKl3TgPxAddOetJnn-BMnQ8ekelUySnijxSY4puf2pvlTurURXitTwMM7UsBJ29bAjsBzAKsdKL4Ph-OPV-2s8jjJqQNMQskQclk55I35YpSy0OqWzgQ49P8Nw-X4IIQ4-_ks3IEYo_zzdfQQLAO_CvtM5WjMEwjhTgAW7LGHNNu2AKdDG7aTcqDPBaNVUHH99BNGS1A3jE8bk6frCHUTFuSgzyWYjJV10K2cKgWAswu0hNptVTmd9Lm1nI9oRCJ0COLy_dfy7UplvNnxapRukY0-hMOrOyOua-NLAWt9T-O1x8FhEZ9fpfKLSUOWsVT0StKleEWZ04077VFPRhdYqS7Cxz_57Bixtw3KyN7HZlPnNKtYJG47tP36J2piu1L9nEhwAZRbj7zcJJ4sF9PZr-Ko1MxlGOi7KjWMLe3tTLfsEB2dXk6sZyTJYyVUkK5JGvY6HcTt21q5M8P47bcw8pINg6HvSVLN7qstBz_862XMGTMdPBxjAXLoOuuEPVlSZ7SoZkK3Vmz9G3XDQQfrYEDDnEdAkJZ24d0jWbC-9vxAF2k6rGgMYUXvVBKtiVT9SNNPKGkqvA7tBO2qu3XXpgghl1HvuU8QQU2NA0Ly8dDTYpYUJhnCcr8xJ8xDBItaAgRWp7WTzpbsxJeNDLlzv06mp_g_ihdMNcYqjRRoy-Uf6F-VALLsHxGF_3MPbGOmtuEdjrw9K0wJgCS1z3XBXF422GyfYh-E8v4OZqrNd7Ov9YxeFw6or9T9iC_X9v2ooLfNesZFwGFjGfc1T1z3MUe5HJUnlChbxxRaLXOT3nahW_67UWmGht2cuzwhVmnzOD_hOrVYG0hXleetq5LdlIrl_PkZnNkXeuboy_hW4IVgz6p_oLzIPqmbaQ2JpEO6bSIoKIxGNCaQv_hZ4v4IePg0w=w1243-h913"
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
                src="https://lh3.googleusercontent.com/fife/ALs6j_HVaQyYKg_FmrDzmUGv1cQrnhR3ELl5fuwwGMeTKmrNXj8-OnGjU5bHgMPy1TS0F6aWbZBP0oFvw9OzeS1829A91oCnYtzqcfxMEscXt1RdwLL7-EdsghfifAlkd30iCg6UZ1UAdAORXYWGRIxHP-10Tf6rAAFuQdGQjD32wY0ebBecswZDtkYzXWs6V7aiYRKYa3NPty6Ha5qA3za1BuUGKbtrIA4lBEgQX33L7fsI6nzLj_eIwWO0jDJKdx2meXbSdxdLlV-3tYnNFSC5OIsTKd4_m7ZDnmFI7saB_l37Buk_FOd59vp8lnyTkemx52xqicrYMmet1aQ3_nN1H0ZbIfRZh3mtgN1LwmIl6Zb3BnLCZYS11GkNGxCaSnp9_rG4L2DEyzy4cOatQgHfPY35LFsJxEI-c612jX101f3IiUzw9dWjmUEegcKFcvtQgJbhHpBMf67ic1mSmd5pnORslzCDzKgqI2Klvi_eC0L-zU_Le_5TaQrkYZ3asIKiYb2vl1RDAa6Aqc0G0zUBmuFDkFz0hvHqxNcJCpNZiGYHJjXHjZZU5mHnwidGO0hepgOM9yJV-dG9dyz3P_I3DnKjWqtZY8Jj-PY8Zg3Ya0iSaTGFTajfY2inOPbbHn-5WFdxMBRFUQlLwDf4vsJyjXANB1R4XPApKEf0mdDNjs21iWfJjyok04joFNnFYcYltA5lRqx3xW_h70DfnRIPHYNbdkSaPkpTBIP_HOlZZI6ER31OWP7-VbHDX_Gq-V3s2xL17IrHDxF-QLVY4S7q0LIYXxRZlxO94F9Shs13n7JE5D-_x8m7xBJ0feH1f2dYMs1ZVe0hURsNcP7LRFB3rSqWfvxCvI-lmclZeLhKEDGJSYmPBXoi6O8udUrNJi1znj1w7gejYsXOrSyMV7BTlnB7_QgBtEiOKa3Immd00NDBrd6s3CJkF55lFdkiFA7h3Smv6OfJ4Xc2IhC6x15hC4gfO2K5LCYLyzaJts8qhjBlN1H1iCFHxwpFJIcO67m2xL-8uRjoXN8qClGU9VxM286rrb8sk0ya5pfpzWnseIdrwe643LdhyZYwa2xuyUpeYUUP34Zg86OFdEpGkq4clVuOo-MJZQ7oXxyWorpF6jd_Bf2yzCpeKuxqtr7nn_jijN6JM4PRxyheO_RWnYSQldYlz_2NSKDeq_wX7IQ13T9i_oJxHCJGG0n9WoP6VqMcOyigHhYOAOe5UjCoZRqThHErhCbc_X92RfOd1bfd_8M88CAiLdIwfRTgdtoynlMmLIuDz0RZjvZsMpn7HPwsDWvuy2KfTBLIxZfF8FT83eN0ubS41gLjQKbqI_KrQnpP9aMm9fFkyxfZCto7mF8WN1PJUNk5RLnlpRpk7dOYJtHS3djPl9OZ64y8NJo-jJ4AFZKXq9AFRp9vaVIO0qshQd2UlUqwNzZe3EwD_GGCLjeDuHXD2kvRQAxFQ8NtUwAj1e1VFDBQaXX6JYAdmh1tO5XzxD7xQxZPqWXH7KF78XPyq_GJBs8R_ufTF1DZgk8DVf5Sil1ZB0EuRs021r7So5RgxYGrW_LxMBazFCA2GFtUOxayVqYXmCRZjp-pkJqjMz_D84N11h5csVwdJiE=w1243-h913"
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
                src="https://lh3.googleusercontent.com/fife/ALs6j_Huk2C-YBV-YvVnl9touR86w8gQl503JqRRAvQCf8g55VQBTqdO6bsvVAb4mIeXzpscKAyqq4CIIQEU2Cmevz2eQAiL9bQO4LKKML_qEVawx-CD0S676mN9o-gii4s_jQWLSl3LAjIKddNHxzXh4lLRSwo_UI_TS5V4ZWEwb59QRsgwS6Jyf1nnRZb_sbS26wS6LMDOdNciqQzJ6a86RgrpDOKZXmiR91SpFiBi7r6NXET3_L-UzYEnnr1iZrauA4279pC-K-oMxlkPaQseluju58TQW5dO0QEWyYHnOX3F5XZLFCTFQhi9guSawMBf21jI1mG6CMNrrR8ZS10MJvnjXXZ5bMZelwxyxNmwTxtLlNL7qcsvqXYjID7Nrqc5L2Sbo0naq9UE9vI-hJylBrIySZaCWxum6buQkRU89a8YAdsdMeDAYy24zNmbKDlkiOs7_YGd-LdMe8SyPSX1gf2dQ4EyeF338na7eXmZLHPJ4an0yrT6ytDqYI9IsmzFdGv-R-Dyrv_BF5LvmWtnBm90OFrgHTL9eevIHLhpsm8gfHnBMnu7GaCUQlfDlflyRHaOuoYMnqRQlCGxzBpo1fek7qm611W-nLhxT6APB2q6laFZYIh9KRh5OR-55l4lVuSpfdpTZNRJYOXlmnVJeFcYor_EQvL3sI55DGo_nO_aqPSTikbB971d-KN4warSwkzA-huUiBb5jeJ8NIWCYeKIYO-dJFO3P-BbufxSEr0z_K1fsJbeuEV0bscZ7yN3AZ31g5c9Vo8QT1WgAvyYOp2LU6nVCufdxDRy29Yv1onytgFgqMCMY-rzxml7QvBD4jPTVQeCTEGIdhMsIy-RkFEU6Q5TbbkN43r595oElC7qtPWUMbfReblSKBJtFE5B3DT-vJu0qw1p_mPnNf1fViid-z2TLV_NuM1ogPNf9MT_vYjxWflQHc-46ekdSq_r5HVlHe79tTMUkW3aXopijDSlFo656DonXYVUdQrXHhO_gLOk1OvCrX6Y-ZgmlTdQiMIgzPspn1TBCp7-agjUCYwFbVxIIancPfrOBI3_OTUocTfhX8mHkir-GkRN9GCpIRYbBfKrZqE6-Gxuxg2YpuyFLypgHf8_EE8quN_FwRYXGRGgIDNEqyfO46UqzDmC6So890-dXK8lOpfgkYJR2KNzQS9kADy4Ww2zhccXtO_2CRr4KjkYZFx1ow1KpJMcesO05w2_MlvjfYo60ZmHEjwfgG0EeP3mwqCp0MPeQBS5le7FMW4lw6oB4K5cME0RwkNtkO2miz_SUGpmEnFpy_sl7Hgpl-JlmIvXGIs66DaOg37hkSo1Ao8vGT1xI9JLjui_4fR-HcDKVN5NMcbBPjql84_YlXXBOAszT-FVFMil4sIMK3ypeLg3x6dL60sUHFjqOSh6evZzJ1eVFr4MkoeXUGK_C3FSO8hlsSp8xF57jA4L8Mf7cjQQ_0BULS10DF6PKCrA2XVdbJRt5dR1VyHBvH0TFdEoAnlqJDbxW_Vm4f2s8OAhMDrrCoKm4RrUaUuyZeYtYkJBhp4RENxkjE4LpGbEjwZf56B3l5yT4bYwu87YhU-X-3ux3WjWAHoqyUToq_mKV7J2GuSX9KHCPg=w1243-h913"
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
                src="https://lh3.googleusercontent.com/fife/ALs6j_Ev_IFViuoFKck5l0SQZjnqB6zy5GPh4KLuBELy4i0tSSaVhldKwX5w7uXHgo3RYev9Zy1huNfUGMEb9YuDaelgzRSG04vwvFgQA5pZVBQU1qSdDgf9tHATSlw4snzPjUzbGENxP3uuNInKSsP2qU3d3LS68j-n58vDZqqCIE5ahtXcyts4nWl2CfuEJ5sUABLo6I82IGvKrzffWOlgiqCcj6Oh-umhKqBtAWyCHg52m41vo346E4-EcU-ipjE5iVHmiYpEFyyf4YR8qN5vQ5GStiYhv7RDw72VrbYGFncAEMUJI2MpaKcAApUb6AFqf4TFoGK5bV-e0JYkMbjgxq4f6VXv0faYoGSQRqMNiWB2-icl25STn8CNh1zFbft2Kgbyj2Vh396BYDgrtM2yrOjKUzCFtAL31Ohvwju3GPUKQGkVRjH_LsEoaRqFloYjFaE8GL66DR-gM_EFxz0UoGCbZ9gpDQ0DVllkhi9nY-XzWyEbT8GqTHO9dnRPPWa04zSR8FdS6hdNtqAXjF9U90CngMs9B7osqZ8xmi96p_vtwKTKgD4gv2Ob0ngYG2rqnOEj5TbyYQmxNkbcrZPoPrJns6Ki7IyUbbHSarAPphXu8ZCVp8TpDwUm3iFTzuMVFFCHFadLk437Rg9UpyOsOgnqYsvx3757MbvD0G7RSURtXG2FFJbSGOkYIJPcr2SAVqhd4klm4mdOeF7FAJc8_pJc9-Sk5hMEZ61rDshjvNeezT-syun8KHX9R7XfDZX2DeTOVydmDOcRm4edxGX-qAupkFW1f6V7PAGWstdold7C11ZFT2YOb8SQI3RiBAXdKT-tlxBiLhPfK96J5O45YyoRBf6kceoOgLj2KNQTUol7iEq_LiOaEpM1mOJtd7-Wf5I4ATYWva8FOi1DBvV4tTOYe2KfPW_PCFXjFGI9VhjoXTU8of4bxKZ1C3UrUBdgoyXYjNHeA-x1KZYCrpAM-LOBKD3Z0vOR09M42ZNtHU5u1dWSjC1As2VKAcVyHkvZubuSKri2xKAlTWKvDLwpMazotC-r1ZLpnj6_bXz80k-qWehq0uNdlusWid48HFPvQ9zpOoQYliOeOkfvM25V9smHk636Fzf7j7YsaSpgSQ7qkF1N5l3LcJ2XBMKcXxwvZxdyW5aVWmP1P7bvE1Hs5VD-8cn-6Ft7Cm5-LOlVBOundo9Srq7r6y-ywGAEC0zE03bpWx_AFdtmPIkNJEUMxYp5LN4EYaB0NRZ5SOlmOZIardu0Uyq-woneQ6-QkmU8O4cT4-jfc3-DOYQTL5dYVTFZioh6jrRHmaTiNnTxOpY4QDgly6A25MPvN4bZ9cdTu1GVCLhkB6fTKIMBzGbEtqVyS0YJtoueh9CCMUi4zL3w7LAW8VxB39oSv7nsu48vg58xhporzz_qOy-QvN3HDvRy5tUpCoMerwtRh47Xmqeu68hIHjgviJ8mALlhW9EBglfoxXJ0Lkg1Kaul0JGxKYO7TZPyQktX0Rg9myB4Tfnxz5Cn_lm1HJ3m0MSCg8v0ebLV5ZrX0t2c5K0MSEpGj0zOVB_deQ1in8RUQglfD03SLkMAkgN4JTHJst6O9Z3r7MA-3QsqvYUGlPXBeZ28Bg=w1243-h913"
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
                src="https://lh3.googleusercontent.com/fife/ALs6j_FtpLi7HdTMFPoGndNbiZkaxJhknaMKnir5CJWAU_uxV1ACaYFiYv_LRTtEicMExMum27f5UI5GD5FqEnJyBNCJ_SER97zzvoHXHoRzJxM2JZ17GFu0IyIHs7gfOnDcK8mOtVrpThm1BpzTLVKnAKSFEdqPLFg7TZYwYXlwsFo8Tt5mci8t0W-Cb2P4nbWZ3-xBYp2GFeeo3bLqlR-x02tG2-oZtTns9WPCZFIwe5GWfjF_Z_LqhO5o0LL8arOB7zrULxLiF5qYS0f9PolS4Acg_9CNg0PjguMw_e-0B8vfumGzqJKJXZsYHRZP3ekpxDwKWo7z6W0oDGMV5ulrgT4GcjYecp32q3ohRW4Vukh-mQMAEsex7H0pR5B7DMaLUwcm4GJ38gGj2dJ12adBxM9aNdU3WYhcRRB2d1UCaJ3FXpFHZ8GWmFx8XJpOMNwb5h8eefncT60XDj1e0BKTNj1xZnNVLbCwOQb2tsVrmLP2E-5RsZ_rAumKUgpW8kKWmNek5NL9XsDo8yFojp-EniMsf01wsObFg_D4fvRnA9YzygbSbqKN18qB5oyQxpltTp-SzQQ9KwivkrRImx1hYPWeCj8PqRxuvcq0OjEqRxitFBogHczoenw00VPvnlrRpGD3E46_zhx5MqXuF8t0T9IExriTWTyAt1p4UuuDaR89ih45Yh84M54FU0cCC5BUo-t4RnQxLhRTVUn_i4QqjdFgeiZGixFjISMW3CeiR_WhBMfGcHRI767h-p6mmg0O-oeh91pcnFs_zkRckMC71OX0ubt5qwUYLbjQIy4YIq44fWQnuhr32oCOQ6RqcjOZISdfuP5rPDgwH5YZzqcUq3YnK-qy1SSINhnIKFB5X3XKjTawW_koiAPtdMiHlgKdemKIsT1kx2L3g1c34IS_ZLnQy9J2bxgY4GpcPbOiK3aylSoqp9gWO38sQ6Hu7ROXgx9pZJ8iWCsnXJbptzQJrD44ZqdtNPdIQ9WykKJyEoBYNkTJRDeMdQc4bIlR632tsjnktdNmKlo0_3jefCtsaWJpz7VhGRYcwxV0BfyMXvs4tYqlwXSu4A-g0GwKRd5VvH_MNt_trMnwgwD_zENk2issmfq_XAu5MXP4M6wokJdycO_gPqNIBMGu8YTeEv-UeTWhL6975M6I5Qkxvn4nPSKldsWTXZc1apFVdCzdx2aNSZeifZceFYuUfGsN9Ul8lWQBRe9hyZpvsTVX3MPf6JC3hBMh_SowfHwtRt_OTzisokQCvR-HXM5v00uAZgUJEQTsEgV90pzn4wln8Ftg4zPPI0FWc6FbR1JE4AUGuIFGaMTv4EFVcZ1-yiEliplYhMEMbKv5cdYMxiWexL26VGeNL7VQEXGiyXgxz6AJAgd1NCY_l76PHPy0jTsjF2_KOFcERFGOZSYX3jgd7Fv0VjVlcefMdHmMBwcnNM72kcrdoEAqy6A93fxEigSi6FytbuX4--QYaSvoFmcfCWYTXhCP6ntMQYGtUM2Jg1d38PIUD0_yElPTtZryBDk5VfJhemAXWmWPQTVz5VnwPGBDceRRYRbTKN3mtXKDmYcsQB-Y390K0rNDiTkfWPazOSLczmbv-gUXLDbeSp4XyzE=w1243-h913"
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
